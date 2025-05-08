"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import TitleSmall from "../TitleSmall/TitleSmall";
import Button from "../Button/Button";
import CourseItem from "../CourseItem/CourseItem";
import { graphQLClient } from "@/lib/graphql-client";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const COURSE_QUERY = `
query {
  courses (first: 8) {
    nodes {
      id
      title
      slug
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      courses {
        courseId
        courseCode
        studentsCount
      }
      schoolTypes {
        nodes {
          slug
          name
        }
      }
      courseTypes {
        nodes {
          slug
          name
        }
      }
    }
  }
}
`;

type Course = {
  id: string;
  title: string;
  slug: string;
  featuredImage: {
    node: {
      mediaItemUrl: string;
    };
  } | null;
  courses: {
    courseId: string;
    courseCode: string;
    studentsCount: string | null;
  };
  schoolTypes?: { nodes: { slug: string; name: string }[] };
  courseTypes?: { nodes: { slug: string; name: string }[] };
};

export default function HomeCourses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await graphQLClient.request<{
          courses: { nodes: Course[] };
        }>(COURSE_QUERY);
        setCourses(data.courses.nodes);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="home-courses">
      <div className="main-wrap-title">
        <div className="title-wrap">
          <TitleSmall title="Explore" subtitle="Our Courses" />
        </div>
        <div className="button-wrap">
          <Button buttonName="Explore More" buttonUrl="/courses" />
        </div>
      </div>
      <div className="slider-wrap">
        <Slider {...settings} className="courses-slider">
          {courses.map((course) => (
            <div key={course.id} className="item">
              <CourseItem
                course={{
                  ...course,
                  featuredImage: course.featuredImage
                    ? {
                        node: {
                          mediaItemUrl: course.featuredImage.node.mediaItemUrl,
                        },
                      }
                    : undefined,
                  courses: {
                    ...course.courses,
                    studentsCount: course.courses.studentsCount
                      ? parseInt(course.courses.studentsCount, 10)
                      : undefined,
                  },
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
