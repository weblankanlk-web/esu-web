"use client";

import React, { JSX } from "react";
import Image from "next/image";
import "./style.scss";
import TitleLarge from "@/components/common/TitleLarge/TitleLarge";
import {
  FaLaptopCode,
  FaBalanceScale,
  FaPaintBrush,
  FaBriefcase,
  FaHeart,
  FaUsers,
  FaChalkboardTeacher,
  FaCogs,
  FaLaptop,
  FaFlask,
} from "react-icons/fa";

type Facility = {
  icon: JSX.Element;
  label: string;
};

const facilities: Facility[] = [
  { icon: <FaLaptopCode />, label: "Faculty of Computing" },
  { icon: <FaBalanceScale />, label: "Faculty of Business & Law" },
  { icon: <FaPaintBrush />, label: "Arts and creative industries" },
  { icon: <FaBriefcase />, label: "Business, innovation, management and law" },
  { icon: <FaUsers />, label: "Culture, society and Indigenous" },
  { icon: <FaChalkboardTeacher />, label: "Education" },
  { icon: <FaCogs />, label: "Engineering, mining and surveying" },
  { icon: <FaHeart />, label: "Health" },
  { icon: <FaLaptop />, label: "Information technology" },
  { icon: <FaFlask />, label: "Physical sciences, geoscience & mathematics" },
];

const CampusFacilities = () => {
  return (
    <section className="campus-facilities">
      <TitleLarge title="Our" subtitle=" Campus Facilities" />
      <br />
      <br />
      <div className="facility-grid">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className={`facility-box ${index === 1 ? "active" : ""}`} // Highlight the second item
          >
            <div className="facility-icon">{facility.icon}</div>
            <span className="facility-label">{facility.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CampusFacilities;
