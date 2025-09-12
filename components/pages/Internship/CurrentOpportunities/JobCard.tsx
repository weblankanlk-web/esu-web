"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatText } from "@/lib/jobHelpers";

interface JobCardProps {
  logo: string;
  logoAlt: string;
  company: string;
  timeAgo: string;
  title: string;
  slug: string;
  roles: string[];
  description: string;
  descriptionOfTheJobExcerpt: string | null;
  jobType: string[];
  location: string[];
}

const JobCard: React.FC<JobCardProps> = ({
  logo,
  logoAlt,
  company,
  timeAgo,
  title,
  slug,
  roles,
  description,
  descriptionOfTheJobExcerpt,
  jobType,
  location,
}) => {
  const handleShare = async () => {
    const shareData = {
      title: title,
      text: `${title} at ${company}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error("Share failed:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="jobCard">
      <div className="jobCard__logo">
        <Image
          src={logo}
          alt={logoAlt ? logoAlt : company}
          width={100}
          height={30}
        />
      </div>

      <div className="jobCard__header">
        <span className="company">{company}</span>
        <span className="time">{timeAgo}</span>
      </div>

      <h3 className="jobCard__title">{title}</h3>

      <div className="jobCard__tags">
        <span className="tag">{formatText(jobType[0])}</span>
        <span className="tag">{formatText(location[0])}</span>
      </div>

      <div className="jobCard__roles">
        {roles.map((role, index) => (
          <span key={index}>
            {role}
            {index < roles.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>

      <p className="jobCard__desc">{descriptionOfTheJobExcerpt}</p>

      <div className="jobCard__actions">
        <Link href={`/internship/${slug}`} className="btn primary">
          Apply Now
        </Link>
        <button className="btn secondary" onClick={handleShare}>
          Share
        </button>
      </div>
    </div>
  );
};

export default JobCard;
