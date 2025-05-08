"use client";

import React from "react";
import "./style.scss";
import Image from "next/image";
import { useTheme } from "@/lib/ThemeContext";

const page = () => {
  const { color } = useTheme();

  return (
    <>
      <div className="profile">
        <div className="profile__card">
          <Image
            src="/images/dayan.png"
            alt="Dr. Dayan Rajapakse"
            className="profile__image"
            width={100}
            height={100}
            style={{ background: color }}
          />
          <div className="profile__contact">
            <p className="contact-number">Contact Us Number</p>
            <a href="tel:+94714120934">+94 71 412 0934</a>
            <br />
            <p className="email-address">Email Address</p>
            <a href="mailto:Dayan@esoft.lk">Dayan@esoft.lk</a>
          </div>
        </div>

        <div className="profile__content">
          <div className="profile__header">
            <h2>Dr. Dayan Rajapakse</h2>
            <p className="designation">Chairman / Group Managing Director</p>
            <p className="qualifications">MBBS, MBA, MBBS, MD</p>
            <a href="#" className="faculty">
              FACULTY OF COMPUTING | INFORMATION TECHNOLOGY
            </a>
          </div>

          <section className="profile__section">
            <h3>
              ACADEMIC <span style={{ color: color }}>QUALIFICATIONS</span>
            </h3>
            <p>Dr. Dayan Rajapakse is a luminary... (shorten for brevity)</p>
          </section>

          <section className="profile__section">
            <h3>
              CAREER <span style={{ color: color }}>SUMMARY</span>
            </h3>
            <ul>
              <li>2002 - 2005 Assistant Lecturer</li>
              <li>2005 - 2009 Lecturer</li>
              <li>2009 - Present Senior Lecturer</li>
            </ul>
          </section>

          <section className="profile__section">
            <h3>
              MY <span style={{ color: color }}>PUBLICATIONS</span>
            </h3>
            <ul>
              <li>Rajapakse, B.K. and Kodagoda...</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
