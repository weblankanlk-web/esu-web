import Image from "next/image";
import React from "react";

interface Testimonial {
  text?: string;
  name: string;
  position: string;
  imageUrl: string;
  videoUrl?: string;
}

const TestimonialItem: React.FC<{ testimonialData: Testimonial }> = ({
  testimonialData,
}) => {
  return (
    <>
      <div id="testimonial-item">
        <div className="t-item-inner">
          <div className="detail-wrapper">
            <div className="image-contain">
              <Image
                src={testimonialData.imageUrl}
                width={60}
                height={60}
                alt=""
              />
            </div>
            <div className="detail-contain">
              <h6 className="person-name">{testimonialData.name}</h6>
              <p className="person-position">{testimonialData.position}</p>
            </div>
          </div>
          <div className="video-wrapper">
            {testimonialData.videoUrl ? (
              <div className="video-contain">
                <a href={testimonialData.videoUrl} target="_blank">
                  <iframe
                      width="100%"
                      height="315"
                      src={testimonialData.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  />
                  <Image
                    src="/images/play-button.png"
                    width={50}
                    height={50}
                    alt=""
                  />
                </a>
              </div>
            ) : (
              <div className="message">
                <p>{testimonialData.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialItem;
