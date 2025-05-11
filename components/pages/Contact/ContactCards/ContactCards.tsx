import React from "react";
import "./style.scss";

const ContactCards = () => {
  return (
    <div className="contact-cards">
      <div className="card">
        <h3>
          Certificate and <span className="highlight">Transcript</span>
        </h3>
        <p className="label">Address</p>
        <p>
          Registrar <br />
          ESOFT Metro Campus <br />
          No.03, De Fonseka Place,
          <br />
          Colombo 4, Srilanka
        </p>
        <div className="info">
          <div>
            <p className="label">Email</p>
            <p>verifications@esoft.lk</p>
          </div>
          <div>
            <p className="label">Call Us on</p>
            <p>+94 117 572 572</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>
          Complaints and <span className="highlight">Student Feedback</span>
        </h3>
        <p className="label">Address</p>
        <p>
          SRU Division <br />
          ESOFT Metro Campus <br />
          No.03, De Fonseka Place,
          <br />
          Colombo 4, Srilanka
        </p>
        <div className="info">
          <div>
            <p className="label">Call Us on</p>
            <p>+94 117 677 888</p>
          </div>
          <div>
            <p className="label">Email</p>
            <p>SRU@esoft.lk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
