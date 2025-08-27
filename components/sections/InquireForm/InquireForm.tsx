"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "./style.scss";
import Image from "next/image";
import { useTheme } from "@/lib/ThemeContext";
import { graphQLClient } from "@/lib/graphql-client";
import { CoursesInquire } from "@/common/types/type";
import { GET_COURSES_FOR_INQUIRE_FORM } from "@/common/queries/query";
import { usePathname } from "next/navigation";
import nationalities from "../../../data/nationalities.json";
import CustomSelect from "@/components/common/Checkbox/Checkbox";

interface InquireFormProps {
  inquire_image: boolean;
}

const InquireForm: React.FC<InquireFormProps> = ({ inquire_image }) => {
  const { color } = useTheme();
  const [courses, setCourses] = useState<CoursesInquire[]>([]);

  const pathname = usePathname();
  const slug = pathname?.split("/").pop();

  const [isCoursePage, setIsCoursePage] = useState(false);

  useEffect(() => {
    if (pathname.includes("/courses/")) {
      setIsCoursePage(true);
    } else {
      setIsCoursePage(false);
    }
  }, [pathname]);

  // console.log("Slug:", isCoursePage);

  // if (slug && courseName) {
  //   console.log("Slug:", slug);
  // }

  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await graphQLClient.request<{
          branchTypes: any;
          courses: { nodes: CoursesInquire[] };
        }>(GET_COURSES_FOR_INQUIRE_FORM);

        // console.log("course data", data);

        const branchNodes = data.branchTypes.nodes;

        const filteredBranches = branchNodes.filter((branch: any) =>
          ["ESU Kandy", "ESU Colombo"].includes(branch.name)
        );

        // console.log("filtered branches", filteredBranches);

        const combinedCourses = filteredBranches
          .flatMap((branch: any) => branch.courses.nodes)
          .filter(
            (course: { slug: any }, index: any, self: { slug: any }[]) =>
              index ===
              self.findIndex((c: { slug: any }) => c.slug === course.slug)
          );

        // console.log("Combined Courses:", combinedCourses);
        setCourses(combinedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  // console.log("Courses:", courses);

  const filterslugcourse = useMemo(
    () => courses.filter((course) => course.slug === slug),
    [courses, slug]
  );

  // console.log("Filtered Slug Course:", filterslugcourse);

  const findCourseCode = filterslugcourse[0]?.courses?.courseCode;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    nationality: "",
    nicPassport: "",
    branch: "",
    message: "",
    course: "",
    source: "ESU-Web Form",
  });

  const [selectedNationality, setSelectedNationality] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [selectedCourse, setSelectedCourse] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [selectedBranch, setSelectedBranch] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [selectedFaculty, setSelectedFaculty] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const [status, setStatus] = useState("");

  const didAutoSelect = useRef(false);

  useEffect(() => {
    if (!didAutoSelect.current && isCoursePage && filterslugcourse.length > 0) {
      setSelectedCourse({
        label: filterslugcourse[0]?.title || "Course",
        value: filterslugcourse[0]?.courses?.courseCode || "",
      });

      didAutoSelect.current = true;
    }

    // if (!isCoursePage) setSelectedCourse(null);
  }, [isCoursePage, filterslugcourse]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const payload = {
      firstname: formData.firstName,
      lastname: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      course: isCoursePage ? findCourseCode : selectedCourse?.value || "",
      source: "ESU-Web Form",
      nationality: selectedNationality?.value || "",
      notes: formData.message,
      nic_passport: formData.nicPassport,
      branch: selectedBranch?.value || "",
    };

    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          nationality: "",
          nicPassport: "",
          branch: "",
          message: "",
          course: "",
          source: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="inquire">
      {inquire_image && (
        <div className="inquire__image-section">
          <Image src="/images/home-main.png" width={900} height={850} alt="" />
        </div>
      )}

      <div className="inquire__form-section">
        <h2 className="inquire__title">Inquire</h2>
        {status === "success" && (
          <p className="inquire__success">
            Thank you! Your inquiry was submitted.
          </p>
        )}
        {status === "error" && (
          <p className="inquire__error">
            Oops! Something went wrong. Please try again. <br />
            Reach us at Hotline: +94 766 000 400 or Email: info@esu.lk
          </p>
        )}

        <form className="inquire__form" onSubmit={handleSubmit}>
          <div className="inquire__row">
            <div className="inquire__field">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inquire__field">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="inquire__row">
            <div className="inquire__field">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                placeholder="+94 77 123 4567"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="inquire__field">
              <label>Email address:</label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="inquire__field">
            <CustomSelect
              label="Nationality:"
              placeholder="Select Nationality"
              options={nationalities}
              value={selectedNationality}
              onChange={setSelectedNationality}
              required
            />
          </div>

          <div className="inquire__field">
            <label>NIC/Passport:</label>
            <input
              type="text"
              name="nicPassport"
              placeholder="Enter NIC/Passport"
              value={formData.nicPassport}
              onChange={handleChange}
              required
            />
          </div>

          <CustomSelect
            label="Campus:"
            placeholder="Select Campus"
            options={[
              { label: "ESU Colombo", value: "Colombo" },
              { label: "ESU Kandy", value: "ESU-Kandy" },
            ]}
            value={selectedBranch}
            onChange={setSelectedBranch}
            required
          />

          {/* <CustomSelect
            label="Faculty:"
            placeholder="Select Faculty"
            options={[
              {
                label: "Faculty of Art & Design",
                value: "faculty-of-art-design",
              },
              {
                label: "Faculty of Life Science",
                value: "faculty-of-life-science",
              },
              {
                label: "Faculty of Business & Law",
                value: "faculty-of-business-law",
              },
              {
                label: "Faculty of Computing",
                value: "faculty-of-computing",
              },
              {
                label: "Faculty of Engineering",
                value: "faculty-of-engineering",
              },
              {
                label: "Faculty of Education, Languages & Sociology",
                value: "faculty-of-education-languages-sociology",
              },
            ]}
            value={selectedFaculty}
            onChange={setSelectedFaculty}
            required
          /> */}

          <CustomSelect
            label="Course:"
            placeholder="Select Course"
            options={
              selectedFaculty
                ? courses
                    .filter((course) =>
                      course.schoolTypes?.nodes.some(
                        (type: { slug: string }) =>
                          type.slug === selectedFaculty?.value
                      )
                    )
                    .map((course) => ({
                      label: course.title,
                      value: course.courses?.courseCode || "",
                    }))
                : courses.map((course) => ({
                    label: course.title,
                    value: course.courses?.courseCode || "",
                  }))
            }
            value={selectedCourse}
            onChange={setSelectedCourse}
            required
          />

          <div className="inquire__field">
            <label>Message:</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" style={{ background: color }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquireForm;
