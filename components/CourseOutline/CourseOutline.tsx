import React from "react";
import CustomAccordion from "../Accordion/Accordion";

interface CourseOutlineProps {
  modules: {
    id: number;
    is_enabled: number;
    is_mandatory: number;
    code: string;
    name: string;
    description: string | null;
  }[];
}

const CourseOutline: React.FC<CourseOutlineProps> = ({ modules }) => {
  return (
    <div className="course-details-wrapper">
      <div id="section3">
        <div className="related-coures-div course-title">
          <h5>Course Outline</h5>
        </div>
        <div className="course-outline-wrap">
          <CustomAccordion modules={modules} />
        </div>
      </div>
    </div>
  );
};

export default CourseOutline;
