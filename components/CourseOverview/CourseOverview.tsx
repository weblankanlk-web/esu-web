import React from "react";

interface CourseOverviewProps {
  course?: {
    description?: string;
  };
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ course }) => {
  return (
    <>
      <div className="course-details-wrapper">
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
    </>
  );
};

export default CourseOverview;
