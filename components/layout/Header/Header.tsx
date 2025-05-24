"use client";

import Link from "next/link";
import Image from "next/image";
import "./style.scss";
import { useEffect, useState } from "react";
import Modal from "@/components/common/Modal/Modal";
import InquireForm from "@/components/sections/InquireForm/InquireForm";
import { FaArrowRight } from "react-icons/fa";
import { graphQLClient } from "@/lib/graphql-client";
import { CourseMenuResponse, CourseNode } from "@/common/interfaces/interface";
import { GET_MENU_COURSE_BY_SLUG_SELECTED } from "@/common/queries/query";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const [facultyArtDesignMenu, setFacultyArtDesignMenu] = useState<
    CourseNode[]
  >([]);
  const [facultyComputingMenu, setFacultyComputingMenu] = useState<
    CourseNode[]
  >([]);
  const [facultyLifeScienceMenu, setFacultyLifeScienceMenu] = useState<
    CourseNode[]
  >([]);
  const [facultyEngineeringMenu, setFacultyEngineeringMenu] = useState<
    CourseNode[]
  >([]);
  const [facultyBusinessLawMenu, setFacultyBusinessLawMenu] = useState<
    CourseNode[]
  >([]);
  const [
    facultyLanguagesEducationSociologyMenu,
    setFacultyLanguagesEducationSociologyMenu,
  ] = useState<CourseNode[]>([]);

  const slugs = [
    "faculty-of-art-design",
    "faculty-of-computing",
    "faculty-of-life-science",
    "faculty-of-engineering",
    "faculty-of-business-law",
    "faculty-of-languages-education-and-sociology",
  ];

  useEffect(() => {
    const fetchCourseMenu = async (slug: string) => {
      const data = await graphQLClient.request<CourseMenuResponse>(
        GET_MENU_COURSE_BY_SLUG_SELECTED,
        {
          slug: slug,
        }
      );

      const enableCourse = data.schoolType?.courses?.nodes.filter(
        (course) => course.courses.enableCourseInTheMenu === true
      );

      // console.log("Course Menu Data:", data);
      // console.log("Filtered Courses:", enableCourse);

      switch (slug) {
        case "faculty-of-art-design":
          setFacultyArtDesignMenu(enableCourse);
          break;
        case "faculty-of-computing":
          setFacultyComputingMenu(enableCourse);
          break;
        case "faculty-of-life-science":
          setFacultyLifeScienceMenu(enableCourse);
          break;
        case "faculty-of-engineering":
          setFacultyEngineeringMenu(enableCourse);
          break;
        case "faculty-of-business-law":
          setFacultyBusinessLawMenu(enableCourse);
          break;
        case "faculty-of-languages-education-sociology":
          setFacultyLanguagesEducationSociologyMenu(enableCourse);
          break;
        default:
          break;
      }
    };

    for (const slug of slugs) {
      fetchCourseMenu(slug);
    }
  }, []);

  // console.log("facultyComputingMenu", facultyComputingMenu);

  return (
    <>
      <header id="header" className="header">
        <div className="top-bar">
          <div className="max-wrap">
            <nav className="navbar navbar-expand-lg nav-menu">
              {/* Replace with dynamic menu data */}
              <ul className="navbar-nav navbardropdown" id="top-menu">
                <li>
                  <Link href="/news">news & events</Link>
                </li>
                <li>
                  <Link href="/research">Research</Link>
                </li>
              </ul>
            </nav>
            {/* <ul className="top-bar-menu">
              <li>
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
              </li>
            </ul> */}
          </div>
        </div>

        <div className="bottom-bar">
          <div className="main-wrap d-flex justify-content-between main-menu-wrap">
            <div className="d-flex main-menu-inner-wrap w-100 justify-content-between">
              <div className="ml-auto mobile-margin-auto">
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
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/courses">Courses</Link>
                    </li>
                    <li className="faculties-hover-menu">
                      <Link href="/faculties">Faculties</Link>
                      <div className="mega-menu">
                        <div className="mega-menu-panel">
                          <div className="mega-column">
                            <Link href="/faculties/faculty-of-art-design">
                              <h4 style={{ color: "rgb(245, 131, 60)" }}>
                                Faculty of Art & Design
                                <i className="arrow">
                                  <FaArrowRight
                                    style={{ color: "rgb(245, 131, 60)" }}
                                  />
                                </i>
                              </h4>
                            </Link>
                            <ul>
                              {facultyArtDesignMenu.map((item, index) => (
                                <li key={index}>
                                  <a href={`/courses/${item.slug}`}>
                                    {item.title}
                                  </a>
                                </li>
                              ))}
                            </ul>

                            <Link href="/faculties/faculty-of-life-science">
                              <h4 style={{ color: "rgb(191, 215, 48)" }}>
                                Faculty of Life Science
                                <i className="arrow">
                                  <FaArrowRight
                                    style={{ color: "rgb(191, 215, 48)" }}
                                  />
                                </i>
                              </h4>
                            </Link>
                            <ul>
                              {facultyLifeScienceMenu.map((item, index) => (
                                <li key={index}>
                                  <a href={`/courses/${item.slug}`}>
                                    {item.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mega-column">
                            <Link href="/faculties/faculty-of-computing">
                              <h4 style={{ color: "rgb(0, 174, 205)" }}>
                                Faculty of Computing
                                <i className="arrow">
                                  <FaArrowRight
                                    style={{ color: "rgb(0, 174, 205)" }}
                                  />
                                </i>
                              </h4>
                            </Link>
                            <ul>
                              {facultyComputingMenu.map((item, index) => (
                                <li key={index}>
                                  <a href={`/courses/${item.slug}`}>
                                    {item.title}
                                  </a>
                                </li>
                              ))}
                            </ul>

                            <Link href="/faculties/faculty-of-engineering">
                              <h4 style={{ color: "rgb(0, 80, 160)" }}>
                                Faculty of Engineering
                                <i className="arrow">
                                  <FaArrowRight
                                    style={{ color: "rgb(0, 80, 160)" }}
                                  />
                                </i>
                              </h4>
                            </Link>
                            <ul>
                              {facultyEngineeringMenu.map((item, index) => (
                                <li key={index}>
                                  <a href={`/courses/${item.slug}`}>
                                    {item.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mega-column">
                            <Link href="/faculties/faculty-of-business-law">
                              <h4 style={{ color: "rgb(210, 35, 50)" }}>
                                Faculty of Business & Law
                                <i className="arrow">
                                  <FaArrowRight
                                    style={{ color: "rgb(210, 35, 50)" }}
                                  />
                                </i>
                              </h4>
                            </Link>
                            <ul>
                              {facultyBusinessLawMenu.map((item, index) => (
                                <li key={index}>
                                  <a href={`/courses/${item.slug}`}>
                                    {item.title}
                                  </a>
                                </li>
                              ))}
                            </ul>

                            <Link href="/faculties/faculty-of-languages-education-sociology">
                              <h4 style={{ color: "rgb(255, 203, 5)" }}>
                                Faculty of Languages, Education & Sociology
                                <i className="arrow">
                                  <FaArrowRight
                                    style={{ color: "rgb(255, 203, 5)" }}
                                  />
                                </i>
                              </h4>
                            </Link>
                            <ul>
                              {facultyLanguagesEducationSociologyMenu.map(
                                (item, index) => (
                                  <li key={index}>
                                    <a href={`/courses/${item.slug}`}>
                                      {item.title}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link href="/academics">Academics</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
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
                <Modal>
                  <InquireForm />
                </Modal>
              </div>
            </div>
          </div>
          {/* mobile */}
          <div className="apply-now-wrap mobile-only-view">
            <Modal>
              <InquireForm />
            </Modal>
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
                <Link href="/" onClick={() => (window.location.href = "/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  onClick={() => (window.location.href = "/about-us")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  onClick={() => (window.location.href = "/courses")}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/faculties"
                  onClick={() => (window.location.href = "/faculties")}
                >
                  Faculties
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  onClick={() => (window.location.href = "/contact-us")}
                >
                  Contact Us
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
