// app/api/esoft-courses/full/route.ts
import { NextRequest } from "next/server";
import { graphQLClient } from "@/lib/graphql-client";
import { ALL_COURSE_QUERY } from "@/common/queries/query";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${API_KEY}`,
};

export async function GET(req: NextRequest) {
  try {
    // 1. Get all courses from GraphQL
    interface CourseData {
      courses?: {
        nodes?: any[];
      };
    }

    const data = (await graphQLClient.request(ALL_COURSE_QUERY)) as CourseData;
    const courses = data?.courses?.nodes || [];

    // 2. For each course, get fees & batches
    const enrichedCourses = await Promise.all(
      courses.map(async (course: any) => {
        const courseId = course.courses?.courseId;
        if (!courseId) return { ...course, fees: null, schedule: null };

        try {
          const [feesRes, batchesRes] = await Promise.all([
            fetch(
              `https://publicapi.esoft.lk/api/v1/courses/${courseId}/fees`,
              {
                headers,
              }
            ).then((r) => r.json()),
            fetch(
              `https://publicapi.esoft.lk/api/v1/courses/${courseId}/batches?branch_id=`,
              {
                headers,
              }
            ).then((r) => r.json()),
          ]);

          return {
            ...course,
            fees: feesRes.data || null,
            schedule: batchesRes || null,
          };
        } catch (innerErr) {
          console.error(`Error enriching course ${courseId}`, innerErr);
          return { ...course, fees: null, schedule: null };
        }
      })
    );

    // 3. Return full enriched course list
    return new Response(JSON.stringify({ courses: enrichedCourses }), {
      status: 200,
    });
  } catch (error) {
    console.error("❌ Failed to load full course data:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
