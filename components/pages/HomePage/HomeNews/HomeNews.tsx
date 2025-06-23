"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import Image from "next/image";
import TitleLarge from "@/components/common/TitleLarge/TitleLarge";
import Link from "next/link";
import { useTheme } from "@/lib/ThemeContext";
import { NewsEvents } from "@/common/interfaces/interface";
import { graphQLClient } from "@/lib/graphql-client";
import { HOME_LATEST_NEWS } from "@/common/queries/query";
import NewItem from "../../News/NewItem/NewItem";
import Slider from "react-slick";

const HomeNews = () => {
  const [news, setNews] = useState<NewsEvents[]>([]);
  const { color } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchNewsEvents = async () => {
    const data = await graphQLClient.request<{
      news: {
        nodes: NewsEvents[];
        pageInfo: { endCursor: string; hasNextPage: boolean };
      };
    }>(HOME_LATEST_NEWS);
    setNews(data.news.nodes);
  };

  useEffect(() => {
    fetchNewsEvents();
  }, []);

  const mainNews = news[activeIndex];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default for desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="home-news-section">
      <div className="home-news-section-wrap">
        <div className="title-wrap">
          <TitleLarge title="Latest" subtitle="&nbsp;News" />
          {/* <div className="all-news-wrap">
            <Link href="/news">
              <button>View All News</button>
            </Link>
          </div> */}
        </div>

        <Slider {...settings} className="news-container" data-aos="fade-up">
          {news.map((news, index) => (
            <NewItem news={news} key={index} />
          ))}
          {/* {mainNews && (
            <div className="news-main">
              <div className="image-wrap">
                <Image
                  src={mainNews.featuredImage?.node?.sourceUrl || "/images/news.png"}
                  alt={mainNews.featuredImage?.node?.altText || mainNews.title}
                  width={800}
                  height={400}
                  className="news-image"
                />
              </div>
              <div className="news-content">
                <p className="news-date">
                  📅  &nbsp;&nbsp;
                  {mainNews.date
                    ? new Date(mainNews.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : ""}
                </p>
                <h3 className="news-title">{mainNews.title}</h3>
                 <div className="paragraph paragraph--black">
                <div
                      dangerouslySetInnerHTML={{
                        __html:
                          mainNews.content.length > 200
                            ? mainNews.content.substring(0, 200) + "..."
                            : mainNews.content,
                      }}
                    />
                </div>
                {mainNews.slug && (
                  <Link href={`/news/${mainNews.slug}`} className="read-more-link">
                    Read More
                  </Link>
                )}
              </div>
            </div>
          )} */}

          {/* <div className="news-sidebar">
            {news.map((item, idx) => (
              <div
                className={`news-sidebar-item${idx === activeIndex ? " active" : ""}`}
                key={item.slug || idx}
                onClick={() => setActiveIndex(idx)}
              >
                <p className="news-date">
                  📅 &nbsp;&nbsp;{item.date
                    ? new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : ""}
                </p>
                <p className="news-subtitle">{item.title}</p>
                
              </div>
            ))}
          </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default HomeNews;
