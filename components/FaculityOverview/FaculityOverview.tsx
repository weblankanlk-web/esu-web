import React from "react";
import "./style.scss";
import Image from "next/image";

interface FaculityOverviewProps {

}
interface FaculityOverviewProps {
    OverviewTitle: string;
    OverviewImage: string;
    Overview: string;
}

const FaculityOverview: React.FC<FaculityOverviewProps> = ({
    OverviewTitle,
    OverviewImage,
    Overview,
    
  
}) => {
  return (
    <>
        <section className="course-overview position-relative">
            <div className="course-wrap d-flex flex-wrap">
                <div className="course-overview-title">
                    <h2 className="">{OverviewTitle}</h2>
                </div>
                <div className="course-overview-image">
                    <Image 
                        src={OverviewImage} 
                        alt={`${OverviewTitle} Image`} 
                        width={600} 
                        height={400} 
                    />
                </div>
                <div className="course-overview">{Overview}</div>
            </div>
        </section>  
                 
    </>
  );
};

export default FaculityOverview;
