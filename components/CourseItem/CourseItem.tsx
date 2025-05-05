import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Course {
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
  };
  partner?: string;
}

const CourseItem: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="course-box-wrap" key={course.id}>
      <Link
        className="course-box"
        href={{
          pathname: `/courses/${course.slug}`,
          query: { id: course.courses.courseId, courseId: course.id },
        }}
      >
        <div className="course-box-img">
          {course.tag && <span className="course-tag">{course.tag}</span>}
          {course.featuredImage?.node?.mediaItemUrl && (
            <img
              src={course.featuredImage.node.mediaItemUrl}
              alt={course.title}
            />
          )}
          <div className="course-box-img-content">
            <div className="course-box-img-content-inner">
              <p>
                {course.school && <span>{course.school}</span>}
                {course.type && <span> | {course.type}</span>}
              </p>
              <h6>{course.title}</h6>
            </div>
          </div>
        </div>
        {/* <div className="d-flex course-box-details">
          {course.duration && (
            <div className="d-flex course-box-details-left">
              <Image
                src="/assets/img/calendar.png"
                width={16}
                height={16}
                alt=""
              />
              <span>{course.duration}</span>
            </div>
          )}
          {Number(course.courses.studentsCount ?? 0) > 100 && (
            <div className="d-flex course-box-details-right">
              <Image src="/assets/img/stu.png" width={16} height={16} alt="" />
              <span>{course.courses.studentsCount}+</span>
            </div>
          )}
        </div> */}
        {/* {course.partner && (
          <p className="course-box-details-partner">{course.partner}</p>
        )} */}
      </Link>
    </div>
  );
};

export default CourseItem;
