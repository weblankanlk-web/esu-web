"use client";

import React from "react";
import CustomAccordion from "../Accordion/Accordion";
import { useTheme } from "@/lib/ThemeContext";

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
  const { color, setColor } = useTheme();

  return (
    <div className="course-details-wrapper">
      <div id="section3">
        <div className="related-coures-div course-title">
          <h5>
            <span>
              Course <span style={{ color }}>Outline</span>
            </span>
          </h5>
        </div>
        <div className="course-outline-wrap">
          <CustomAccordion modules={modules} />
        </div>
      </div>
    </div>
  );
};

export default CourseOutline;
