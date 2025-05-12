"use client";

import React from "react";
import "./style.scss";
import Image from "next/image";

interface DeanMessageProps {
  title: string;
  DeanName: string;
  designation: string;
  qualifications: string;
  message: string;
  featuredImage: {
    sourceUrl: string;
    altText: string;
  };
  fontFamily: string;
  fontColor: string;
}

const DeanMessage: React.FC<DeanMessageProps> = ({
  title,
  DeanName,
  designation,
  qualifications,
  message,
  featuredImage,
  fontFamily,
  fontColor,
}) => {
  return (
    <section className="dean-massage">
      <div className="dean-massage-wrap">
        <div className="massage-wrap">
          <h2 className="dean-message-title" style={{ fontFamily }}>
            {title} <span style={{ color: fontColor }}>Message</span>
          </h2>
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
                  width={240}
                  height={240}
                />
              </div>
            </div>
            <div
              className="single-massage"
              dangerouslySetInnerHTML={{ __html: message }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeanMessage;
