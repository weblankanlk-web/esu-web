"use client";

import React, { useEffect } from "react";
import Breadrumb from "@/components/common/Breadcrumb/Breadcrumb";
import BannerTitleWithOutImage from "@/components/common/BannerTitleWithOutImage/BannerTitleWithOutImage";
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
      <BannerTitleWithOutImage title="Quality Policy" subtitle="" />

      <section className="simple-padding-bottom impornent-pages quality-policy-page">
        <div className="small-middle-wrap">
          <div className="content simple-padding-top">
            <h2>Introduction</h2>
            <p>
              Quality Assurance (QA) is a continuous process. The campus's
              academic and administrative personnel are collectively accountable
              for the quality of education and award standards. Consequently,
              everyone is required to increase the quality of the activities in
              which they participate. The implementation of the specified
              internal processes would help to improve the quality of the
              campus, resulting in a quality culture.
            </p>
            <p>
              The ESOFT Metro Campus's Centre for Quality Assurance (CQA) is
              responsible for providing direction and monitoring of quality
              assurance processes in compliance with the requirements set out in
              Non-State Higher Education Circular No. 04/2023 released on
              November 15, 2023.
            </p>
            <h2>Aim and Objectives</h2>
            <p>
              The aim of the CQA is to guarantee that the ESOFT Metro Campus
              maintains and improves its academic standards and operational
              effectiveness.
            </p>
            <p>Key objectives are to</p>
            <ul>
              <li>
                Develop and implement strategies to improve teaching, learning,
                and administrative processes.
              </li>
              <li>
                Ensure adherence to accreditation standards and regulatory
                requirements, both nationally and internationally.
              </li>
              <li>
                Assess academic programs, faculty performance, and student
                outcomes to identify areas for improvement.
              </li>
              <li>
                Establish systems for collecting feedback from students,
                faculty, and stakeholders to inform decision-making and enhance
                quality.
              </li>
              <li>
                Provide training for faculty staff to promote a culture of
                continuous improvement.
              </li>
              <li>
                Maintain comprehensive records of quality assurance activities
                and produce reports for stakeholders.
              </li>
              <li>
                Encourage research initiatives that contribute to academic
                excellence and societal impact.
              </li>
            </ul>
            <h2>
              Management Committee of Centre for Quality Assurance (MCCQA)
            </h2>
            <ul>
              <li>Prof. Veranja Karunaratne – Vice-Chancellor </li>
              <li>Dr. Dilina Herath – Pro Vice-Chancellor, Colombo </li>
              <li>Dr. Hazel Messenger - Pro Vice-Chancellor, Kandy </li>
              <li>Prof. Anoma Aberatne- Dean, Faculty of Business and Law </li>
              <li>Dr. Thilak Chaminda – Dean, Faculty of Computing </li>
              <li>
                Dr Udaya Wijenayake - Consultant Dean, Faculty of Post Graduate
                Studies and Research
              </li>
              <li>
                Ms. Hiranthi Rathnayake - HOD-Undergraduate Programmes, School
                of Business{" "}
              </li>
              <li>Ms. Yasitha De Silva - HOD, Fashion Design </li>
              <li>Ms. Lahiruni Ekanayake – Lecturer, Law </li>
              <li>Ms. Kizra Ameen - Lecturer, Psychology </li>
              <li>Ms. K. J. S. Devendra - Registrar </li>
              <li>Ms. Shanika Kalpani – Assistant Librarian </li>
              <li>
                Ms. Samadi Bandara-Faculty Academic Manager, Faculty of
                Computing{" "}
              </li>
              <li>Mr. Sinan Muhamed-Chief Financial Officer </li>
              <li>Ms. S. D. N. Ama Panchali - Assistant Manager, SRU </li>
              <li>Mr. E. M. B. S Perera – Chief People Officer</li>
              <li>Dr. Samanthi Priyasadini - Manager QA </li>
            </ul>
            <div className="table-container">
              <table>
                <tbody>
                  <tr>
                    <th colSpan={2}>
                      Government Recognition and Accreditation
                    </th>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      <img
                        src="https://cms.esu.lk/wp-content/uploads/2025/08/Ministry-of-Education.png"
                        alt="Gov Logo"
                        className="logo"
                      />
                    </td>
                    <td>
                      Degree Awarding Institute of Ministry of Education since
                      2019.
                      <a href="#" className="link">
                        (Link to NSHE Division Web)
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>International Recognition</th>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      <img
                        src="https://cms.esu.lk/wp-content/uploads/2025/08/Association-of-Commonwealth.png"
                        alt="ACU Logo"
                        className="logo"
                      />
                    </td>
                    <td>
                      Member University - Association of Commonwealth
                      Universities.
                      <a href="#" className="link">
                        (Link to ACU Website)
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      <img
                        src="https://cms.esu.lk/wp-content/uploads/2025/08/Asia-Pacific-Quality-Network.png"
                        alt="APQN Logo"
                        className="logo"
                      />
                    </td>
                    <td>
                      Institutional Member of Asia Pacific Quality Network
                      (APQN) - 2024.
                      <a href="#" className="link">
                        (Link to APQN Website)
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Ms. Kavindi Kaushalya - Executive CQA (Convener/ Secretary to the
              CQA)
            </p>
            <h2>National and Recognition</h2>
            <h2>Functions of the CQA</h2>
            <ul>
              <li>
                Conduct of all activities pertaining to Internal Quality
                Assurance of the campus on daily basis.
              </li>
              <li>
                Support the departments, faculties and campus in preparation for
                external quality assurance, assessment (EQA), and accreditation
                requirements.{" "}
              </li>
              <li>
                Offer guidance and assistance to programme offering entities in
                defining programme objectives and outcomes, graduate profiles,
                and curricula which are in accordance with national reference
                points such as the Sri Lanka Qualification Framework (SLQF), and
                Subject Benchmark Statements (SBS).
              </li>
              <li>
                Support establishment and effective functioning of Entity (i.e,
                Faculty, Colleges, Schools, Departments) Quality Assurance Cells
                (QACs){" "}
              </li>
              <li>
                Promote and coordinate QA activities within the campus through
                conduct of workshops, seminars, development of manuals and other
                appropriate capacity building activities.{" "}
              </li>
              <li>
                Liaise with the Non state Higher Education Division (NSHED) of
                the Ministry of Education (MoE) and other external quality
                assurance agencies as well as relevant international agencies
                (i.e APQN and INQAAHE).{" "}
              </li>
              <li>
                Develop, review, and revise by-laws and standard operational
                procedures necessary for governance and management of the CQA.
              </li>
            </ul>
            <h2>Major Activities of CQA</h2>
            <ul>
              <li>Implementation of Student Feedback Process</li>
              <li>Implementation of Peer Observation Process</li>
              <li>Conducting Awareness Programs and Workshops</li>
              <li>Prepare for the External QA</li>
              <li>Conduct Internal Audits</li>
              <li>
                Dean’s List – Recognition of Exceptional Academic Achievement
              </li>
            </ul>
            <h2>CQA Publications</h2>
            <ul>
              <li>
                <a
                  href="https://drive.google.com/file/d/1L44ERYIb8lni2xB667GniNMqywRL3Y1t/view"
                  target="_blank"
                >
                  CQA By-Laws
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1tuVmfdnFf9OpHgeE5ddJkA18MZPZGW4r/view"
                  target="_blank"
                >
                  The Procedure of Obtaining Student Feedback
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1efaGo93NJYo0pry2hyTq0BzqOjKgXGes/view"
                  target="_blank"
                >
                  Peer Observation Procedure
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1nMLKkOgQ4bttm-SboHfQjVg5RVzbfMCC/view"
                  target="_blank"
                >
                  Procedures for Conducting Examinations
                </a>
              </li>
            </ul>
            <h2>Details of Conducted Workshops</h2>
            <table className="conducted-workshops">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Workshop Theme</th>
                  <th>Date</th>
                  <th>Resource Person</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Awareness Session on Preparing Self Evaluation Report for
                    the Institutional Review
                  </td>
                  <td>24-Apr-24</td>
                  <td>Dr. Samanthi Priyasadini</td>
                  <td>
                    Only for the Kandy, Kurunegala, Jaffna, Gampaha, Galle,
                    Matara
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Internal Quality Assurance Process</td>
                  <td>17-Jul-24</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sri Lanka Qualification Framework (SLQF)</td>
                  <td>26-Aug-24</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    Importance of Peer Observation in Teaching Learning Process
                  </td>
                  <td>9-Oct-24</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Procedures for Conducting Examination</td>
                  <td>29 &amp; 30 Oct 2024</td>
                  <td>-</td>
                  <td>Only for the staff at Colombo Branch</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    Enhancing Research and Publication Competencies of Academic
                    Staff
                  </td>
                  <td>23-Jan-25</td>
                  <td>
                    Prof. Jayantha N. Dewasiri, Sabaragamuwa University of SL
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Workshop on Strengthening QA Cells</td>
                  <td>6-Feb-25</td>
                  <td>Dr. Samanthi Priyasadini – Manager, QA</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    Enhancing Library Services: Leveraging Technology & Best
                    Practices for an Efficient Learning Hub
                  </td>
                  <td>27-Mar-25</td>
                  <td>
                    Dr. Namali Suraweera, Victoria University of Wellington
                  </td>
                  <td>Library Staff</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Workshop on Strengthening QA Cells</td>
                  <td>4-Apr-25</td>
                  <td>Dr. Samanthi Priyasadini – Manager, QA</td>
                  <td>Academic Staff and Students of Jaffna Branch</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Workshop on Research Initiation - QA Cell - Negombo</td>
                  <td>30-Apr-25</td>
                  <td>Dr. Samanthi Priyasadini – Manager, QA</td>
                  <td>Academic Staff of Negombo Branch</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>
                    Awareness Session on Preparation for the PR – Kurunegala
                    Branch
                  </td>
                  <td>8-Jul-25</td>
                  <td>Dr. Samanthi Priyasadini – Manager, QA</td>
                  <td>Staff of Kurunegala Branch</td>
                </tr>
              </tbody>
            </table>
            <h2>CQA Staff</h2>
            <div className="contact-table">
              {/* Dr. Samanthi Priyasadini */}
              <div className="contact-row">
                <div className="contact-img">
                  <img
                    src="https://cms.esu.lk/wp-content/uploads/2025/08/Dr.-Samanthi-Priyasadini-Manager-QA.png"
                    alt="Dr. Samanthi Priyasadini"
                  />
                </div>
                <div className="contact-details">
                  <h2>
                    Dr. Samanthi Priyasadini - Manager, QA
                    <br />
                    <small>Senior Lecturer in IT</small>
                  </h2>
                  <p>
                    DBA (Lincoln University College, Malaysia), MSc in IT
                    (Cardiff Metropolitan University, UK),
                    <br />
                    BIT (UCSC), Dip. in QA in Higher Education (UNESCO), MCS(SL)
                  </p>
                  <p>Mobile: 0742885814</p>
                  <p>
                    Email:
                    <a href="mailto:samanthi.priyasadini@esoft.lk">
                      samanthi.priyasadini@esoft.lk
                    </a>
                    ,<a href="mailto:cqa@esoft.lk">cqa@esoft.lk</a>
                  </p>
                </div>
              </div>
              {/* Ms. Kavindi Kaushalya */}
              <div className="contact-row">
                <div className="contact-img">
                  <img
                    src="https://cms.esu.lk/wp-content/uploads/2025/08/Ms.-Kavindi-Kaushallya-–-Executive-QA.png"
                    alt="Ms. Kavindi Kaushalya"
                  />
                </div>
                <div className="contact-details">
                  <h2>Ms. Kavindi Kaushalya – Executive, QA</h2>
                  <p>BIT (UoM), SCCL (NAITA), CIE (UOM), CIIT (IBM)</p>
                  <p>Mobile: 779518732</p>
                  <p>
                    Email:
                    <a href="mailto:kavindi.kaushalya@esoft.lk">
                      kavindi.kaushalya@esoft.lk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
