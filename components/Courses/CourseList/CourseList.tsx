'use client';
import CourseItem from '@/components/CourseItem/CourseItem';
import React from 'react';

interface Props {
  courses: any[];
  currentPage: number;
  coursesPerPage: number;
}

export default function CourseList({ courses, currentPage, coursesPerPage }: Props) {
  const start = (currentPage - 1) * coursesPerPage;
  const end = start + coursesPerPage;

  return (
    <>
      {courses.slice(start, end).map((course) => (
        <CourseItem
          key={course.id}
          course={{
            ...course,
            featuredImage: course.featuredImage
              ? { node: { mediaItemUrl: course.featuredImage.node.mediaItemUrl } }
              : undefined,
            courses: {
              ...course.courses,
              studentsCount: course.courses.studentsCount
                ? parseInt(course.courses.studentsCount, 10)
                : undefined,
            },
          }}
        />
      ))}
    </>
  );
}
