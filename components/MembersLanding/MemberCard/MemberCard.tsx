import React from "react";
import "./style.scss";
import Image from "next/image";

interface MemberCardItemProps {
  MemberName: string;
  MemberDesignation: string;
  MemberQualifications: string;
  MemberFeaturedImage?: {
    sourceUrl?: string;
    altText?: string;
  };
}

const MemberCardItem: React.FC<MemberCardItemProps> = ({
  MemberName,
  MemberDesignation,
  MemberQualifications,
  MemberFeaturedImage,
}) => {
  return (
    <div className="single-massage-card d-flex">
      <div className="single-image-wrap">
        <div className="member-details">
          <h3 className="name">{MemberName}</h3>
          <h4 className="position">{MemberDesignation}</h4>
          <h4 className="qualification">{MemberQualifications}</h4>
        </div>
        <div className="member-image">
          <Image
            src={MemberFeaturedImage?.sourceUrl || "/images/default-profile.jpg"}
            alt={MemberFeaturedImage?.altText || MemberName}
            width={352}
            height={352}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberCardItem;
