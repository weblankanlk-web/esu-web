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
      courses.filter((course) =>
        course?.courseTypes?.nodes.every(
          (type: any) => type.slug === courseMenuSlug
        )
      );

    console.log(filterCourses(facultyArtDesignMenu));

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
      <Link href="/faculties">{menuName}</Link>
      <div className="mega-menu">
        {courseMenuName && (
          <div className="mega-menu-course-title">
            <h2>{courseMenuName}</h2>
          </div>
        )}
        <div className="mega-menu-panel">
          <div className="mega-column">
            <Link href="/faculties/faculty-of-art-design">
              <h4 style={{ color: "rgb(245, 131, 60)" }}>
                Faculty of Art & Design{" "}
                <FaArrowRight style={{ color: "rgb(245, 131, 60)" }} />
              </h4>
            </Link>
            <ul>
              {facultyArtDesignMenuSec.map((item, index) => (
                <li key={index}>
                  <Link href={`/courses/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>

            <Link href="/faculties/faculty-of-life-science">
              <h4 style={{ color: "rgb(191, 215, 48)" }}>
                Faculty of Life Science{" "}
                <FaArrowRight style={{ color: "rgb(191, 215, 48)" }} />
              </h4>
            </Link>
            <ul>
              {facultyLifeScienceMenuSec.map((item, index) => (
                <li key={index}>
                  <Link href={`/courses/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-column">
            <Link href="/faculties/faculty-of-computing">
              <h4 style={{ color: "rgb(0, 174, 205)" }}>
                Faculty of Computing{" "}
                <FaArrowRight style={{ color: "rgb(0, 174, 205)" }} />
              </h4>
            </Link>
            <ul>
              {facultyComputingMenuSec.map((item, index) => (
                <li key={index}>
                  <Link href={`/courses/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>

            <Link href="/faculties/faculty-of-engineering">
              <h4 style={{ color: "rgb(0, 80, 160)" }}>
                Faculty of Engineering{" "}
                <FaArrowRight style={{ color: "rgb(0, 80, 160)" }} />
              </h4>
            </Link>
            <ul>
              {facultyEngineeringMenuSec.map((item, index) => (
                <li key={index}>
                  <Link href={`/courses/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mega-column">
            <Link href="/faculties/faculty-of-business-law">
              <h4 style={{ color: "rgb(210, 35, 50)" }}>
                Faculty of Business & Law{" "}
                <FaArrowRight style={{ color: "rgb(210, 35, 50)" }} />
              </h4>
            </Link>
            <ul>
              {facultyBusinessLawMenuSec.map((item, index) => (
                <li key={index}>
                  <Link href={`/courses/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>

            <Link href="/faculties/faculty-of-languages-education-sociology">
              <h4 style={{ color: "rgb(255, 203, 5)" }}>
                Faculty of Languages, Education & Sociology{" "}
                <FaArrowRight style={{ color: "rgb(255, 203, 5)" }} />
              </h4>
            </Link>
            <ul>
              {facultyLanguagesEducationSociologyMenuSec.map((item, index) => (
                <li key={index}>
                  <Link href={`/courses/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MegaMenu;
