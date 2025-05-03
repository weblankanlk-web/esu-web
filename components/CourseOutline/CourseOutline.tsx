import React from "react";
import CustomAccordion from "../Accordion/Accordion";

const CourseOutline = () => {
  return (
    <>
      <div id="section3">
        <div className="related-coures-div course-title">
          <h5>course outline</h5>
        </div>

        <div className="course-outline-wrap">
          <CustomAccordion />
        </div>
      </div>
    </>
  );
};

export default CourseOutline;
