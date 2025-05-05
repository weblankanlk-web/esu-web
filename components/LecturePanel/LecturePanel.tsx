import React from "react";

interface LecturePanelProps {
  lecturePanelDescription?: string;
}

const LecturePanel: React.FC<LecturePanelProps> = ({ lecturePanelDescription }) => {
  return (
    <>
      <div id="section7" className="related-coures-div course-title">
        <h5>Our Lecture Panel</h5>
      </div>
      <div>
        <div className="the-content-div">
          <p
            dangerouslySetInnerHTML={{
              __html: lecturePanelDescription || "",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LecturePanel;
