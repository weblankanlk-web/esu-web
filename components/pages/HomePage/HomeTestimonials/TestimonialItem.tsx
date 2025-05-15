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
  const MAX_CHARACTERS = 220;

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
                alt={featuredImage?.node?.altText || title}
              />
            </div>
          )}
          <div className="detail-contain">
            <h6 className="person-name">{title}</h6>
          </div>
        </div>

        {/* Text Testimonial */}
        {isText && text && (
            <div className="testimonial-content message">
            {text.split(/\r?\n/).map((line, i) => (
              <p key={i}>{line.trim()}</p>
            ))}
            </div>
        )}

        {/* Video Testimonial */}
        {isVideo && imageUrl && (
          <div className="testimonial-content video">
            <Image
              src={imageUrl}
              alt={`Testimonial Video Thumbnail - ${title}`}
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
