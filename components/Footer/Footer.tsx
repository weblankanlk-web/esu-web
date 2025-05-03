"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa";
import "./style.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer ">
      <div className="footer-border"></div>
      <div className="footer-social">
        <div className="social-banner small-middle-wrap">
          <div className="hashtag">#ESULife</div>
          <div className="social-icons">
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              <FaLinkedinIn />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
            <div className="icon">
              <FaGooglePlusG />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-content-wrap">
        <div className="footer-content small-middle-wrap">
          <div className="column contact">
            <h4>CONTACT DETAILS</h4>
            <p>
              Hotline Number <br />
              <strong>+94 117 572 572</strong>
            </p>
            <p>
              Email <br />
              <a href="mailto:info@esoft.lk">
                <strong>info@esoft.lk</strong>
              </a>
            </p>
            <p>
              Head Office (Block E) <br />
              <strong>
                ESOFT Metro Campus No.03,
                <br />
                De Fonseka Place,
                <br />
                Colombo 4, Sri Lanka.
              </strong>
            </p>
            <div className="awards">
              <h4>AWARDS</h4>
              <Image
                src={"/images/logo/awards.png"}
                alt="Award Seal"
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="column links">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Home</li>
              <li>Student Life</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>News & Events</li>
              <li>Blogs</li>
              <li>CSR</li>
            </ul>
          </div>

          <div className="column links">
            <h4>IMPORTANT LINKS</h4>
            <ul>
              <li>Courses</li>
              <li>Faculties</li>
              <li>Transfer Programmes</li>
              <li>Privacy Policy</li>
              <li>Payment Policy</li>
              <li>Refund Policy</li>
              <li>Quality Policy</li>
              <li>Referrals</li>
            </ul>
          </div>

          <div className="background-logo">
            <Image
              src={"/images/logo/esu.png"}
              width={700}
              height={400}
              alt=""
              style={{ objectFit: "cover", objectPosition: "bottom" }}
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2025 <strong>ESU METRO CAMPUS</strong> All rights
          reserved. Website Designed And Developed By{" "}
          <strong>Web Lankan</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
