import React from "react";
import "./style.scss";
import Image from "next/image";

interface ContactHeadOfficeProps {
  address?: string;
  phone?: string;
  email?: string;
  phonenumber?: string;
}

const ContactHeadOffice: React.FC<ContactHeadOfficeProps> = ({
  address,
  phone,
  email,
  phonenumber,
}) => {
  return (
    <section className="headoffice-section position-relative">
      <div className="headoffice-section-wrap">
        <div className="headoffice-title-wrap" data-aos="zoom-in">
          {/* <h2 className="headoffice-title">
            BUILD <br></br>
            <span>
              Your Career with <strong>us</strong>
            </span>
          </h2> */}
          <Image
            src="/images/contact-head-office.png"
            alt="Head Office"
            width={1128}
            height={707}
          />
        </div>
        <div className="headoffice-details" data-aos="fade-up">
          <div className="single-branch">
            <h3 className="branch-title">General Inquiries</h3>
            <div className="branch-details">
              <div className="address">
                <p className="label">Address</p>
                <p>{address}</p>
              </div>
              <div className="email">
                <p className="label">Email</p>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div className="call-us">
                <p className="label">Call Us on</p>
                <a href={`tel:${phonenumber}`} className="">
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeadOffice;
