"use client";

import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { graphQLClient } from "@/lib/graphql-client";
import { GET_ALL_NEWS } from "@/common/queries/query";
import { NewsEvents } from "@/common/interfaces/interface";
import Link from "next/link";

const page = () => {
  const [newsEvents, setNewsEvents] = useState<NewsEvents[]>([]);

  useEffect(() => {
    const fetchNewsEvents = async () => {
      const data = await graphQLClient.request<{
        news: {
          nodes: NewsEvents[];
        };
      }>(GET_ALL_NEWS);

      console.log("News Events data:", data.news.nodes);
      setNewsEvents(data.news.nodes);
    };

    fetchNewsEvents();
  }, []);

  return (
    <>
      <InnerBanner
        innerPageTitle={`News & Events`}
        innerPageDescription="Discover the latest at ESU on our dynamic News & Events page - featuring updates on graduation ceremonies, new branch openings, program launches, university partnerships and more exciting happenings! Stay informed, celebrate success and be part of our journey toward academic excellence and innovation."
        innerBgDesk="/images/inner-banner.gif"
        innerBgMobi="/images/inner-banner.gif"
      />
      <section className="simple-padding-top simple-padding-bottom news-events-section">
        <div className="school-box-wrap d-flex middle-wrap">
          {newsEvents.map((news, index) => (
            <div className="school-box-single news-box-landing" key={index}>
              <div className="school-box-inner">
                <Link href={`/news/${news.slug}`}>
                  <img
                    className="feature-img-school"
                    src={news?.featuredImage.node.sourceUrl}
                    alt={news?.featuredImage.node.altText}
                  />
                </Link>
                <div className="school-box-inner-details">
                  <p className="m-0 aragraph paragraph--black date-p">
                    {news?.date}
                  </p>
                  <Link
                    href={`/news/${news.slug}`}
                    className="school-box-details d-flex"
                  >
                    <span>
                      We are happy to announce the partnership between Cambridge
                      English and ESOFT, with the launch of the[...]
                    </span>
                  </Link>
                  <p className="paragraph paragraph--black">
                    ESOFT Metro Campus celebrated the launch of Cambridge
                    Authorised Exam Centre, marking a significant step towards
                    expanding international learning oppo[...]
                  </p>
                  <Link className="btnn-next" href={`/news/${news.slug}`}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-div justify-content-center">
          <a className="prev page-numbers" href="https://esoft.lk/news/">
            <i /> &lt;&lt;
          </a>
          <a className="page-numbers" href="https://esoft.lk/news/">
            1
          </a>
          <span aria-current="page" className="page-numbers current">
            2
          </span>
          <a className="page-numbers" href="https://esoft.lk/news/?paged=3">
            3
          </a>
          <a className="page-numbers" href="https://esoft.lk/news/?paged=4">
            4
          </a>
          <a className="page-numbers" href="https://esoft.lk/news/?paged=5">
            5
          </a>
          <a
            className="next page-numbers"
            href="https://esoft.lk/news/?paged=3"
          >
            &gt;&gt; <i />
          </a>
        </div>
      </section>
    </>
  );
};

export default page;
