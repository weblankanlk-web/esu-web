"use client";

import React from "react";
import Image from "next/image";
import "./style.scss";
import Counter from "./Counter";

const counters = [
    {
      number: 23,
      name: "Years of <br>Excellence",
    },
    {
        number: 40,
        name: "Branches <br>Islandwide",
    },
    {
        number: 400,
        name: "Full-time <br>Academics",
    },
    {
        number: 35000,
        name: "Students <br>Learning",
    },
  ];
  

const HomeCounter = () => {
    return (
      <>
      <section className="home-counters">
        <div className="image-wrap">
             <Image
                src="/images/blue-esoft.png"
                width={1920}
                height={300}
                alt=""
            />
        </div>
        <div className="slider-wrap">
            <div className="counter-slide">
                {counters.map((counter, index) => (
                    <Counter key={index} counterData={counter}/>
                ))}
            </div>
        </div>
      </section>
      </>
    );
  };
  
export default HomeCounter;
  