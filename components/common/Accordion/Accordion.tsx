"use client";

import { useTheme } from "@/lib/ThemeContext";
import { useState } from "react";
import './style.scss'

interface Module {
  id: number;
  name: string;
  is_mandatory: number;
  code: string;
}

const CustomAccordion = ({ modules }: { modules: Module[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // open first by default

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const { color } = useTheme();

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="heading1">
          <button
            className={`accordion-button ${
              activeIndex === 0 ? "" : "collapsed"
            }`}
            type="button"
            onClick={() => toggleAccordion(0)}
            aria-expanded={activeIndex === 0}
            aria-controls="collapse1"
            style={{ backgroundColor: color }}
          >
            Modules
          </button>
        </h2>
        <div
          id="collapse1"
          className={`accordion-collapse collapse ${
            activeIndex === 0 ? "show" : ""
          }`}
          aria-labelledby="heading1"
        >
          <div className="accordion-body">
            <table className="module-table">
              <thead>
                <tr>
                  <th>Module Code</th>
                  <th>Module Name</th>
                  <th className="center-td">Mandatory/Optional</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((module) => (
                  <tr key={module.id}>
                    <td>{module.code}</td>
                    <td>{module.name}</td>
                    <td className="center-td">
                      {module.is_mandatory ? "Mandatory" : "Optional"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAccordion;
