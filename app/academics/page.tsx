// "use client";

// import { graphQLClient } from "@/lib/graphql-client";
// import {
//   ALL_COURSE_QUERY,
//   COURSE_TYPES_QUERY,
//   SCHOOL_TYPES_QUERY,
//   BRANCH_TYPES_QUERY,
//   DELIVERY_MODE_QUERY,
// } from "@/queries/queries";
// import CourseItem from "@/components/CourseItem/CourseItem";
// import CatalogPage from "@/components/CatalogModule/CatalogPage";
// import { Course } from "@/types/data";

// const page = async () => {
//   const [coursesData, schoolTypes] = await Promise.all([
//     graphQLClient.request(ALL_COURSE_QUERY) as Promise<{
//       courses: { nodes: any[] };
//     }>,
//     graphQLClient.request(SCHOOL_TYPES_QUERY) as Promise<{
//       schoolTypes: { nodes: any[] };
//     }>,
//   ]);

//   return (
//     <CatalogPage
//       heading="courses"
//       items={coursesData.courses.nodes}
//       filters={{
//         schoolTypes: schoolTypes.schoolTypes.nodes,
//       }}
//     />
//   );
// };

// export default page;
