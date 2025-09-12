"use client";

import React from "react";
import Image from "next/image";
import "./style.scss";
import { formatText } from "@/lib/jobHelpers";

interface InternshipDetailProps {
  logo: string;
  logoAlt: string;
  company: string;
  title: string;
  postedAgo: string;
  jobType: string[];
  location: string[];
  about: string;
}

const InternshipDetail: React.FC<InternshipDetailProps> = ({
  logo,
  logoAlt,
  company,
  title,
  postedAgo,
  jobType,
  location,
  about,
}) => {
  return (
    <section className="internshipDetail">
      <div className="internshipHeader">
        <div className="internshipLogo">
          <Image src={logo} alt={logoAlt || company} width={60} height={60} />
        </div>
        <div className="internshipHeaderInfo">
          <h1 className="jobTitle">{title}</h1>
          <p className="company">
            {company} • <span>{postedAgo}</span>
          </p>
          <div className="tags">
            {jobType.map((type, i) => (
              <span key={i} className="tag">
                {formatText(type)}
              </span>
            ))}
            {location.map((loc, i) => (
              <span key={i} className="tag">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="jODSection">
        <div dangerouslySetInnerHTML={{ __html: about }} />
      </div>
    </section>
  );
};

export default InternshipDetail;
