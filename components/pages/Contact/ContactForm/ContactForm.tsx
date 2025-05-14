import React from "react";
import "./style.scss";

const ContactForm = () => {
  return (
    <>
      <form className="contact-form">
        <h2 className="contact-form__title">Get in Touch with us</h2>
        <div className="contact-form__grid">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Jane Doe" />
          </div>
          <div className="form-group">
            <label>
              Last Name<span>*</span>
            </label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>
              Nationality <span>*</span>
            </label>
            <select>
              <option>Sri Lankan</option>
            </select>
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" />
          </div>
          <div className="form-group">
            <label>NIC/Passport</label>
            <select>
              <option>Select Here</option>
            </select>
          </div>
          <div className="form-group">
            <label>Branch</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Academic Programme</label>
            <select>
              <option>Select Course</option>
            </select>
          </div>
        </div>
        <div className="form-group full-width">
          <label>
            Documents (Can upload Multiple Files){" "}
            <span className="file-note">(jpeg or png)</span>
          </label>
          <div className="upload-box">
            <span>+ Add Attachment</span>
          </div>
        </div>
        <div className="form-group full-width">
          <label>
            Message<span>*</span>
          </label>
          <textarea rows={4} defaultValue={""} />
        </div>
        <div className="submit-btn">
          <button type="submit">Send Now</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
