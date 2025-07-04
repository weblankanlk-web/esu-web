"use client";

import React, { useEffect } from "react";
import Breadrumb from "@/components/common/Breadcrumb/Breadcrumb";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";
import BannerTitleWithOutImage from "@/components/common/BannerTitleWithOutImage/BannerTitleWithOutImage";

export default function RefundPolicyPage() {
  const { setColor } = useTheme();

  // useEffect(() => {
  //   setColor("rgb(0, 174, 205)");
  // }, [setColor]);

  return (
    <>
      <Breadrumb />
      <section className="simple-padding-bottom impornent-pages">
        <div className="small-middle-wrap">
         
           <BannerTitleWithOutImage title="Refund Policy" subtitle="" />
          <div className="content">
            <div className="elementor-text-editor elementor-clearfix">
              <p>
                ESOFT Uni has adopted the following refund policy with respect to refunds for
                fee-paying students studying in the entire ESOFT Uni Branch Network. ESOFT Uni may refund any fees paid
                to ESOFT Uni only under special circumstances, which fall under the following criteria:
              </p>

              <h3><strong>Category A:</strong></h3>
              <p>Failure by ESOFT Uni to offer the course as advertised. Specifically:</p>
              <ul>
                <li><strong>Discontinued the program</strong> at the Student’s registered branch.</li>
                <li><strong>Not to commence the scheduled batch</strong>.</li>
                <li><strong>Postponed the commencement</strong> of the batch and the Student does not agree to wait.</li>
                <li><strong>Significantly changed the schedule</strong> of the batch and the Student cannot attend.</li>
              </ul>

              <h3>
                <strong>Category B:</strong>  </h3>
                <p>The Student reverses the decision to pursue the course. Full refund claims
                under this clause are acceptable only if such request is made in writing, at least 7 days
                <strong>prior to the scheduled commencement</strong> of the course. Documentary evidence and other
                prescribed documents as specified in this policy will be required to support the claim.</p>
             
<h3><strong>Category C:</strong> </h3>
              <p>
                Medical reasons – The Student is unable to continue the course due to personal
                medical reasons of a serious nature, which manifested AFTER the registration with ESOFT. Relevant
                medical expert should confirm the diagnosis and certify that the student is unable to continue studies,
                by signing the attached document.
              </p>

              <h3><strong>Important Notes:</strong></h3>
              <ol>
                <li>
                  Refund requests under <strong>Category A</strong> must be made prior to commencement or within 7 days of commencement.
                </li>
                <li>
                  Refund requests under <strong>Category A</strong> will be processed in full (100%), provided that the student has not attended any classes.
                </li>
                <li>
                  Reasons such as receiving a scholarship or gaining university admission (state/non-state/foreign)
                  fall under <strong>Category B</strong>.
                </li>
                <li>
                  <strong>Category C</strong> requests require medical documentation and doctor certification (confidentiality maintained).
                </li>
                <li>
                  For <strong>Category C</strong>, refund amount will be determined by the ESOFT Uni Refund Committee.
                </li>
                <li>
                  Refunds will not be granted for migration-related reasons.
                </li>
                <li>
                  Students with conditional offers who fail to meet conditions by the cut-off will have payments transferred to the next intake, not refunded.
                </li>
                <li>
                  Fees paid to external bodies (Pearson, University Partners) and government taxes are non-refundable.
                </li>
                <li>
                  Registration fees are strictly non-refundable.
                </li>
              </ol>

              <p><strong>Revised on 2025.05.20</strong></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
