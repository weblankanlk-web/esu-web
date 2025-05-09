import React from "react";
import "./style.scss";
import Image from "next/image";

interface DeanMessageProps {
  DeanName: string;
  designation: string;
  qualifications: string;
  message: string;
  featuredImage: {
    sourceUrl: string;
    altText: string;
  };
  fontFamily: string; // dynamically from CMS
  fontColor: string; // dynamically from CMS
}

const DeanMessage: React.FC<DeanMessageProps> = ({
  DeanName,
  designation,
  qualifications,
  message,
  featuredImage,
  fontFamily, // dynamically from CMS
  fontColor, // dynamically from CMS
}) => {
  return (
    <section className="dean-massage">
      <div className="dean-massage-wrap">
  
        <div className="massage-wrap">
          <h2 className="dean-message-title" style={{ fontFamily }}>Dean <span style={{ color: fontColor }}>Message</span></h2>
          <div className="single-massage-card d-flex">
            <div className="single-image-wrap">
              <div className="member-details">
                <h3 className="name">{DeanName}</h3>
                <h4 className="position">{designation}</h4>
                <h4 className="qualification">{qualifications}</h4>
              </div>
              <div className="member-image">
                <Image
                  src={featuredImage.sourceUrl}
                  alt={featuredImage.altText}
                  width={352}
                  height={352}
                />
              </div>
            </div>
            <div className="single-massage " dangerouslySetInnerHTML={{ __html: message }}></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DeanMessage;

