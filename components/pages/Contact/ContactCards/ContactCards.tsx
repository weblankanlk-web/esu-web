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
        <p>Head Office (Block E)<br></br>
No.03,<br></br>
De Fonseka Place, Colombo 4,<br></br> Sri Lanka.</p>
        <div className="info">
          <div>
            <p className="label">Email</p>
            <p>info@esu.lk</p>
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
          No 479,
          <br />
          William Gopallawa mawatha, <br />
          Kandy,<br></br> Srilanka
        </p>
        <div className="info">
          <div>
            <p className="label">Call Us on</p>
            <p>+94 117 572 572</p>
          </div>
          <div>
            <p className="label">Email</p>
            <p>info@esu.lk</p>
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
          Colombo 04,<br></br> Srilanka
        </p>
        <div className="info">
          <div>
            <p className="label">Call Us on</p>
            <p>+94 117 572 572</p>
          </div>
          <div>
            <p className="label">Email</p>
            <p>info@esu.lk</p>
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
          Colombo 04,<br></br> Srilanka
        </p>
        <div className="info">
          <div>
            <p className="label">Call Us on</p>
            <p>+94 117 572 572</p>
          </div>
          <div>
            <p className="label">Email</p>
            <p>info@esu.lk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
