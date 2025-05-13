"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import TitleLarge from "../../../common/TitleLarge/TitleLarge";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialItem from "./TestimonialItem";
import "./style.scss";
import { graphQLClient } from "@/lib/graphql-client";
import { TESTIMONIALS_QUERY } from "@/common/queries/query";
import { Testimonial } from "@/common/types/type";

const HomeTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await graphQLClient.request<{
          testimonials: { nodes: Testimonial[] };
        }>(TESTIMONIALS_QUERY);

        const filtered = data.testimonials.nodes.filter(
          (item) => item.testimonials !== null
        );

        setTestimonials(filtered);
      } catch (error) {
        console.error("❌ Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="home-testimonials">
      <div className="title-wrap">
        <TitleLarge title="Student" subtitle="Testimonials" />
      </div>
      <div className="slider-wrap">
        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="item">
              <TestimonialItem testimonialData={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HomeTestimonials;
