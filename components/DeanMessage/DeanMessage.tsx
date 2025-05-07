import React from "react";
import "./style.scss";
import Image from "next/image";

interface DeanMessageProps {

}
interface DeanMessageProps {
  faculityImgDesk: string;

}

const DeanMessage: React.FC<DeanMessageProps> = ({
  faculityImgDesk,

}) => {
  return (
    <>
      <section className="dean-massage">
        <div className="dean-massage-wrap">
            <h3 className="dean-title">
                                
            </h3>
            <div className="massage-wrap">

            </div>
        </div>
      </section>
    

    </>

  );
};

export default DeanMessage;
