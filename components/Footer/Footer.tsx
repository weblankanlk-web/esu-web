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
import { useTheme } from "@/lib/ThemeContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { color } = useTheme();

  return (
    <footer className="footer ">
      {/* <div className="footer-border"></div> */}
      <div className="footer-social" style={{ backgroundColor: color }}>
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
              <strong>
                <Link href="tel:+94117572572">+94 117 572 572</Link>
              </strong>
            </p>
            <p>
              Email <br />
              <Link href="mailto:info@esoft.lk">
                <strong>info@esoft.lk</strong>
              </Link>
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
              <h4>OUR AWARDS</h4>
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
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="https://esoft.lk/students-life/">Student Life</Link>
              </li>
              <li>
                <Link href="https://esoft.lk/about-us/">About Us</Link>
              </li>
              <li>
                <Link href="https://esoft.lk/contact-us/">Contact Us</Link>
              </li>
              <li>
                <Link href="https://esoft.lk/careers/">Careers</Link>
              </li>
              <li>
                <Link href="https://esoft.lk/news/">News & Events</Link>
              </li>
              <li>
                <Link href="https://esoft.lk/blogs/">Blogs</Link>
              </li>
              <li>
                <Link href="https://esoft.lk/csr/">CSR</Link>
              </li>
            </ul>
          </div>
          <div className="column links">
            <h4>IMPORTANT LINKS</h4>
            <ul>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/facilities">Faculties</Link>
              </li>
              <li>
                <Link href="https://esoft.lk/transfer-programmes/">
                  Transfer Programmes
                </Link>
              </li>
              <li>
                <Link href="https://esoft.lk/privacy-policy/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="https://esoft.lk/payment-policy/">
                  Payment Policy
                </Link>
              </li>
              <li>
                <Link href="https://esoft.lk/refund-policy/">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="https://esoft.lk/cookie-policy/">
                  Quality Policy
                </Link>
              </li>
              <li>
                <Link href="https://referrals.esoft.lk/referrer/login">
                  Referrals
                </Link>
              </li>
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

      <div className="footer-bottom" style={{ backgroundColor: color }}>
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
