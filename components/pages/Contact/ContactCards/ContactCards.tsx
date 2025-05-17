import React from "react";
import "./style.scss";

interface ContactCardsProps {
  about?: any; // Replace 'any' with a more specific type if available
}

const ContactCards = ({ about }: ContactCardsProps) => {
  return (
    <>
      <section className="branches-section">
        <div className="branches-section-wrap">
          <div className="single-branch">
            <h3 className="branch-title">Colombo</h3>
            <div className="branch-details">
              <div className="address">
                <p className="label">Address</p>
                <p>
                  Block E<br></br>
                  No 03,<br></br>
                  De Fonseka Place, Colombo 4,<br></br> Sri Lanka.
                </p>
              </div>
              <div className="email">
                <p className="label">Email</p>
                <a href="mailto:info@esu.lk">info@esu.lk</a>
              </div>
              <div className="call-us">
                <p className="label">Call Us on</p>
                <a href="tel:+94 117 572 572" className="">
                  +94 117 572 572
                </a>
              </div>
            </div>
          </div>
          {!about && (
            <>
              <div className="single-branch">
                <h3 className="branch-title">Colombo</h3>
                <div className="branch-details">
                  <div className="address">
                    <p className="label">Address</p>
                    <p>
                      Block A,
                      <br />
                      No 235,
                      <br />
                      Galle Road, <br />
                      Colombo 04,<br></br> Srilanka
                    </p>
                  </div>
                  <div className="email">
                    <p className="label">Email</p>
                    <a href="mailto:info@esu.lk">info@esu.lk</a>
                  </div>
                  <div className="call-us">
                    <p className="label">Call Us on</p>
                    <a href="tel:+94 117 572 572" className="">
                      +94 117 572 572
                    </a>
                  </div>
                </div>
              </div>
              <div className="single-branch">
                <h3 className="branch-title">Colombo</h3>
                <div className="branch-details">
                  <div className="address">
                    <p className="label">Address</p>
                    <p>
                      Block B,
                      <br />
                      No 233,
                      <br />
                      Galle Road <br />
                      Colombo 04,<br></br> Srilanka
                    </p>
                  </div>
                  <div className="email">
                    <p className="label">Email</p>
                    <a href="mailto:info@esu.lk">info@esu.lk</a>
                  </div>
                  <div className="call-us">
                    <p className="label">Call Us on</p>
                    <a href="tel:+94 117 572 572" className="">
                      +94 117 572 572
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="single-branch">
            <h3 className="branch-title">Kandy</h3>
            <div className="branch-details">
              <div className="address">
                <p className="label">Address</p>
                <p>
                  No 479,
                  <br />
                  William Gopallawa mawatha, <br />
                  Kandy,<br></br> Srilanka
                </p>
              </div>
              <div className="email">
                <p className="label">Email</p>
                <a href="mailto:info@esu.lk">info@esu.lk</a>
              </div>
              <div className="call-us">
                <p className="label">Call Us on</p>
                <a href="tel:+94 117 572 572" className="">
                  +94 117 572 572
                </a>
              </div>
            </div>
          </div>
          {/* <div className="single-branch">
      <h3 className="branch-title">Kandy</h3>
      <div className="branch-details">
        <div className="address">
          <p className="label">Address</p>
           <p>
          No 479,
          <br />
          William Gopallawa mawatha, <br />
          Kandy,<br></br> Srilanka
        </p>
        </div>
        <div className="email">
          <p className="label">Email</p>
          <a href="mailto:info@esu.lk">info@esu.lk</a>
        </div>
        <div className="call-us">
          <p className="label">Call Us on</p>
          <a href="tel:+94 117 572 572" className="">+94 117 572 572</a>
        </div>
      </div>
    </div> */}
        </div>
      </section>
    </>
  );
};

export default ContactCards;
