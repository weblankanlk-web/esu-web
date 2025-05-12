"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";
import { useState } from "react";
import Button from "@/components/common/Button/Button";

const Header = () => {
  const pathname = usePathname();
  const isCoursePage =
    pathname.includes("/esoft-courses") || pathname.includes("/esoft-transfer");

  const { color } = useTheme();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header id="header" className="header">
        <div className="top-bar">
          <div className="max-wrap">
            <nav className="navbar navbar-expand-lg nav-menu">
              {/* Replace with dynamic menu data */}
              <ul className="navbar-nav navbardropdown" id="top-menu">
                {/*                 <li>
                  <Link href="https://esoft.lk/" target="_blank">
                    Home
                  </Link>
                </li> */}
                {/* <li>
                  <Link href="https://esoft.lk/about-us/" target="_blank">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="https://esoft.lk/students-life/" target="_blank">
                    students life
                  </Link>
                </li>
                <li>
                  <Link href="https://esoft.lk/careers/" target="_blank">
                    careers
                  </Link>
                </li>
                <li>
                  <Link href="https://esoft.lk/news/" target="_blank">
                    news & events
                  </Link>
                </li>
                <li>
                  <Link href="https://esoft.lk/blogs/" target="_blank">
                    blogs
                  </Link>
                </li>
                <li>
                  <Link href="https://esoft.lk/research/" target="_blank">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="https://esoft.lk/student-loan/" target="_blank">
                    Scholarship
                  </Link>
                </li>
                <li>
                  <Link href="https://esoft.lk/csr/" target="_blank">
                    CSR
                  </Link>
                </li> */}
                {/*                 <li>
                  <Link href="https://esoft.lk/contact-us/" target="_blank">
                    contact us
                  </Link>
                </li> */}
              </ul>
            </nav>
            <ul className="top-bar-menu">
              {/* <li>
                <Link target="_blank" href="https://payments.esoft.lk/">
                  <Image
                    src="/images/payment.png"
                    width={20}
                    height={20}
                    alt="Payments"
                    style={{ objectFit: "contain" }}
                  />
                  <span>Payments</span>
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://learn.esoft.lk/login">
                  <Image
                    src="/images/user.png"
                    width={20}
                    height={20}
                    alt="Students"
                    style={{ objectFit: "contain" }}
                  />
                  <span>Students</span>
                </Link>
              </li> 
               <li>
                <Link target="_blank" href="https://esoft.lk/alumni/">
                  <Image
                    src="/images/alumni.png"
                    width={20}
                    height={20}
                    alt="Alumni"
                    style={{ objectFit: "contain" }}
                  />
                  <span>Alumni</span>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="main-wrap d-flex justify-content-between main-menu-wrap">
            <div className="d-flex main-menu-inner-wrap w-100 justify-content-between">
              <div className="ml-auto">
                <Link href="/">
                  <Image
                    src="/images/logo/esu-header.png"
                    width={150}
                    height={50}
                    alt="Logo"
                    style={{
                      width: "100%",
                      objectFit: "contain",
                    }}
                    className="desktop-esu-logo"
                  />
                  <Image
                    src="/images/logo/esu-header.png"
                    width={150}
                    height={50}
                    alt="Logo"
                    style={{
                      width: "100%",
                      objectFit: "contain",
                    }}
                    className="mobile-esu-logo"
                  />
                </Link>
              </div>
              <div className="middle-menu">
                <nav className="navbar navbar-expand-lg nav-menu">
                  <ul className="navbar-nav navbardropdown" id="primary">
                    <li>
                      <Link href="/courses">Courses</Link>
                    </li>
                    <li>
                      <Link href="/faculties">Faculties</Link>
                    </li>
                    <li>
                      <Link href="/academics">Academics</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                    {/* <li>
                      <Link href="">
                        <span className="hidden-text">Transfer Programmes</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <span className="hidden-text">Branch Network</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <span className="hidden-text">
                          International Placements
                        </span>
                      </Link>
                    </li> */}
                  </ul>
                </nav>
              </div>
              <div className="mobile-div hamburger-wrap">
                <button
                  className="navnavbar-toggler hamburger classic navoffcanvas-header d-flex flex-wrap"
                  type="button"
                  onClick={toggleMobileMenu}
                >
                  <div className="hamburger" id="hamburger-1">
                    <span className="linee line-one"></span>
                    <span className="linee line-two"></span>
                    <span className="linee line-three"></span>
                  </div>
                  <span className="ham-title">MENU</span>
                </button>
              </div>
              {/* desktop */}
              <div className="apply-now-wrap desktop-only-view">
                {/* <Link
                  className="next-btn next-btn--blue"
                  target="_blank"
                  href={
                    isCoursePage
                      ? `https://register.esoft.lk/?id=${"COURSE_ID_DYNAMIC"}`
                      : "https://register.esoft.lk/"
                  }
                  style={{ backgroundColor: color }}
                >
                  <span>Register Online</span>
                </Link> */}
                <Button
                  buttonUrl={
                    isCoursePage
                      ? `https://register.esoft.lk/?id=${"COURSE_ID_DYNAMIC"}`
                      : "https://register.esoft.lk/"
                  }
                  buttonName={"Register Online"}
                />
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="apply-now-wrap mobile-only-view">
            <Link
              className="next-btn next-btn--blue"
              target="_blank"
              href={
                isCoursePage
                  ? `https://register.esoft.lk/?id=${"COURSE_ID_DYNAMIC"}`
                  : "https://register.esoft.lk/"
              }
              style={{ backgroundColor: color }}
            >
              <span>Register Online</span>
            </Link>
          </div>
        </div>
      </header>

      <nav
        id="navbar_main_nav"
        className={`navmobile-offcanvas navbar navbar-expand-lg navbar-dark bg-primary ${
          isMobileMenuOpen ? "show-mobile-menu" : "hide-mobile-menu"
        }`}
      >
        <div className="main-wrap">
          <nav className="navbar navbar-expand-lg nav-menu">
            <ul className="navbar-nav navbardropdown" id="mobile">
              <li>
                <Link href="https://esoft.lk/" target="_blank">
                  Home
                </Link>
              </li>
              {/* <li>
                <Link href="https://esoft.lk/about-us/" target="_blank">
                  About
                </Link>
              </li>
              <li>
                <Link href="https://esoft.lk/students-life/" target="_blank">
                  students life
                </Link>
              </li>
              <li>
                <Link href="https://esoft.lk/careers/" target="_blank">
                  careers
                </Link>
              </li>
              <li>
                <Link href="https://esoft.lk/news/" target="_blank">
                  news & events
                </Link>
              </li>
              <li>
                <Link href="https://esoft.lk/blogs/" target="_blank">
                  blogs
                </Link>
              </li>
              <li>
                <Link href="https://esoft.lk/research/" target="_blank">
                  Research
                </Link>
              </li>
              <li>
                <Link href="https://esoft.lk/student-loan/" target="_blank">
                  Scholarship
                </Link>
              </li>
              <li>
                <Link href="https://esoft.lk/csr/" target="_blank">
                  CSR
                </Link>
              </li> */}
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/faculties">Faculties</Link>
              </li>
              <li>
                <Link href="/contact-us" target="_blank">
                  contact us
                </Link>
              </li>
            </ul>
          </nav>
          {/* <ul className="top-bar-menu">
            <li>
              <Link target="_blank" href="https://register.esoft.lk/">
                <Image
                  src="/images/payment.png"
                  width={20}
                  height={20}
                  alt="Payments"
                  style={{ objectFit: "contain" }}
                />
                <span>Payments</span>
              </Link>
            </li>
            <li>
              <Link target="_blank" href="/students">
                <Image
                  src="/images/user.png"
                  width={20}
                  height={20}
                  alt=""
                />
                <span>Students</span>
              </Link>
            </li>
            <li>
              <Link href="/alumni">
                <Image
                  src="/images/alumni.png"
                  width={20}
                  height={20}
                  alt=""
                />
                <span>Alumni</span>
              </Link>
            </li>
          </ul> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
