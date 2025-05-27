"use client";

import React, { useEffect } from "react";
import Breadrumb from "@/components/common/Breadcrumb/Breadcrumb";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";

export default function RefundPolicyPage() {
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
            Refund <span>Policy</span>
          </h2>
          <div className="content">
            <p>
              ESU Uni has adopted the following refund
              policy with respect to refunds for fee-paying students studying
              in the entire ESU Uni Branch Network. ESU Uni may refund any fees
              paid to ESU Uni only under special circumstances, which fall under
              the following criteria:
            </p>

            <p><strong>Category A:</strong> Failure by ESU Uni to offer the course as advertised. Specifically:</p>
            <ul>
              <li><u><strong>Discontinued the program</strong></u> at the Student’s registered branch.</li>
              <li><u><strong>Not commencing the scheduled batch</strong></u>.</li>
              <li><u><strong>Postponed the commencement</strong></u> of the batch and the Student does not agree to wait.</li>
              <li><u><strong>Significantly changed the schedule</strong></u> of the batch, and the Student cannot attend.</li>
            </ul>

            <p><strong>Category B:</strong> Student reverses decision. Full refund applicable only if written request is made at least 7 days <u><strong>before course start</strong></u>, with required documents.</p>

            <p><strong>Category C:</strong> Serious medical reason post-registration. Must be verified by a certified medical expert.</p>

            <p><strong>Important Notes:</strong></p>
            <ol>
              <li>Category A refunds must be requested before or within 7 days of commencement.</li>
              <li>Category A refunds are 100% if no classes were attended.</li>
              <li>Scholarships or alternative university admissions fall under Category B.</li>
              <li>Category C requires official medical proof.</li>
              <li>Category C refund amount is decided by ESU Uni’s Refund Committee.</li>
              <li>Migrating is not an accepted reason for refund.</li>
              <li>Students under conditional offer letters must submit evidence by the cut-off or get transferred to the next intake.</li>
              <li>External awarding body and government fees are non-refundable.</li>
              <li>Registration fees are non-refundable in all cases.</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
