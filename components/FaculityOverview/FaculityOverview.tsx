import React from "react";
import "./style.scss";
import Image from "next/image";

interface FaculityOverviewProps {

}
interface FaculityOverviewProps {
    schoolOverviewTitle: string;
    OverviewImage: string;
    Overview: string;
}

const FaculityOverview: React.FC<FaculityOverviewProps> = ({
    schoolOverviewTitle,
    OverviewImage,
    Overview,
    
  
}) => {
  return (
    <>
        <section className="course-overview-section position-relative">
            <div className="course-overview-wrap d-flex flex-wrap">
                <div className="course-overview-title">
                    <h2 className="" dangerouslySetInnerHTML={{ __html: schoolOverviewTitle }}></h2>
                </div>
                <div className="course-overview-image">
                    <Image 
                        src={OverviewImage} 
                        alt={`${schoolOverviewTitle} Image`} 
                        width={1219} 
                        height={8860} 
                    />
                </div>
                <div className="course-overview" dangerouslySetInnerHTML={{ __html: Overview }}></div>
            </div>
        </section>  
                 
    </>
  );
};

export default FaculityOverview;
