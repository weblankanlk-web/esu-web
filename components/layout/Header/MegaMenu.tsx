import { CourseNode } from "@/common/interfaces/interface";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface MegaMenuProps {
  facultyArtDesignMenu: CourseNode[];
  facultyLifeScienceMenu: CourseNode[];
  facultyComputingMenu: CourseNode[];
  facultyEngineeringMenu: CourseNode[];
  facultyBusinessLawMenu: CourseNode[];
  facultyLanguagesEducationSociologyMenu: CourseNode[];
  menuName: string;
  courseMenuName: string;
  courseMenuSlug: string;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  facultyArtDesignMenu,
  facultyLifeScienceMenu,
  facultyComputingMenu,
  facultyEngineeringMenu,
  facultyBusinessLawMenu,
  facultyLanguagesEducationSociologyMenu,
  menuName,
  courseMenuName,
  courseMenuSlug,
}) => {
  const [facultyArtDesignMenuSec, setFacultyArtDesignMenuSec] = useState<
    CourseNode[]
  >([]);
  const [facultyComputingMenuSec, setFacultyComputingMenuSec] = useState<
    CourseNode[]
  >([]);
  const [facultyLifeScienceMenuSec, setFacultyLifeScienceMenuSec] = useState<
    CourseNode[]
  >([]);
  const [facultyEngineeringMenuSec, setFacultyEngineeringMenuSec] = useState<
    CourseNode[]
  >([]);
  const [facultyBusinessLawMenuSec, setFacultyBusinessLawMenuSec] = useState<
    CourseNode[]
  >([]);
  const [
    facultyLanguagesEducationSociologyMenuSec,
    setFacultyLanguagesEducationSociologyMenuSec,
  ] = useState<CourseNode[]>([]);

  useEffect(() => {
    const filterCourses = (courses: CourseNode[]) =>
      courses.filter(
        (course) =>
          course?.courseTypes?.nodes.length > 0 &&
          course.courseTypes.nodes.every(
            (type: any) => type.slug && type.slug === courseMenuSlug
          )
      );

    // console.log(filterCourses(facultyArtDesignMenu));

    if (courseMenuSlug) {
      setFacultyArtDesignMenuSec(filterCourses(facultyArtDesignMenu));
      setFacultyComputingMenuSec(filterCourses(facultyComputingMenu));
      setFacultyLifeScienceMenuSec(filterCourses(facultyLifeScienceMenu));
      setFacultyEngineeringMenuSec(filterCourses(facultyEngineeringMenu));
      setFacultyBusinessLawMenuSec(filterCourses(facultyBusinessLawMenu));
      setFacultyLanguagesEducationSociologyMenuSec(
        filterCourses(facultyLanguagesEducationSociologyMenu)
      );
    } else {
      setFacultyArtDesignMenuSec(facultyArtDesignMenu);
      setFacultyComputingMenuSec(facultyComputingMenu);
      setFacultyLifeScienceMenuSec(facultyLifeScienceMenu);
      setFacultyEngineeringMenuSec(facultyEngineeringMenu);
      setFacultyBusinessLawMenuSec(facultyBusinessLawMenu);
      setFacultyLanguagesEducationSociologyMenuSec(
        facultyLanguagesEducationSociologyMenu
      );
    }
  }, [
    courseMenuSlug,
    facultyArtDesignMenu,
    facultyComputingMenu,
    facultyLifeScienceMenu,
    facultyEngineeringMenu,
    facultyBusinessLawMenu,
    facultyLanguagesEducationSociologyMenu,
  ]);

  return (
    <li className="faculties-hover-menu">
      <Link href="/faculties" className="faculties-menuname">
        {menuName}
      </Link>
      <div className="mega-menu">
        <div className="transperent-bacground"></div>
        <div className="mega-title-content">
          {/* {courseMenuName && (
            <div className="mega-menu-course-title">
              <h2>{courseMenuName}</h2>
            </div>
          )} */}
          {facultyArtDesignMenuSec.length > 0 ||
          facultyLifeScienceMenuSec.length > 0 ||
          facultyComputingMenuSec.length > 0 ||
          facultyEngineeringMenuSec.length > 0 ||
          facultyBusinessLawMenuSec.length > 0 ||
          facultyLanguagesEducationSociologyMenuSec.length > 0 ? (
            <div className="mega-menu-panel">
              {/* {(facultyComputingMenuSec.length > 0 ||
                facultyEngineeringMenuSec.length > 0) && ( */}
              {/* <div className="mega-column"> */}
              {facultyComputingMenuSec.length > 0 && (
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
                  <ul>
                    {facultyComputingMenuSec.map((item, index) => (
                      <li key={index}>
                        <Link
                          onClick={() => {
                            window.location.href = `/courses/${item.slug}?id=${item.courses.courseId}&courseId=${item.id}`;
                          }}
                          href="#"
                          className="faculty-computing-link"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {facultyBusinessLawMenuSec.length > 0 && (
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
                  <ul>
                    {facultyBusinessLawMenuSec.map((item, index) => (
                      <li key={index}>
                        <Link
                          onClick={() => {
                            window.location.href = `/courses/${item.slug}?id=${item.courses.courseId}&courseId=${item.id}`;
                          }}
                          href="#"
                          className="faculty-business-law-link"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {facultyEngineeringMenuSec.length > 0 && (
                <div className="mega-column">
                  <Link href="/faculties/faculty-of-engineering">
                    <h4 style={{ color: "rgb(0, 80, 160)" }}>
                      Faculty of Engineering{" "}
                      <FaArrowRight
                        className="arrow"
                        style={{ color: "rgb(0, 80, 160)" }}
                      />
                    </h4>
                  </Link>
                  <ul>
                    {facultyEngineeringMenuSec.map((item, index) => (
                      <li key={index}>
                        <Link
                          onClick={() => {
                            window.location.href = `/courses/${item.slug}?id=${item.courses.courseId}&courseId=${item.id}`;
                          }}
                          href="#"
                          className="faculty-engineering-link"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* </div> */}
              {/* )} */}

              {/* {(facultyBusinessLawMenuSec.length > 0 ||
                facultyArtDesignMenuSec.length > 0) && ( */}
              {/* <div className="mega-column"> */}

              {facultyArtDesignMenuSec.length > 0 && (
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
                  <ul>
                    {facultyArtDesignMenuSec.map((item, index) => (
                      <li key={index}>
                        <Link
                          onClick={() => {
                            window.location.href = `/courses/${item.slug}?id=${item.courses.courseId}&courseId=${item.id}`;
                          }}
                          href="#"
                          className="faculty-art-design-link"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* </div> */}
              {/* )} */}

              {/* {(facultyLifeScienceMenuSec.length > 0 ||
                facultyLanguagesEducationSociologyMenuSec.length > 0) && ( */}
              {/* <div className="mega-column"> */}
              {facultyLifeScienceMenuSec.length > 0 && (
                <div className="mega-column">
                  <Link href="/faculties/faculty-of-life-science">
                    <h4 style={{ color: "rgb(191, 215, 48)" }}>
                      Faculty of Life Science{" "}
                      <FaArrowRight
                        className="arrow"
                        style={{ color: "rgb(191, 215, 48)" }}
                      />
                    </h4>
                  </Link>
                  <ul>
                    {facultyLifeScienceMenuSec.map((item, index) => (
                      <li key={index}>
                        <Link
                          onClick={() => {
                            window.location.href = `/courses/${item.slug}?id=${item.courses.courseId}&courseId=${item.id}`;
                          }}
                          href="#"
                          className="faculty-life-science-link"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {facultyLanguagesEducationSociologyMenuSec.length > 0 && (
                <div className="mega-column">
                  <Link href="/faculties/faculty-of-languages-education-sociology">
                    <h4 style={{ color: "rgb(255, 203, 5)" }}>
                      Faculty of Education,
                      <br /> Languages and Sociology{" "}
                      <FaArrowRight
                        className="arrow"
                        style={{ color: "rgb(255, 203, 5)" }}
                      />
                    </h4>
                  </Link>
                  <ul>
                    {facultyLanguagesEducationSociologyMenuSec.map(
                      (item, index) => (
                        <li key={index}>
                          <Link
                            onClick={() => {
                              window.location.href = `/courses/${item.slug}?id=${item.courses.courseId}&courseId=${item.id}`;
                            }}
                            href="#"
                            className="faculty-languages-education-link"
                          >
                            {item.title}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
              {/* </div> */}
              {/* )} */}
            </div>
          ) : (
            <div className="mega-menu-panel">
              <p className="coming-soon">Coming Soon!!!</p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default MegaMenu;
