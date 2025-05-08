import React, { useState } from "react";
import Image from "next/image";

type Props = {
  testimonialData: {
    id: string;
    title: string;
    slug: string;
    featuredImage: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    };
    testimonials: {
      testimonialType: string[];
      testimonialVideo?: string;
      thumbnailImage?: {
        node: {
          sourceUrl: string;
        };
      };
      testimonialText?: string;
    };
  };
};

const TestimonialItem: React.FC<Props> = ({ testimonialData }) => {
  const { title, slug, testimonials, featuredImage } = testimonialData;

  const isText = testimonials.testimonialType?.includes("Text");
  const isVideo = testimonials.testimonialType?.includes("Video");
  const imageUrl = testimonials.thumbnailImage?.node?.sourceUrl;
  const featuredImageUrl = featuredImage?.node?.sourceUrl;

  const [expanded, setExpanded] = useState(false);
  const text = testimonials.testimonialText?.trim() || "";

  const MAX_CHARACTERS = 250;

  const shouldTruncate = text.length > MAX_CHARACTERS;
  const visibleText = expanded ? text : text.slice(0, MAX_CHARACTERS);

  return (
    <div id="testimonial-item">
      <div className="t-item-inner">
        {/* Image + Name/Slug */}
        <div className="detail-wrapper">
          {featuredImageUrl && (
            <div className="image-contain">
              <Image
                src={featuredImageUrl}
                width={60}
                height={60}
                alt={title}
                className="rounded-circle"
              />
            </div>
          )}
          <div className="detail-contain">
            <h6 className="person-name">{title}</h6>
            <p className="person-position">{slug}</p>
          </div>
        </div>

        {/* Text Testimonial */}
        {isText && testimonials.testimonialText?.trim() && (
          <div className="testimonial-content message">
            {visibleText.split(/\r?\n/).map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}

            {shouldTruncate && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="read-more-btn"
              >
                {expanded ? "Show Less" : "Read More"}
              </button>
            )}
          </div>
        )}

        {/* Video Testimonial */}
        {isVideo && imageUrl && (
          <div className="testimonial-content video">
            {/* <iframe
              width="100%"
              height="315"
              src={testimonials.testimonialVideo}
              title={`Testimonial Video - ${title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
            <Image
              src={imageUrl}
              alt=""
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialItem;
