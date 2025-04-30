"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="main-wrap">
        <div className="footer-menu-div simple-padding-top simple-padding-bottom">
          <div className="footer-logo-div">
            <Link className="footer-logo" href="/">
              <Image
                src="/images/logo.png"
                width={150}
                height={50}
                alt="Logo"
              />
            </Link>

            <div className="w-100 desktop-div">
              <h6>follow us on</h6>
              <ul className="social-ul">
                {["facebook", "instagram", "linkedin", "tiktok", "youtube"].map(
                  (platform) => (
                    <li key={platform}>
                      <a target="_blank" href={`/${platform}`}>
                        <Image
                          src={`/images/${
                            platform === "linkedin" ? "in" : platform
                          }.png`}
                          width={24}
                          height={24}
                          alt={platform}
                        />
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="best-web-win">
              <Image
                className="w-100 best-web-img"
                src="https://esoft.lk/wp-content/uploads/2024/09/65e00a48.png"
                alt="Best Web"
                width={300}
                height={100}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <div className="menu-col">
            <h6>quick links</h6>
            {/* Replace with dynamic menu */}
            <ul className="navbar-nav navbardropdown" id="quick">
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>

          <div className="menu-col">
            <h6>important links</h6>
            {/* Replace with dynamic menu */}
            <ul className="navbar-nav navbardropdown" id="important">
              <li>
                <Link href="/terms">Terms</Link>
              </li>
            </ul>
          </div>

          <div className="footer-logo-div-con">
            <h6>contact us</h6>
            <ul className="contact-ul">
              <li>
                <Image
                  src="/images/call.png"
                  width={20}
                  height={20}
                  alt="call"
                />
                <a href="tel:+94112233445">+94 112 233 445</a>
              </li>
              <li>
                <Image
                  src="/images/email.png"
                  width={20}
                  height={20}
                  alt="email"
                />
                <a href="mailto:info@esoft.lk">info@esoft.lk</a>
              </li>
              <li>
                <Image
                  src="/images/pin.png"
                  width={20}
                  height={20}
                  alt="address"
                />
                <p>No. 123, Colombo 03, Sri Lanka</p>
              </li>
            </ul>
          </div>

          <div className="w-100 mobile-div footer-logo-div">
            <h6>follow us on</h6>
            <ul className="social-ul">
              {["facebook", "instagram", "linkedin", "tiktok", "youtube"].map(
                (platform) => (
                  <li key={`mob-${platform}`}>
                    <a target="_blank" href={`/${platform}`}>
                      <Image
                        src={`/images/${
                          platform === "linkedin" ? "in" : platform
                        }.png`}
                        width={24}
                        height={24}
                        alt={platform}
                      />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="footer-copy-div d-flex justify-content-center">
          <div className="w-100 text-center">
            <p>
              Copyright @ {currentYear} ESOFT Metro Campus - All Right Reserved.
              Concept, Design & Development by{" "}
              <a target="_blank" href="https://www.weblankan.com/">
                Web Lankan
              </a>{" "}
              in Collaboration with ESOFT Technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="scroltopIcon topScroll">
        <Image
          src="/wp-content/uploads/2024/06/topBtn.png"
          alt="Scroll to top"
          width={40}
          height={40}
        />
      </div>
    </footer>
  );
};

export default Footer;
