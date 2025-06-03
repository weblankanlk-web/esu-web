// import axios from "axios";
// import { getCachedData } from "./cache";

// const headers = {
//   Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
//   Accept: "application/json",
//   "Content-Type": "application/json",
// };

// export async function getCourseById(courseId: string) {
//   return getCachedData(
//     `course:${courseId}`,
//     async () => {
//       const res = await axios.get(
//         `https://publicapi.esoft.lk/api/v1/courses/${courseId}`,
//         { headers }
//       );
//       return res.data;
//     },
//     300 // 5 min TTL
//   );
// }

// export async function getCourseFees(courseId: string) {
//   return getCachedData(
//     `fees:${courseId}`,
//     async () => {
//       const res = await axios.get(
//         `https://publicapi.esoft.lk/api/v1/courses/${courseId}/fees`,
//         { headers }
//       );
//       return res.data;
//     },
//     300 // 5 min TTL
//   );
// }

// export async function getCourseBySlug(slug: string) {
//   const courses = await getCachedData(
//     "all_courses",
//     async () => {
//       const response = await axios.get(
//         "https://publicapi.esoft.lk/api/v1/courses",
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
//           },
//         }
//       );
//       return response.data;
//     },
//     60 * 60
//   ); // cache 1 hour

//   const course = courses.find((c: any) => c.slug === slug);
//   if (!course) throw new Error("Course not found");
//   return course;
// }

import axios from "axios";
import { getOrSetCache } from "./cache";

const headers = {
  Authorization: `Bearer ${process.env.ESOFT_API_KEY}`,
  "Content-Type": "application/json",
  Accept: "application/json",
};

export async function getCourse(courseId: string) {
  return await getOrSetCache(`course:${courseId}`, async () => {
    const res = await axios.get(
      `https://publicapi.esoft.lk/api/v1/courses/${courseId}`,
      { headers }
    );
    return res.data;
  });
}

export async function getCourseFees(courseId: string) {
  return await getOrSetCache(`course:${courseId}:fees`, async () => {
    const res = await axios.get(
      `https://publicapi.esoft.lk/api/v1/courses/${courseId}/fees?for_entity=esu`,
      { headers }
    );
    return res.data;
  });
}
