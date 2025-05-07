import React from "react";
import Slider from "react-slick";
import TitleSmall from "../TitleSmall/TitleSmall";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      imageUrl: "/images/person2.png",
    },
    {
        name: "ashani ranatunga",
        imageUrl: "/images/person3.png",
        position: "BSC (Hons) Computer Science",
        videoUrl: "https://www.youtube.com/embed/K4TOrB7at0Y?si=5VVVAKkY4HoAnEwB",
    },
    { 
        text: " I embarked on the Master of Science in Network & Information Security program with high expectations, and I can confidently say that it exceeded them in every way possible. This course has been nothing short of exceptional ",
        name: "Shehan Dilshan",
        position: "BSC (Hons) Computer Science",
        imageUrl: "/images/person4.png",
    },
    {
        name: "ashani ranatunga",
        imageUrl: "/images/person3.png",
        position: "BSC (Hons) Computer Science",
        videoUrl: "https://www.youtube.com/embed/K4TOrB7at0Y?si=5VVVAKkY4HoAnEwB",
    },
  ];
  

const HomeTestimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:true,
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
      <>
      <section className="home-testimonials">
        <div className="title-wrap">
            <TitleSmall title='Student' subtitle='Testimonials'/>
        </div>
        <div className="slider-wrap">
             <Slider {...settings} className="testimonial-slider">
             {testimonials.map((testimonial, index) => (
            <div key={index} className="item">
              <TestimonialItem testimonialData={testimonial} />
            </div>
            ))}
            </Slider>
        </div>
      </section>
      </>
    );
  };
  
export default HomeTestimonials;
  