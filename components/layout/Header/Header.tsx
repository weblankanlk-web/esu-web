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
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [hideTimer, setHideTimer] = useState<NodeJS.Timeout | null>(null);

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
        { slug }
      );

      const enableCourse = data.schoolType?.courses?.nodes.filter(
        (course) => course.courses.enableCourseInTheMenu === true
      );

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
        case "faculty-of-languages-education-and-sociology":
          setFacultyLanguagesEducationSociologyMenu(enableCourse);
          break;
      }
    };

    slugs.forEach(fetchCourseMenu);
  }, []);

  const handleMouseEnter = () => {
    if (hideTimer) clearTimeout(hideTimer);
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setShowMegaMenu(false), 300);
    setHideTimer(timer);
  };

  return (
    <>
      <header id="header" className="header">
        <div className="top-bar">
          <div className="max-wrap">
            <nav className="navbar navbar-expand-lg nav-menu">
              <ul className="navbar-nav navbardropdown" id="top-menu">
                <li>
                  <Link href="/news">News & Events</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/research">Research</Link>
                </li>
              </ul>
            </nav>
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
                    className="desktop-esu-logo"
                    style={{ width: "100%", objectFit: "contain" }}
                  />
                  <Image
                    src="/images/logo/esu-header.png"
                    width={150}
                    height={50}
                    alt="Logo"
                    className="mobile-esu-logo"
                    style={{ width: "100%", objectFit: "contain" }}
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
                      <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="faculties-hover-wrapper"
                      >
                        <Link href="/faculties">Faculties</Link>
                        {showMegaMenu && (
                          <div className="mega-menu">
                            <div className="mega-menu-panel">
                              <div className="mega-column">
                                <h4>Faculties</h4>
                                <ul>
                                  <li>
                                    <Link href="/faculties/faculty-of-computing">
                                      Faculty of Computing
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/faculties/faculty-of-business-law">
                                      Faculty of Business & Law
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/faculties/faculty-of-life-science">
                                      Faculty of Life Science
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/faculties/faculty-of-engineering">
                                      Faculty of Engineering
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/faculties/faculty-of-art-design">
                                      Faculty of Art & Design
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/faculties/faculty-of-languages-education-sociology">
                                      Faculty of Languages, Education &
                                      Sociology
                                    </Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="mega-column">
                                <h4>Foundation</h4>
                                <ul>
                                  {/*                                 {facultyComputingMenu.map((item, index) => (
                                  <li key={index}><Link href={`/courses/${item.slug}`}>{item.title}</Link></li>
                                ))} */}

                                  <li>
                                    <Link href="/courses/foundation-year-in-it-kingston-university-uk?id=503&courseId=cG9zdDo0NjEy">
                                      Foundation Year in IT - Kingston
                                      University (UK)
                                    </Link>
                                  </li>
                                  {/*              <li>
                                    <Link href="none"></Link>
                                  </li>
                                  <li>
                                    <Link href="none"></Link>
                                  </li> */}
                                  <li>
                                    <Link href="/courses/foundation-year-in-engineering-kingston-university-uk?id=504&courseId=cG9zdDo0NjE0">
                                      Foundation Year in Engineering - Kingston
                                      University (UK)
                                    </Link>
                                  </li>
                                  {/*              <li>
                                    <Link href="none"></Link>
                                  </li>
                                  <li>
                                    <Link href=""></Link>
                                  </li> */}
                                </ul>
                              </div>

                              <div className="mega-column">
                                <h4>Undergraduate</h4>
                                <ul>
                                  {/*            {facultyBusinessLawMenu.map((item, index) => (
                                  <li key={index}><Link href={`/courses/${item.slug}`}>{item.title}</Link></li>
                                ))} */}
                                  <li>
                                    <Link href="/courses/bsc-hons-in-computing-london-metropolitan-university-uk?id=548&courseId=cG9zdDo1Nzg1">
                                      BSc (Hons) in Computing - London
                                      Metropolitan University (UK)
                                    </Link>
                                  </li>

                                  <li>
                                    <Link href="/courses/bsc-hons-in-banking-and-finance-london-metropolitan-university-uk?id=552&courseId=cG9zdDo1Nzg3">
                                      BSc (Hons) in Banking and Finance - London
                                      Metropolitan University (UK)
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/courses/bsc-hons-in-nursing-top-up-london-metropolitan-university-uk?id=519&courseId=cG9zdDo1MTU3">
                                      BSc (Hons) in Nursing (TOP UP) - London
                                      Metropolitan University (UK)
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/courses/beng-hons-in-mechanical-engineering-kingston-university-uk?id=556&courseId=cG9zdDo1Nzkx">
                                      BEng (Hons) in Mechanical Engineering -
                                      Kingston University (UK)
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="https://esu.lk/courses/british-fashion-degree-hnd-top-up-bundle?id=470&courseId=cG9zdDo0MDgy">
                                      British Fashion Degree
                                    </Link>
                                  </li>
                                  {/*   <li>
                                    <Link href=""></Link>
                                  </li> */}
                                </ul>
                              </div>

                              <div className="mega-column">
                                <h4>Postgraduate</h4>
                                <ul>
                                  {/*                                 {facultyLanguagesEducationSociologyMenu.map((item, index) => (
                                  <li key={index}><Link href={`/courses/${item.slug}`}>{item.title}</Link></li>
                                ))} */}

                                  <li>
                                    <Link href="courses/master-of-science-in-software-engineering-kingston-university?id=61&courseId=cG9zdDoyMjU4">
                                      Master of Science in Software Engineering
                                      - Kingston University (UK)
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/courses/master-of-business-administration-fintech-london-metropolitan-university-uk?id=342&courseId=cG9zdDoyMzg2">
                                      Master of Business Administration
                                      (Fintech) - London Metropolitan University
                                      (UK)
                                    </Link>
                                  </li>
                                  {/*  <li>
                                    <Link href="none"></Link>
                                  </li> */}
                                  <li>
                                    <Link href="https://esu.lk/courses/master-of-science-in-mechatronic-systems-kingston-university-uk?id=516&courseId=cG9zdDo1MTk0">
                                      Master of Science in Mechatronic Systems -
                                      Kingston University (UK)
                                    </Link>
                                  </li>
                                  {/*      <li>
                                    <Link href="none"></Link>
                                  </li>
                                  <li>
                                    <Link href=""></Link>
                                  </li> */}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
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

              <div className="apply-now-wrap desktop-only-view">
                <Modal>
                  <InquireForm />
                </Modal>
              </div>
            </div>
          </div>

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
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/faculties">Faculties</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Header;
