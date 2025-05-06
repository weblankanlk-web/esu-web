"use client";

import React from "react";
import TitleSmall from "../TitleSmall/TitleSmall";
import TestimonialItem from "./TestimonialItem";
import "./style.scss";

const testimonials = [
    {
      text: "I embarked on the Master of Science in Network & Information Security program with high expectations, and I can confidently say that it exceeded them in every way possible. This course has been nothing short of exceptional",
      name: "niromi perera",
      position: "BSC (Hons) Computer Science",
      imageUrl: "/images/person1.png",
    },
    {
      text: "One highlight of this program is the emphasis on ethics and the importance of responsible cybersecurity practices. The university's commitment to producing ethical professionals is commendable and aligns perfectly the principles I hold dear",
      name: "gayan chamara",
      position: "BSC (Hons) Computer Science",
      imageUrl: "/images/person1.png",
    },
    {
        name: "ashani ranatunga",
        imageUrl: "/images/person1.png",
        position: "BSC (Hons) Computer Science",
        videoUrl: "https://www.youtube.com/embed/K4TOrB7at0Y?si=5VVVAKkY4HoAnEwB",
    },
    { 
        text: " I embarked on the Master of Science in Network & Information Security program with high expectations, and I can confidently say that it exceeded them in every way possible. This course has been nothing short of exceptional ",
        name: "Shehan Dilshan",
        position: "BSC (Hons) Computer Science",
        imageUrl: "/images/person1.png",
    },
    {
        name: "ashani ranatunga",
        imageUrl: "/images/person1.png",
        position: "BSC (Hons) Computer Science",
        videoUrl: "https://www.youtube.com/embed/K4TOrB7at0Y?si=5VVVAKkY4HoAnEwB",
    },
  ];
  

const HomeTestimonials = () => {
    return (
      <>
      <section className="home-testimonials">
        <div className="title-wrap">
            <TitleSmall title='Home' subtitle='Testimonials'/>
        </div>
        <div className="slider-wrap">
            <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
                <TestimonialItem key={index} testimonialData={testimonial} />
            ))}
            </div>
        </div>
      </section>
      </>
    );
  };
  
export default HomeTestimonials;
  