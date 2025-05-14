"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";
import TitleLarge from "@/components/common/TitleLarge/TitleLarge";
import Button from "@/components/common/Button/Button";

const HomeNews = () => {
  const [news, setNews] = useState([]);

  // Optional: Fetch logic (currently unused, placeholder)
  useEffect(() => {
    // You can fetch and set dynamic news here
    // setNews(fetchedData);
  }, []);

  return (
    <>
     <section className="home-news-section">
      <div className="home-news-section-wrap">
        <div className="title-wrap text-center">
          <TitleLarge title="Latest" subtitle="&nbsp; News" />
          <div className="all-news-wrap">
            <Button buttonName="View All News" buttonUrl="/#" />
          </div>
        </div>
        <div className="news-container">
          <div className="news-main pos-relative">
            <a href="">
              <Image
              src="/images/news.png"
              alt="Main News"
              width={800}
              height={400}
              className="news-image"
            />
            <div className="news-content pos-absolute">
              <p className="news-date">📅 May 6, 2025</p>
              <h3 className="news-title">
                ESOFT Celebrates Young ICT Talent at National Level Information
                and Communication Technology Champions Awards
              </h3>             
            </div>
            </a>
            
          </div>

          <div className="news-sidebar">
            <div className="news-sidebar-item">
              <a href="">
                <p className="news-date">📅 16 August 2023</p>
                <p className="news-subtitle">
                  London Metropolitan Inaugural Ceremony 2023
                </p>
              </a>
              
            </div>
            <div className="news-sidebar-item active">
              <a href="">
                <p className="news-date">📅 16 August 2023</p>
                <p className="news-subtitle">
                  Inaugural Ceremony Kingston University BSc. Top-Up Programme
                </p>
              </a>
            
            </div>
            <div className="news-sidebar-item">
              <a href="">
                  <p className="news-date">📅 16 August 2023</p>
              <p className="news-subtitle">
                ESOFT Metro Campus And Melsta Hospitals Inked MOU
              </p>
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </section>

     {/* <section className="home-news-section">
      <div className="small-middle-wrap">
        <div className="title-wrap text-center">
          <TitleLarge title="Latest" subtitle="News & Events" />
        </div>

        <div className="news-container">
          <div className="news-main">
            <Image
              src="/images/news.png"
              alt="Main News"
              width={200}
              height={150}
              className="news-image"
            />
            <div className="news-content">
              <p className="news-date">📅 May 6, 2025</p>
              <h3 className="news-title">
                ESOFT Celebrates Young ICT Talent at National Level Information
                and Communication Technology Champions Awards
              </h3>
              <p className="news-description">
                The National Level ICT Champions Awards 2024 took place on 28th
                April 2025 at the Ministry of Education Auditorium[...]
              </p>
              <button className="read-more">Read More</button>
            </div>
          </div>

          <div className="news-sidebar">
            <div className="news-sidebar-item">
              <p className="news-date">📅 16 August 2023</p>
              <p className="news-subtitle">
                London Metropolitan Inaugural Ceremony 2023
              </p>
            </div>
            <div className="news-sidebar-item active">
              <p className="news-date">📅 16 August 2023</p>
              <p className="news-subtitle">
                Inaugural Ceremony Kingston University BSc. Top-Up Programme
              </p>
            </div>
            <div className="news-sidebar-item">
              <p className="news-date">📅 16 August 2023</p>
              <p className="news-subtitle">
                ESOFT Metro Campus And Melsta Hospitals Inked MOU
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </>
   
  );
};

export default HomeNews;
