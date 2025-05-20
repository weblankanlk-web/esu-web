import React from "react";
import "./style.scss";
import Image from "next/image";

const stats = [
  { icon: "/images/excellence.png", number: "6", label: "Faculties" },
  { icon: "/images/branchi.png", number: "3", label: "Main Campuses" },
  { icon: "/images/academic.png", number: "400+", label: "Full-time Academics" },
  { icon: "/images/students.png", number: "15,000+", label: "Students" },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div key={index} className="stat-box">
            <div className="stat-icon">
              <Image
                src={item.icon}
                alt={item.label}
                width={50}
                height={50}
                className="icon"
              />
            </div>
            <div className="stats-content">
              <div className="stat-number">{item.number}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
