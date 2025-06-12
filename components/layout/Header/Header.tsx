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
import MegaMenu from "./MegaMenu";
import TopBarMenu from "./TopBarMenu";
import MobileNav from "./MobileNav";

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

      console.log("Course Menu Data:", data);
      console.log("Filtered Courses:", enableCourse);

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
        <TopBarMenu />

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
                    src="https://cms.esu.lk/wp-content/uploads/2025/05/esu-home-banner-logo.png"
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
              <div className="middle-menu navbar-ml-menu">
                <nav className="navbar navbar-expand-lg nav-menu">
                  <ul className="navbar-nav navbardropdown" id="primary">
                    {/* <MegaMenu
                      facultyArtDesignMenu={facultyArtDesignMenu}
                      facultyLifeScienceMenu={facultyLifeScienceMenu}
                      facultyComputingMenu={facultyComputingMenu}
                      facultyEngineeringMenu={facultyEngineeringMenu}
                      facultyBusinessLawMenu={facultyBusinessLawMenu}
                      facultyLanguagesEducationSociologyMenu={
                        facultyLanguagesEducationSociologyMenu
                      }
                      menuName="Faculties"
                      courseMenuName=""
                      courseMenuSlug=""
                    /> */}
                    <li className="faculties-hover-menu">
                      <Link href="/faculties">Faculties</Link>
                      <div className="mega-menu">
                        <div className="transperent-bacground"></div>
                        <div className="mega-title-content">
                          <div className="mega-menu-panel">
                            <div className="mega-column">
                              <Link href="/faculties/faculty-of-art-design">
                                <h4 style={{ color: "rgb(245, 131, 60)" }}>
                                  Faculty of Art & Design{" "}
                                  <FaArrowRight
                                    className="arrow"
                                    style={{ color: "rgb(245, 131, 60)" }}
                                  />
                                </h4>
                              </Link>

                              <Link href="/faculties/faculty-of-life-science">
                                <h4 style={{ color: "rgb(191, 215, 48)" }}>
                                  Faculty of Life Science{" "}
                                  <FaArrowRight
                                    className="arrow"
                                    style={{ color: "rgb(191, 215, 48)" }}
                                  />
                                </h4>
                              </Link>
                            </div>
                            <div className="mega-column">
                              <Link href="/faculties/faculty-of-computing">
                                <h4 style={{ color: "rgb(0, 174, 205)" }}>
                                  Faculty of Computing{" "}
                                  <FaArrowRight
                                    className="arrow"
                                    style={{ color: "rgb(0, 174, 205)" }}
                                  />
                                </h4>
                              </Link>

                              <Link href="/faculties/faculty-of-engineering">
                                <h4 style={{ color: "rgb(0, 80, 160)" }}>
                                  Faculty of Engineering{" "}
                                  <FaArrowRight
                                    className="arrow"
                                    style={{ color: "rgb(0, 80, 160)" }}
                                  />
                                </h4>
                              </Link>
                            </div>
                            <div className="mega-column">
                              <Link href="/faculties/faculty-of-business-law">
                                <h4 style={{ color: "rgb(210, 35, 50)" }}>
                                  Faculty of Business & Law{" "}
                                  <FaArrowRight
                                    className="arrow"
                                    style={{ color: "rgb(210, 35, 50)" }}
                                  />
                                </h4>
                              </Link>

                              <Link href="/faculties/faculty-of-languages-education-sociology">
                                <h4 style={{ color: "rgb(255, 203, 5)" }}>
                                  Faculty of Languages, Education & Sociology{" "}
                                  <FaArrowRight
                                    className="arrow"
                                    style={{ color: "rgb(255, 203, 5)" }}
                                  />
                                </h4>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <MegaMenu
                      facultyArtDesignMenu={facultyArtDesignMenu}
                      facultyLifeScienceMenu={facultyLifeScienceMenu}
                      facultyComputingMenu={facultyComputingMenu}
                      facultyEngineeringMenu={facultyEngineeringMenu}
                      facultyBusinessLawMenu={facultyBusinessLawMenu}
                      facultyLanguagesEducationSociologyMenu={
                        facultyLanguagesEducationSociologyMenu
                      }
                      menuName="Foundations"
                      courseMenuName="Foundations"
                      courseMenuSlug="foundation-level"
                    />

                    <MegaMenu
                      facultyArtDesignMenu={facultyArtDesignMenu}
                      facultyLifeScienceMenu={facultyLifeScienceMenu}
                      facultyComputingMenu={facultyComputingMenu}
                      facultyEngineeringMenu={facultyEngineeringMenu}
                      facultyBusinessLawMenu={facultyBusinessLawMenu}
                      facultyLanguagesEducationSociologyMenu={
                        facultyLanguagesEducationSociologyMenu
                      }
                      menuName="Undergraduate"
                      courseMenuName="Undergraduate"
                      courseMenuSlug="undergraduate-level"
                    />

                    <MegaMenu
                      facultyArtDesignMenu={facultyArtDesignMenu}
                      facultyLifeScienceMenu={facultyLifeScienceMenu}
                      facultyComputingMenu={facultyComputingMenu}
                      facultyEngineeringMenu={facultyEngineeringMenu}
                      facultyBusinessLawMenu={facultyBusinessLawMenu}
                      facultyLanguagesEducationSociologyMenu={
                        facultyLanguagesEducationSociologyMenu
                      }
                      menuName="Postgraduate"
                      courseMenuName="Postgraduate"
                      courseMenuSlug="postgraduate"
                    />
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

      <MobileNav isMobileMenuOpen={isMobileMenuOpen} />
    </>
  );
};

export default Header;
