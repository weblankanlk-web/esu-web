"use client";

import Breadrumb from "@/components/Breadcrumb/Breadcrumb";
import CourseItem from "@/components/CourseItem/CourseItem";
import Header from "@/components/Header/Header";
import { graphQLClient } from "@/lib/graphql-client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./style.scss";
import CustomAccordion from "@/components/Accordion/Accordion";
import Fees from "@/components/Fees/Fees";
import Schedule from "@/components/Schedule/Schedule";
import LecturePanel from "@/components/LecturePanel/LecturePanel";
import CourseOutline from "@/components/CourseOutline/CourseOutline";

const COURSE_QUERY = `
query($id: ID!) {
  course(id: $id, idType: ID) {
    id
    title
    content
    slug
    featuredImage {
      node {
        id
        slug
        uri
        mediaItemUrl
      }
    }
    courses {
      courseId
      courseCode
      hideCount
      studentsCount
      partnerUniversity {
        node {
          id
        }
      }
      title
      subTitle
      description
      overview
      yearTitle {
        fieldGroupName
        modules
      }
      entryRequirements
      documents
      lecturePanelDescription
    }
    schoolTypes {
      nodes {
        slug
      }
    }
    courseTypes {
      nodes {
        slug
      }
    }
    deliveryModeTypes {
      nodes {
        slug
      }
    }
    branchTypes {
      nodes {
        slug
      }
    }
  }
}`;

type Course = {
  id: string;
  slug: string;
  tag?: string;
  featuredImage?: {
    node?: {
      mediaItemUrl?: string;
    };
  };
  title: string;
  school?: string;
  type?: string;
  duration?: string;
  courses: {
    courseId: string;
    studentsCount?: number;
    lecturePanelDescription: string | null;
    entryRequirements: string | null;
    documents: string | null;
    overview: string | null;
    description: string | null;
    yearTitle: {
      fieldGroupName: string;
      modules: string;
    } | null;
    hideCount: boolean;
    partnerUniversity: {
      node: {
        id: string;
      };
    } | null;
    title: string | null;
    subTitle: string | null;
    courseCode: string | null;
  };
  partner?: string;
};

const RELATED_COURSES_QUERY = `
query {
  courses (first: 100) {
    nodes {
      id
      title
      content
      slug
      featuredImage {
        node {
          id
          slug
          uri
          mediaItemUrl
        }
      }
      courses {
        courseId
        courseCode
        hideCount
        studentsCount
        partnerUniversity {
          node {
            id
          }
        }
        title
        subTitle
        description
        overview
        yearTitle {
          fieldGroupName
          modules
        }
        entryRequirements
        documents
        lecturePanelDescription
      }
    
      schoolTypes {
        nodes {
          slug
        }
      }
      courseTypes {
        nodes {
          slug
        }
      }
      deliveryModeTypes {
        nodes {
          slug
        }
      }
      branchTypes {
        nodes {
          slug
        }
      }
    }
  }
}
`;

type RelatedCourses = {
  id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage: {
    node: {
      id: string;
      slug: string;
      uri: string;
      mediaItemUrl: string;
    };
  } | null;
  courses: {
    courseId: string;
    courseCode: string;
    hideCount: boolean;
    studentsCount: string | null;
    partnerUniversity: {
      node: {
        id: string;
      };
    } | null;
    title: string | null;
    subTitle: string | null;
    description: string | null;
    overview: string | null;
    yearTitle: {
      fieldGroupName: string;
      modules: string;
    } | null;
    entryRequirements: string | null;
    documents: string | null;
    lecturePanelDescription: string | null;
  };
  schoolTypes?: { nodes: { slug: string }[] };
  courseTypes?: { nodes: { slug: string }[] };
  deliveryModeTypes?: { nodes: { slug: string }[] };
  branchTypes?: { nodes: { slug: string }[] };
};

const page = () => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("id");
  const wpCourseId = searchParams.get("courseId");

  const [course, setCourse] = useState<{
    description?: string;
    name?: string;
  } | null>(null);
  const [courseFees, setCourseFees] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [courseDetails, setCourseDetails] = useState<Course | null>(null);
  const [relatedCourses, setRelatedCourses] = useState<RelatedCourses[]>([]);

  // console.log("Course ID:", courseId);

  useEffect(() => {
    if (!courseId) return;

    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `https://publicapi.esoft.lk/api/v1/courses/${courseId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${
                process.env.NEXT_PUBLIC_API_KEY ||
                "1100626|VPJcv2Y6wFiHPw4i60xdc1WQ2NMPUQgerXlYhOyI3a07cd1c"
              }`,
            },
          }
        );

        setCourse(response.data.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    const fetchCourseDetails = async () => {
      try {
        const response = await graphQLClient.request<{
          course: Course;
        }>(COURSE_QUERY, {
          id: wpCourseId,
        });

        // console.log("GraphQL Course Data:", response.course);
        setCourseDetails(response.course);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    const fetchCourseFees = async () => {
      try {
        const response = await axios.get(
          `https://publicapi.esoft.lk/api/v1/courses/${courseId}/fees`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${
                process.env.NEXT_PUBLIC_API_KEY ||
                "1100626|VPJcv2Y6wFiHPw4i60xdc1WQ2NMPUQgerXlYhOyI3a07cd1c"
              }`,
            },
          }
        );

        setCourseFees(response.data.data);
      } catch (error) {
        console.error("Error fetching course fees:", error);
      }
    };

    const fetchSchedule = async () => {
      try {
        const response = await axios.get(
          `https://publicapi.esoft.lk/api/v1/courses/${courseId}/batches?branch_id=`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${
                process.env.NEXT_PUBLIC_API_KEY ||
                "1100626|VPJcv2Y6wFiHPw4i60xdc1WQ2NMPUQgerXlYhOyI3a07cd1c"
              }`,
            },
          }
        );

        setSchedule(response.data);
      } catch (error) {
        console.error("Error fetching course schedule:", error);
      }
    };

    const fetchRelatedCourses = async () => {
      try {
        // const response = await graphQLClient.request<{
        //   relatedCourses: { nodes: RelatedCourses[] };
        // }>(RELATED_COURSES_QUERY);

        const response = await graphQLClient.request<{
          courses: { nodes: RelatedCourses[] };
        }>(RELATED_COURSES_QUERY);

        // console.log("GraphQL Related Courses Data:", response.courses.nodes);

        const filteredCourses = response.courses.nodes
          .filter((course) =>
            course.schoolTypes?.nodes.some(
              (type) => type.slug === "school-of-engineering"
            )
          )
          .slice(0, 3);

        setRelatedCourses(filteredCourses);
      } catch (error) {
        console.error("Error fetching related courses:", error);
      }
    };

    fetchCourse();
    fetchCourseDetails();
    fetchCourseFees();
    fetchSchedule();
    fetchRelatedCourses();
  }, [courseId]);

  // console.log("Course Data:", course);
  // console.log("Course Fees Data:", courseFees);
  // console.log("Schedule Data:", schedule);
  // console.log("Filtered Related Courses:", relatedCourses);
  // console.log("Course Details:", courseDetails);
  // console.log(courseDetails?.featuredImage?.node?.mediaItemUrl)

  return (
    <>
      <Breadrumb />

      <section className="simple-padding-bottom dark-lightmode dark-font-change">
        <div className="course-wrap">
          <div className="left-course">
            <div className="left-course-img">
              {courseDetails?.featuredImage?.node?.mediaItemUrl && (
                <img
                  src={courseDetails.featuredImage.node.mediaItemUrl}
                  alt={courseDetails.title}
                />
              )}
            </div>
            <div className="left-course-details">
              <h2>
                <span />
              </h2>
              <p className="paragraph paragraph--black" />
              <div className="d-flex justify-content-between course-btn-wrap">
                <a
                  className="next-btn next-btn--red next-btn--titlecase"
                  target="_blank"
                  href={`https://register.esoft.lk?id=${courseId}`}
                >
                  <span>Register Online</span>
                </a>
                <button
                  type="button"
                  className="next-btn next-btn--gray inquiry-now-btn next-btn--titlecase"
                  data-bs-toggle="modal"
                  data-bs-target="#inquiryModal"
                >
                  <span>Inquire Now</span>
                </button>
              </div>
            </div>
            <div className="desktop-div">
              <div className="related-coures-div">
                <h5>related courses</h5>
              </div>
              {relatedCourses?.map((course) => (
                <CourseItem key={course.id} course={course} />
              ))}
            </div>
          </div>
          <div className="right-course">
            <div className="course-details-bar">
              <div className="d-flex course-details-bar-details">
                {/* <div className="course-details-partner-logo">
                  <img src="" alt="" />
                </div> */}
                <div>
                  <p>
                    <span>School of Computing </span>
                    <span>| Certificate Level</span>
                  </p>
                  <h1>{course?.name || ""}</h1>
                  <div className="d-flex course-box-details">
                    <div className="d-flex course-box-details-right">
                      <img
                        src="http://esoft.local/wp-content/themes/esoftonline/assets/img/user.png"
                        alt=""
                      />
                      <span>2450+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-inner-details-box">
              <ul className="course-nav">
                <li>
                  <button className="active-btn nav-btn-in">overview</button>
                </li>
                <li>
                  <button className="nav-btn-in">course outline</button>
                </li>
                <li>
                  <button className="nav-btn-in">Schedule</button>
                </li>
                <li>
                  <button className="nav-btn-in">Fees</button>
                </li>
              </ul>

              <div className="course-details-overview">
                <div id="section1" className="related-coures-div course-title">
                  <h5>Course Overview</h5>
                </div>
                <div>
                  <div
                    className="the-content-div"
                    dangerouslySetInnerHTML={{
                      __html: course?.description || "",
                    }}
                  />
                </div>
              </div>

              <CourseOutline />

              <Schedule schedule={schedule} />
              {/* ------------------------------------------------ */}

              <Fees fees={courseFees} />
              {/* ------------------------------------------------ */}

              {courseDetails?.courses?.lecturePanelDescription && (
                <LecturePanel
                  lecturePanelDescription={
                    courseDetails?.courses?.lecturePanelDescription
                  }
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
