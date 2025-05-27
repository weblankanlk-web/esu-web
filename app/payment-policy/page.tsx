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
            <div className="the-content-div simple-padding-top">
            <div className="elementor-widget-container">
              <div id="duo-icon-179787295" className="media">
                <div className="media-body">
                  <p className="">
                    We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. ESOFT Uni may change this privacy policy from time to time at ESOFT Uni’s sole discretion.
                  </p>
                </div>
              </div>
            </div>

            <div className="elementor-widget-container">
              <div id="duo-icon-47768043" className="slide-in-container w-100">
                <div className="py-2">
                  <div className="pix-feature-list text-20 font-weight-bold secondary-font py-2 d-flex align-items-center">
                    <ul>
                      <li><strong>All payments are NON-refundable.</strong></li>
                      <li><strong>Once a payment is done for a course; that amount cannot be transferred for another course; as we commit resources for reserving a course place for each registration.</strong></li>
                      <li><strong>Those who pay in installments should make their payments monthly on or before the due date.</strong></li>
                      <li><strong>ESOFT Uni has the right to charge an interest on delayed payments.</strong></li>
                      <li><strong>There may be a slight delay in registering a payment made via online payments, it is recommended to make the payment well in advance of the due date.</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
               
          </div>
        </div>
      </section>
    </>
  );
}
