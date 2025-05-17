import React, { useState } from "react";
import "./style.scss";
import Button from "../common/Button/Button";
import Image from "next/image";
import { useTheme } from "@/lib/ThemeContext";

const InquireForm = () => {
  const { color } = useTheme();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    nationality: "",
    nicPassport: "",
    branch: "",
    message: "",
    course: "", // ✅ new
    source: "", // ✅ new
  });

  const [status, setStatus] = useState("");

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
      nationality: formData.nationality,
      nic_passport: formData.nicPassport,
      branch: formData.branch,
      message: formData.message,
      course: formData.course,
      source: formData.source,
    };

    try {
      const response = await fetch(
        "https://publicapi.esoft.lk/api/v1/inquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 1100626|VPJcv2Y6wFiHPw4i60xdc1WQ2NMPUQgerXlYhOyI3a07cd1c`,
          },
          body: JSON.stringify(payload),
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
    <div className="newsletter">
      <div className="newsletter__image-section">
        <Image src="/images/home-main.png" width={900} height={850} alt="" />
      </div>

      <div className="newsletter__form-section">
        <h2 className="newsletter__title">Inquire</h2>
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__row">
            <div className="newsletter__field">
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
            <div className="newsletter__field">
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

          <div className="newsletter__field">
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

          <div className="newsletter__field">
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

          <div className="newsletter__row">
            <div className="newsletter__field">
              <label>Nationality:</label>
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              >
                <option value="">Select Nationality</option>
                <option value="Sri Lankan">Sri Lankan</option>
                <option value="Indian">Indian</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="newsletter__field">
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
          </div>

          <div className="newsletter__field">
            <label>Branch:</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            >
              <option value="">Select Branch</option>
              <option value="Colombo">Colombo</option>
              <option value="Kandy">Kandy</option>
            </select>
          </div>

          <div className="newsletter__field">
            <label>Course:</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter course name"
            />
          </div>

          <div className="newsletter__field">
            <label>How did you hear about us?</label>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
            >
              <option value="">Select a source</option>
              <option value="social">Social Media</option>
              <option value="friend">Friend</option>
              <option value="website">Website</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="newsletter__field">
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

          {/* <Button buttonUrl={"#"} buttonName={"Submit"} type="submit" /> */}
        </form>

        {status === "success" && (
          <p className="newsletter__success">
            Thank you! Your inquiry was submitted.
          </p>
        )}
        {status === "error" && (
          <p className="newsletter__error">
            Oops! Something went wrong. Please try again. <br />
            Reach us at Hotline: +94 117 572 572 or Email: info@esu.lk
          </p>
        )}
      </div>
    </div>
  );
};

export default InquireForm;
