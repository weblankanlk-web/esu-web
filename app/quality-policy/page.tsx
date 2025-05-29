"use client";

import React, { useEffect } from "react";
import Breadrumb from "@/components/common/Breadcrumb/Breadcrumb";
import "./style.scss";
import { useTheme } from "@/lib/ThemeContext";

export default function QualityPolicyPage() {
  const { setColor } = useTheme();

  // useEffect(() => {
  //   setColor("rgb(0, 174, 205)");
  // }, [setColor]);

  return (
    <>
      <Breadrumb />
      <section className="simple-padding-bottom">
        <div className="small-middle-wrap">
          <h2 className="pb-small section-heading section-heading--black" data-aos="flip-down">
            Quality <span>Policy</span>
          </h2>

          <div className="content the-content-div simple-padding-top">
            <h3><strong>Centre for Quality Assurance (CQA)</strong></h3>
            <p>
              Welcome to the Centre for Quality Assurance (CQA) of Esoft Uni
              The CQA is responsible for enhancing the quality of education in all study programs of Esoft Uni.
              It was established under the instruction of the Non-State Higher Education Division of the Ministry of Education to control and manage QA functions.
              The CQA operates under the direction of the Head of CQA and implements best practices in quality assurance at Esoft Uni.
            </p>

            <p>
              The CQA has a management committee to execute QA activities, make strategic decisions, and review progress.
              Members include the Chief Executive Officer, Head of CQA (Chairperson), Deans, Heads of Departments, Registrar, Chief Financial Controller, Head of HR, Librarian, and other invitees.
            </p>

            <h3><strong>CQA Goals:</strong></h3>
            <ul>
              <li><strong>Creating the best graduate profile accepted by the industry:</strong> Embed graduate profiles and employability in curricula to help students compete in the marketplace.</li>
              <li><strong>Excellence in teaching, learning, and assessment:</strong> Leverage strengths and experience to improve teaching and assessment quality.</li>
              <li><strong>Establishing the best quality control system:</strong> Monitor and improve teaching, learning, and student satisfaction through counseling.</li>
              <li><strong>Excellence in academic delivery facilitation:</strong> Improve support functions and resources through high standards and technology.</li>
              <li><strong>Develop and retain competent human capital:</strong> Empower HR to support excellence in education.</li>
            </ul>

            <h3><strong>Functions of CQA:</strong></h3>
            <ul>
              <li>Promote quality enhancement within Esoft Uni.</li>
              <li>Facilitate external reviews.</li>
              <li>Support institutional and program review preparations.</li>
              <li>Collect student feedback and peer reviews.</li>
              <li>Submit improvement recommendations based on feedback and statistics.</li>
              <li>Ensure compliance with UGC guidelines and institutional requirements.</li>
              <li>Support the achievement of CQA goals.</li>
              <li>Manage quality audits and develop regulations approved by the academic syndicate.</li>
              <li>Create operational guidelines aligned with UGC standards and Esoft Uni's governance.</li>
              <li>Develop a 5-year strategic plan and annual work plan for CQA with appropriate approvals.</li>
              <li>Prepare annual QA activity budgets with approvals.</li>
              <li>Maintain and update CQA information on the Esoft Uni website.</li>
              <li>Report QA activity progress regularly.</li>
              <li>Communicate QA updates to the Esoft Uni community.</li>
              <li>Conduct QA awareness programs.</li>
              <li>Initiate and support Self-Assessment Reports (SAR) and program reviews.</li>
              <li>Train staff on SAR preparation and best practices.</li>
              <li>Build international QA relationships and support new degree program proposals aligned with Sri Lanka Qualifications Framework.</li>
              <li>Report QA progress to the UGC Standing Committee.</li>
              <li>Submit annual reports to the UGC Quality Assurance Council.</li>
              <li>Convene and facilitate CQA meetings.</li>
              <li>Assist schools in preparing QA manuals.</li>
              <li>Make internal/external review and student survey results available to stakeholders.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
