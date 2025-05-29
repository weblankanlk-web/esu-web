"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import { CoursesInquire } from "@/common/types/type";
import { graphQLClient } from "@/lib/graphql-client";
import { GET_COURSES_FOR_INQUIRE_FORM } from "@/common/queries/query";
import ButtonClick from "@/components/common/Button/ButtonClick";
import nationalities from "../../../../data/nationalities.json";
import CustomSelect from "@/components/common/Checkbox/Checkbox";

const ContactForm = () => {
  const [courses, setCourses] = useState<CoursesInquire[]>([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await graphQLClient.request<{
          branchTypes: any;
          courses: { nodes: CoursesInquire[] };
        }>(GET_COURSES_FOR_INQUIRE_FORM);

        const branchNodes = data.branchTypes.nodes;

        const filteredBranches = branchNodes.filter((branch: any) =>
          ["ESU Kandy", "ESU Colombo"].includes(branch.name)
        );

        const combinedCourses = filteredBranches
          .flatMap((branch: any) => branch.courses.nodes)
          .filter(
            (course: { slug: any }, index: any, self: { slug: any }[]) =>
              index ===
              self.findIndex((c: { slug: any }) => c.slug === course.slug)
          );

        // console.log("Filtered Courses:", combinedCourses);
        setCourses(combinedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  // console.log("Courses:", courses);

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

  const [status, setStatus] = useState("");

  const [documents, setDocuments] = useState<File[]>([]);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setDocuments(Array.from(e.target.files));
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // const payload = {
    //   firstname: formData.firstName,
    //   lastname: formData.lastName,
    //   phone: formData.phone,
    //   email: formData.email,
    //   course: formData.course,
    //   source: "ESU-Web Form",
    //   nationality: formData.nationality,
    //   notes: formData.message,
    //   nic_passport: formData.nicPassport,
    //   branch: formData.branch,
    // };

    const form = new FormData();
    form.append("firstname", formData.firstName);
    form.append("lastname", formData.lastName);
    form.append("phone", formData.phone);
    form.append("email", formData.email);
    form.append("course", selectedCourse?.value || "");
    form.append("source", "ESU-Web Form");
    form.append("nationality", selectedNationality?.value || "");
    form.append("notes", formData.message);
    form.append("nic_passport", formData.nicPassport);
    form.append("branch", selectedBranch?.value || "");

    documents.forEach((file) => {
      form.append("documents[]", file);
    });

    // console.log("Form Data:", form);

    try {
      const response = await fetch(
        "https://publicapi.esoft.lk/api/v1/inquiries",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer 1100626|VPJcv2Y6wFiHPw4i60xdc1WQ2NMPUQgerXlYhOyI3a07cd1c`,
          },
          body: form,
        }
      );

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
          source: "ESU-Web Form",
        });
        setDocuments([]);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Submission error:", error);
    }
  };

  // console.log("Payload values:", {
  //   ...formData,
  //   documents,
  // });

  return (
    <form
      className="contact-form"
      encType="multipart/form-data"
      data-aos="fade-up"
    >
      <h2 className="contact-form__title">Get in Touch with us</h2>
      {status === "success" && (
        <p className="inquire__success">
          Thank you! Your inquiry was submitted.
        </p>
      )}
      {status === "error" && (
        <p className="inquire__error">
          Oops! Something went wrong. Please try again. <br />
          Reach us at Hotline: +94 117 572 572 or Email: info@esu.lk
        </p>
      )}
      <div className="contact-form__grid">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>
            Last Name<span>*</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          {/* <label>
            Nationality <span>*</span>
          </label>
          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          >
            <option value="">Select Nationality</option>
            {nationalities.map((item, index) => (
              <option value={item.value} key={index}>
                {item.label}
              </option>
            ))}
          </select> */}
          <CustomSelect
            label="Nationality:"
            placeholder="Select Nationality"
            options={nationalities}
            value={selectedNationality}
            onChange={setSelectedNationality}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+94 77 123 4567"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>NIC/Passport</label>
          <input
            type="text"
            name="nicPassport"
            placeholder="Enter NIC/Passport"
            value={formData.nicPassport}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label>Branch</label>
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="">Select Branch</option>
            <option value="Colombo">ESU Colombo</option>
            <option value="Kandy">ESU Kandy</option>
          </select> */}
          <CustomSelect
            label="Branch:"
            placeholder="Select Branch"
            options={[
              { label: "ESU Colombo", value: "Colombo" },
              { label: "ESU Kandy", value: "Kandy" },
            ]}
            value={selectedBranch}
            onChange={setSelectedBranch}
            required
          />
        </div>
        <div className="form-group">
          {/* <label>Academic Programme</label>
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option value={course?.courses?.courseCode} key={course.slug}>
                {course.title}
              </option>
            ))}
          </select> */}
          <CustomSelect
            label="Course:"
            placeholder="Select Course"
            options={courses.map((course) => ({
              label: course.title,
              value: course.courses?.courseCode || "",
            }))}
            value={selectedCourse}
            onChange={setSelectedCourse}
            required
          />
        </div>
      </div>
      <div className="form-group full-width">
        <label>
          Documents (Can upload Multiple Files)
          <span className="file-note">(jpeg or png)</span>
        </label>
        <label className="upload-box">
          + Add Attachment
          <input
            type="file"
            multiple
            accept="image/jpeg,image/png"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </label>
      </div>
      <div className="form-group full-width">
        <label>
          Message<span>*</span>
        </label>
        <textarea
          rows={4}
          name="message"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className="submit-btn">
        <ButtonClick buttonName={"Send Now"} onClickFunction={handleSubmit} />
      </div>
    </form>
  );
};

export default ContactForm;
