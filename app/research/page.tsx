import React from "react";
import './style.scss';

const page = () => {
  return (
    <section className="simple-padding-bottom simple-padding-top dark-lightmode dark-font-change">
      <div className="small-middle-wrap">
        <h2 className="section-heading section-heading--black section-heading--underline section-heading--underline--center">
          <span>Publications</span>
        </h2>
        <div className="landing-wrap-top">
          <div className="landing-results w-100 landing-results-top">
            <div>
              <p id="search-breif">
                <span id="result-count" /> Search Results for :{" "}
                <span id="result-keyword">School of Engineering</span>
              </p>
            </div>
            <div>
              <div className="search-form-ajax">
                <input
                  type="text"
                  name="search-keyword"
                  className="type-check"
                  placeholder="Search Courses"
                  id="search-key"
                />
                <button id="search-form-ajax-submit" type="submit">
                  <img
                    src="https://esoft.lk/wp-content/themes/esoft_metro_campus/assets/img/ser.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-wrap">
          <div className="landing-results">
            <div className="landing-results-inner blog-results-inner">
              <div className="school-box-single blog-box news-box-landing">
                <div className="school-box-inner">
                  <a href="https://esoft.lk/esoft-publications/biirc-2025/">
                    <img
                      className="feature-img-school"
                      src="https://esoft.lk/wp-content/uploads/2025/05/BIIRC-Logo.jpeg"
                      alt=""
                    />
                  </a>
                  <div className="school-box-inner-details">
                    <p className="m-0 aragraph paragraph--black date-p">
                      May 14, 2025
                    </p>
                    <a
                      href="https://esoft.lk/esoft-publications/biirc-2025/"
                      className="school-box-details d-flex"
                    >
                      <span>BIIRC 2025</span>
                    </a>
                    <p className="paragraph paragraph--black">
                      3rd Business and ICT International Research Conference
                      (BIIRC) 2025 8th September 2025 “Sustainable Intelligence:
                      Data and AI for a Resilient Futu[...]
                    </p>
                    <a
                      className="btnn-next"
                      href="https://esoft.lk/esoft-publications/biirc-2025/"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="school-box-single blog-box news-box-landing">
                <div className="school-box-inner">
                  <a href="https://esoft.lk/esoft-publications/research-publication/">
                    <img
                      className="feature-img-school"
                      src="https://esoft.lk/wp-content/uploads/2025/04/ESOFT-Research.png"
                      alt=""
                    />
                  </a>
                  <div className="school-box-inner-details">
                    <p className="m-0 aragraph paragraph--black date-p">
                      April 9, 2025
                    </p>
                    <a
                      href="https://esoft.lk/esoft-publications/research-publication/"
                      className="school-box-details d-flex"
                    >
                      <span>Research Publication</span>
                    </a>
                    <p className="paragraph paragraph--black">
                      Name of the Staff Member Details of the Publication(s)B.
                      Goonathilaka Goonatillaka, B., Kodithuwakku, C.,
                      Sandaruwan, A., Wijayarathne, [...]
                    </p>
                    <a
                      className="btnn-next"
                      href="https://esoft.lk/esoft-publications/research-publication/"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="school-box-single blog-box news-box-landing">
                <div className="school-box-inner">
                  <a href="https://esoft.lk/esoft-publications/biirc-2024/">
                    <img
                      className="feature-img-school"
                      src="https://esoft.lk/wp-content/uploads/2023/11/BIIRC-Logo-01-png.png"
                      alt=""
                    />
                  </a>
                  <div className="school-box-inner-details">
                    <p className="m-0 aragraph paragraph--black date-p">
                      March 4, 2024
                    </p>
                    <a
                      href="https://esoft.lk/esoft-publications/biirc-2024/"
                      className="school-box-details d-flex"
                    >
                      <span>BIIRC 2024</span>
                    </a>
                    <p className="paragraph paragraph--black">
                      2nd Business and ICT International Research Conference
                      (BIIRC) 2024 9th September 2024 “Bridging the Gap:
                      Exploring the intersection of Technology[...]
                    </p>
                    <a
                      className="btnn-next"
                      href="https://esoft.lk/esoft-publications/biirc-2024/"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="school-box-single blog-box news-box-landing">
                <div className="school-box-inner">
                  <a href="https://esoft.lk/esoft-publications/biirc-2023/">
                    <img
                      className="feature-img-school"
                      src="https://esoft.lk/wp-content/uploads/2023/11/BIIRC-Logo-01-png.png"
                      alt=""
                    />
                  </a>
                  <div className="school-box-inner-details">
                    <p className="m-0 aragraph paragraph--black date-p">
                      November 28, 2023
                    </p>
                    <a
                      href="https://esoft.lk/esoft-publications/biirc-2023/"
                      className="school-box-details d-flex"
                    >
                      <span>BIIRC 2023</span>
                    </a>
                    <p className="paragraph paragraph--black">
                      1st Business and ICT International Research Conference
                      (BIIRC) 2023 21st June 2023 “Shifting from Pandemic
                      recovery to resilience” The goal of [...]
                    </p>
                    <a
                      className="btnn-next"
                      href="https://esoft.lk/esoft-publications/biirc-2023/"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="pagination-div" />
            </div>
          </div>
          <div className="landing-filter blog-filter">
            <div className="archive-div">
              <div className="related-coures-div course-title">
                <h5>Featured Publications</h5>
              </div>
              <div className="the-content-div recent-post-lists">
                <ul>
                  <li>
                    <a href="https://esoft.lk/esoft-publications/biirc-2025/">
                      BIIRC 2025
                    </a>
                  </li>
                  <li>
                    <a href="https://esoft.lk/esoft-publications/research-publication/">
                      Research Publication
                    </a>
                  </li>
                  <li>
                    <a href="https://esoft.lk/esoft-publications/biirc-2024/">
                      BIIRC 2024
                    </a>
                  </li>
                  <li>
                    <a href="https://esoft.lk/esoft-publications/biirc-2023/">
                      BIIRC 2023
                    </a>
                  </li>
                </ul>
              </div>
              <div className="related-coures-div course-title">
                <h5>Categories</h5>
              </div>
              <div className="the-content-div recent-post-lists">
                <ul>
                  <li>
                    <a href="https://esoft.lk/publication-type/student-life/">
                      International Research Conference (3)
                    </a>
                  </li>
                </ul>
              </div>
              <div className="related-coures-div course-title">
                <h5>Archives</h5>
              </div>
              <ul className="date-archive">
                <li>
                  <a href="https://esoft.lk/2025/05/?post_type=esoft-publications">
                    May 2025
                  </a>
                  &nbsp;(1)
                </li>
                <li>
                  <a href="https://esoft.lk/2025/04/?post_type=esoft-publications">
                    April 2025
                  </a>
                  &nbsp;(1)
                </li>
                <li>
                  <a href="https://esoft.lk/2024/03/?post_type=esoft-publications">
                    March 2024
                  </a>
                  &nbsp;(1)
                </li>
                <li>
                  <a href="https://esoft.lk/2023/11/?post_type=esoft-publications">
                    November 2023
                  </a>
                  &nbsp;(1)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
