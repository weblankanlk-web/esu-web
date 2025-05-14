import React from "react";
import "./style.scss";
import InnerBanner from "@/components/layout/InnerBanner/InnerBanner";
import ContactCards from "@/components/pages/Contact/ContactCards/ContactCards";
import ContactForm from "@/components/pages/Contact/ContactForm/ContactForm";

const page = () => {
  return (
    <>
      <InnerBanner
        innerPageTitle={`Contact <span>Us</span>`}
        innerPageDescription="Connect with Excellence! Reach out to ESOFT Uni today – where all your questions find answers, and your future begins. Your life-changing journey towards knowledge, innovation and success starts with a simple touch. Contact us now and let's shape your future together!"
        innerBgDesk="/images/contact-us-banner.png"
        innerBgMobi="/images/contact-us-banner.png"
      />
      <ContactCards />
      <ContactForm />
    </>
  );
};

export default page;
