import { useState } from "react";

const CustomAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion" id="accordionExample">
      {[1, 2].map((semester) => (
        <div className="accordion-item" key={semester}>
          <h2 className="accordion-header" id={`heading${semester}`}>
            <button
              className={`accordion-button ${activeIndex === semester ? "" : "collapsed"}`}
              type="button"
              onClick={() => toggleAccordion(semester)}
              aria-expanded={activeIndex === semester}
              aria-controls={`collapse${semester}`}
            >
              Semester {semester}
            </button>
          </h2>
          <div
            id={`collapse${semester}`}
            className={`accordion-collapse collapse ${activeIndex === semester ? "show" : ""}`}
            aria-labelledby={`heading${semester}`}
          >
            <div className="accordion-body">
              <div className="the-content-div">
                <table className="module-table">
                  <tbody>
                    <tr>
                      <th>Module</th>
                      <th className="center-td">Mandatory/Optional</th>
                    </tr>
                    {semester === 1 ? (
                      <>
                        <tr><td>Project</td><td className="center-td">Mandatory</td></tr>
                        <tr><td>Big Data and Visualisation</td><td className="center-td">Mandatory</td></tr>
                        <tr><td>Career Development Learning</td><td className="center-td">Mandatory</td></tr>
                        <tr><td>Data and Web Development</td><td className="center-td">Mandatory</td></tr>
                      </>
                    ) : (
                      <>
                        <tr><td>Artificial Intelligence and Machine Learning</td><td className="center-td">Mandatory</td></tr>
                        <tr><td>Project Analysis and Practice</td><td className="center-td">Mandatory</td></tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
