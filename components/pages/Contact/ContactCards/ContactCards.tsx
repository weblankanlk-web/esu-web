import React from "react";
import "./style.scss";

const ContactCards = () => {
  return (
    <div className="contact-cards">
      <div className="card">
        <h3>
          <span className="highlight">Colombo</span>
        </h3>
        <p className="label">Address</p>
        <p></p>
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
          <span className="highlight">Kandy</span>
        </h3>
        <p className="label">Address</p>
        <p>
          479,
          <br />
          William Gopallawa mawatha, <br />
          Kandy, Srilanka
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

      <div className="card">
        <h3>
          <span className="highlight">Colombo</span>
        </h3>
        <p className="label">Address</p>
        <p>
          Block A
          <br />
          235, Galle Road <br />
          Colombo 04, Srilanka
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

      <div className="card">
        <h3>
          <span className="highlight">Colombo</span>
        </h3>
        <p className="label">Address</p>
        <p>
          Block B
          <br />
          233, Galle Road <br />
          Colombo 04, Srilanka
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
