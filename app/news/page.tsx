"use client";

import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { graphQLClient } from "@/lib/graphql-client";
import { GET_ALL_NEWS } from "@/common/queries/query";
import { NewsEvents } from "@/common/interfaces/interface";
import { useTheme } from "@/lib/ThemeContext";
import NewItem from "@/components/pages/News/NewItem/NewItem";

const PAGE_SIZE = 9;

const NewsPage = () => {
  const [newsEvents, setNewsEvents] = useState<NewsEvents[]>([]);
  const [endCursor, setEndCursor] = useState<string | null>(null);
  const [cursors, setCursors] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [totalPosts, setTotalPosts] = useState(0);
  const { setColor, color } = useTheme();

  useEffect(() => {
    // setColor("rgb(0, 174, 205)");

    const loadInitialNews = async () => {
      const data = await graphQLClient.request<{
        news: {
          nodes: NewsEvents[];
          pageInfo: {
            endCursor: string;
            hasNextPage: boolean;
          };
        };
      }>(GET_ALL_NEWS, { first: PAGE_SIZE });

      setNewsEvents(data.news.nodes);
      setEndCursor(data.news.pageInfo.endCursor);
      setHasNextPage(data.news.pageInfo.hasNextPage);
      setCursors([data.news.pageInfo.endCursor ?? ""]);
      setCurrentPage(1);
    };

    const fetchTotalCount = async () => {
      const data = await graphQLClient.request<{
        news: {
          nodes: { id: string }[];
        };
      }>(`
        query GetNewsIds {
          news(first: 1000) {
            nodes {
              id
            }
          }
        }
      `);
      setTotalPosts(data.news.nodes.length);
    };

    fetchTotalCount();
    loadInitialNews();
  }, [setColor]);

  const handlePageChange = async (page: number) => {
    if (page === currentPage) return;

    if (page === 1) {
      const data = await graphQLClient.request<{
        news: {
          nodes: NewsEvents[];
          pageInfo: {
            endCursor: string;
            hasNextPage: boolean;
          };
        };
      }>(GET_ALL_NEWS, { first: PAGE_SIZE });

      setNewsEvents(data.news.nodes);
      setEndCursor(data.news.pageInfo.endCursor);
      setHasNextPage(data.news.pageInfo.hasNextPage);
      setCurrentPage(1);
      setCursors([data.news.pageInfo.endCursor ?? ""]);
      return;
    }

    // Ensure all cursors are available up to (page - 1)
    while (!cursors[page - 2]) {
      const prevPage = cursors.length + 1;
      const afterCursor = cursors[prevPage - 2];

      const data = await graphQLClient.request<{
        news: {
          nodes: NewsEvents[];
          pageInfo: {
            endCursor: string;
            hasNextPage: boolean;
          };
        };
      }>(GET_ALL_NEWS, { first: PAGE_SIZE, after: afterCursor });

      const newCursor = data.news.pageInfo.endCursor ?? "";
      setCursors((prev) => [...prev, newCursor]);
    }

    const afterCursor = cursors[page - 2];
    const data = await graphQLClient.request<{
      news: {
        nodes: NewsEvents[];
        pageInfo: {
          endCursor: string;
          hasNextPage: boolean;
        };
      };
    }>(GET_ALL_NEWS, { first: PAGE_SIZE, after: afterCursor });

    setNewsEvents(data.news.nodes);
    setEndCursor(data.news.pageInfo.endCursor);
    setHasNextPage(data.news.pageInfo.hasNextPage);
    setCurrentPage(page);

    if (!cursors[page - 1] && data.news.pageInfo.endCursor) {
      setCursors((prev) => {
        const updated = [...prev];
        updated[page - 1] = data.news.pageInfo.endCursor ?? "";
        return updated;
      });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.ceil(totalPosts / PAGE_SIZE);

  return (
    <>
      <InnerBanner
        innerPageTitlePrimary={"News &"}
        innerPageTitleSecondary={" Events"}
        innerPageDescription="Discover the latest at ESU on our dynamic News & Events page featuring updates on graduation ceremonies, new campus openings, programme launches, and new partnerships. This is where you will find all the highlights. Stay informed, celebrate success and follow our journey as we continue to advance academic excellence and innovation."
        innerBgDesk="/images/inner-banner.gif"
        innerBgMobi="/images/inner-banner.gif"
      />

      <section className="simple-padding-top simple-padding-bottom news-events-section">
        <div className="school-box-wrap d-flex middle-wrap">
          {newsEvents.map((news, index) => (
            <NewItem news={news} key={index} />
          ))}
        </div>

        <div className="pagination-div justify-content-center">
          {(() => {
            const pages: (number | string)[] = [];

            if (totalPages <= 5) {
              for (let i = 1; i <= totalPages; i++) pages.push(i);
            } else {
              pages.push(1);
              if (currentPage > 3) pages.push("...");

              for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                if (i > 1 && i < totalPages) pages.push(i);
              }

              if (currentPage < totalPages - 2) pages.push("...");

              pages.push(totalPages);
            }

            return pages.map((page, index) => {
              if (page === "...") {
                return (
                  <span
                    key={`ellipsis-${index}`}
                    className="page-numbers ellipsis"
                  >
                    ...
                  </span>
                );
              }

              return (
                <button
                  key={`page-${page}`}
                  className={`page-numbers ${
                    currentPage === page ? "current" : ""
                  }`}
                  onClick={() => handlePageChange(Number(page))}
                >
                  {page}
                </button>
              );
            });
          })()}
        </div>
      </section>
    </>
  );
};

export default NewsPage;
