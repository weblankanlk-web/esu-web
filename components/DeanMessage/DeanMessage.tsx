import React from "react";
import "./style.scss";
import Image from "next/image";

interface DeanMessageProps {

}
interface DeanMessageProps {
  DeanName: string;

}

const DeanMessage: React.FC<DeanMessageProps> = ({
  DeanName,

}) => {
  return (
    <>
      <section className="dean-massage">
        <div className="dean-massage-wrap">
            <h3 className="dean-title" dangerouslySetInnerHTML={{ __html: DeanName }}></h3>
            <div className="massage-wrap">
              <div className="single-massage-card d-flex">
                <div className="single-image-wrap">
                  <div className="member-details">  

                  </div>
                </div>
                <div className="single-massage">
                  
                </div>
              </div>
            </div>
        </div>
      </section>
    

    </>

  );
};

export default DeanMessage;
