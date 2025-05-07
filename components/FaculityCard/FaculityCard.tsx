import React from "react";
import "./style.scss";
import Image from "next/image";

interface faculityCardProps {
}

interface faculityCardProps {
  faculityImgDesk: string;
  faculityImgMobi: string;
  faculityName: string;
  faculityIntro: string;
  facilityLink: string;
  fontFamily: string; // dynamically from CMS
  fontColor: string; // dynamically from CMS
}

const FaculityCard: React.FC<faculityCardProps> = ({
  faculityImgDesk,
  faculityImgMobi,
  faculityName,
  faculityIntro,
  facilityLink,
  fontFamily, // dynamically from CMS
  fontColor   // dynamically from CMS
}) => {
  return (
    <>
      <section className="single-faculity-card position-relative">
        <div className="single-faculity-card-wrap">
          <a href={`faculties/${facilityLink}`} className="single-faculity-link">
            <div className="single-faculity-card-image">
              <picture>
                <source srcSet={faculityImgDesk} media="(min-width: 992px)" />
                <source srcSet={faculityImgMobi} media="(max-width: 991px)" />
                <img
                  src={faculityImgDesk || faculityImgMobi}
                  className="d-block w-100"
                  alt="faculity Image"
                />
              </picture>
            </div>
            <div
              className="single-faculity-card-content"
             
            >
              <div className="faculity-title" >
                <h2>
                  Faculty of&nbsp;<br></br>
                  <span
                  style={{
                    fontFamily: fontFamily || "inherit",
                    color: fontColor || "inherit"
                  }}>{faculityName}</span>
                </h2>
              </div>
              <div className="faculity-intro" dangerouslySetInnerHTML={{ __html: faculityIntro }}>
              </div>
            </div>
          </a>
        </div>
      </section>
  

    </>
  );
};

export default FaculityCard;
