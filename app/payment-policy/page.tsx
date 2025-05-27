"use client";

import React, { useEffect } from "react";
import Breadrumb from "@/components/common/Breadcrumb/Breadcrumb";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";

export default function PaymentPolicyPage() {
  const { setColor } = useTheme();

  useEffect(() => {
    setColor("rgb(0, 174, 205)");
  }, [setColor]);

  return (
    <>
      <Breadrumb />
      <section className="simple-padding-bottom dark-lightmode dark-font-change">
        <div className="small-middle-wrap">
          <h2
            className="pb-small section-heading section-heading--black"
            data-aos="flip-down"
          >
            Payment <span>Policy</span>
          </h2>
          <div className="content">
            <p>
              We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. ESU Uni may change this privacy policy from time to time at ESU Uni's sole discretion.
            </p>
         
            <ul>
              <li>All payments are NON-refundable.</li>
              <li>Once a payment is done for a course; that amount cannot be transferred for another course; as we commit resources for reserving a course place for each registration.</li>
              <li>Those who pay in installments should make their payments monthly on or before the due date.</li>
              <li>ESU Uni has the right to charge an interest on delayed payments.</li>
              <li>There may be a slight delay in registering a payment made via online payments, it is recommended to make the payment well in advance of the due date.</li>
            </ul>                          
          </div>
        </div>
      </section>
    </>
  );
}
