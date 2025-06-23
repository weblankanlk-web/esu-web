"use client";

import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import "./style.scss";
import TitleLarge from "@/components/common/TitleLarge/TitleLarge";
import { EVENTS } from "@/common/queries/query";
import { graphQLClient } from "@/lib/graphql-client";

// Define a local type for a single event item
type EventItem = {
  date: Date;
  title: string;
  color: string;
  slug: string;
  link: string;
};

const HomeUpcomingEvents = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const fetchNewsEvents = async () => {
    const data = await graphQLClient.request<{
      events: {
        nodes: any[];
        pageInfo: { endCursor: string; hasNextPage: boolean };
      };
    }>(EVENTS);

    // Map API data to EventItem[]
    const mappedEvents: EventItem[] = data.events.nodes
      .filter((node) => node.events?.isUpcommingEvent)
      .map((node) => ({
        date: new Date(node.events?.date || node.date),
        title: node.title,
        color: node.events?.color || "#000",
        slug: node.slug,
        link: node.link,
      }));

    setEvents(mappedEvents);
  };

  useEffect(() => {
    fetchNewsEvents();
  }, []);

  const [selectedDate, setSelectedDate] = useState(() => {
    // If there are events, set selectedDate to the month of the first event
    if (events.length > 0) {
      const firstEvent = events[0].date;
      // Set to first day of the event's month
      return new Date(firstEvent.getFullYear(), firstEvent.getMonth(), 1);
    }
    return new Date();
  });

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const event = events.find(
        (ev) =>
          ev.date.getFullYear() === date.getFullYear() &&
          ev.date.getMonth() === date.getMonth() &&
          ev.date.getDate() === date.getDate()
      );
      if (event) {
        return (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: event.color,
              borderRadius: "10px", // match your .react-calendar__tile
              zIndex: -1,
            }}
          />
        );
      }
    }
    return null;
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const event = events.find(
        (ev) =>
          ev.date.getFullYear() === date.getFullYear() &&
          ev.date.getMonth() === date.getMonth() &&
          ev.date.getDate() === date.getDate()
      );
      if (event) {
        return `has-event has-event-${event.color.replace("#", "")}`;
      }
    }
    return null;
  };

  return (
    <section className="upcoming-events-section">
      <div className="upcoming-events-wrap">
        <div className="title-wrap mobile">
          <TitleLarge title="Upcoming" subtitle="&nbsp;Events" />
        </div>
        <div className="calendar-block">
          <div className="title-wrap web">
            <TitleLarge title="Upcoming" subtitle="&nbsp;Events" />
          </div>
          <div className="calendar-event-row">
            <div className="calendar calendar-styled">
              <Calendar
                value={selectedDate}
                tileContent={tileContent} // renders a colored dot for event days
                tileClassName={tileClassName} // adds a class for event days
              />
            </div>
            <div className="event-list">
              {events.length === 0 && (
                <div className="no-events">
                  <p>
                    “Nothing's happening just yet — but exciting things are on
                    the way!”
                  </p>
                </div>
              )}
              {events.map((event, idx) => {
                const dayNum = event.date.getDate();
                const weekday = event.date
                  .toLocaleDateString("en-US", { weekday: "short" })
                  .toUpperCase();
                const month = event.date
                  .toLocaleDateString("en-US", { month: "short" })
                  .toUpperCase();
                const year = event.date.getFullYear();
                return (
                  <React.Fragment key={idx}>
                    <div className="event-item">
                      <div
                        className="dot"
                        style={{ backgroundColor: event.color }}
                      ></div>
                      <div className="event-date-label">
                        <span className="event-day">{dayNum}</span>
                        {/* <span className="event-weekday" style={{ marginLeft: 4 }}>{weekday}</span> */}
                        <span className="event-month" style={{ marginLeft: 8 }}>
                          {month}
                        </span>
                        {/* <span className="event-year" style={{ marginLeft: 4 }}>{year}</span> */}
                      </div>
                      <div className="details">
                        <strong>{event.title}</strong>
                      </div>
                    </div>
                    {idx !== events.length - 1 && (
                      <div className="event-divider" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className="image-block">
          <Image
            src="/images/student-1.png" // replace with actual image path
            alt="Event Student"
            width={500}
            height={600}
            className="event-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeUpcomingEvents;
