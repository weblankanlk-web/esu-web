// import { getCourseBySlug } from "@/lib/esoft-api";
// import { NextRequest } from "next/server";

// export async function GET(
//   req: NextRequest,
//   { params }: { params: { slug: string } }
// ) {
//   try {
//     const course = await getCourseBySlug(params.slug);
//     return Response.json(course);
//   } catch (err) {
//     return new Response(JSON.stringify({ error: "Course not found" }), {
//       status: 404,
//     });
//   }
// }
