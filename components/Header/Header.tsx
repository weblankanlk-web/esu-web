"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isCoursePage =
    pathname.includes("/esoft-courses") || pathname.includes("/esoft-transfer");

  return (
    <>
      <header id="header" className="header">
        <div className="top-bar">
          <div className="max-wrap">
            <nav className="navbar navbar-expand-lg nav-menu">
              {/* Replace with dynamic menu data */}
              <ul className="navbar-nav navbardropdown" id="top-menu">
                <li>
                  <Link href="/about">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/about">students life</Link>
                </li>
                <li>
                  <Link href="/about">careers</Link>
                </li>
                <li>
                  <Link href="/about">news & events</Link>
                </li>
                <li>
                  <Link href="/about">blogs</Link>
                </li>
                <li>
                  <Link href="/about">Research</Link>
                </li>
                <li>
                  <Link href="/about">Scholarship</Link>
                </li>
                <li>
                  <Link href="/about">CSR</Link>
                </li>
                <li>
                  <Link href="/about">contact us</Link>
                </li>
              </ul>
            </nav>
            <ul className="top-bar-menu">
              <li>
                <a target="_blank" href="/payments">
                  <Image
                    src="/images/payment.png"
                    width={20}
                    height={20}
                    alt="Payments"
                    style={{ objectFit: "contain" }}
                  />
                  <span>Payments</span>
                </a>
              </li>
              <li>
                <a target="_blank" href="/students">
                  <Image
                    src="/images/user.png"
                    width={20}
                    height={20}
                    alt="Students"
                    style={{ objectFit: "contain" }}
                  />
                  <span>Students</span>
                </a>
              </li>
              <li>
                <Link href="/alumni">
                  <Image
                    src="/images/alumni.png"
                    width={20}
                    height={20}
                    alt="Alumni"
                    style={{ objectFit: "contain" }}
                  />
                  <span>Alumni</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="main-wrap d-flex justify-content-between main-menu-wrap">
            <div className="d-flex main-menu-inner-wrap">
              <div>
                <Link href="/">
                  <Image
                    src="/images/logo/esu-logo.png"
                    width={150}
                    height={50}
                    alt="Logo"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Link>
              </div>
              <div className="middle-menu">
                <nav className="navbar navbar-expand-lg nav-menu">
                  <ul className="navbar-nav navbardropdown" id="primary">
                    <li>
                      <Link href="/courses">Courses</Link>
                    </li>
                    <li>
                      <Link href="/courses">Schools</Link>
                    </li>
                    <li>
                      <Link href="/courses">Transfer Programmes</Link>
                    </li>
                    <li>
                      <Link href="/courses">Branch Network</Link>
                    </li>
                    <li>
                      <Link href="/courses">International Placements</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="mobile-div hamburger-wrap">
              <button
                className="navnavbar-toggler hamburger classic navoffcanvas-header d-flex flex-wrap"
                type="button"
              >
                <div className="hamburger" id="hamburger-1">
                  <span className="linee line-one"></span>
                  <span className="linee line-two"></span>
                  <span className="linee line-three"></span>
                </div>
                <span className="ham-title">MENU</span>
              </button>
            </div>
            <div className="apply-now-wrap">
              <a
                className="next-btn next-btn--blue"
                target="_blank"
                href={
                  isCoursePage
                    ? `/register?id=${"COURSE_ID_DYNAMIC"}`
                    : "/register"
                }
              >
                <span>Register Online</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav
        id="navbar_main_nav"
        className="navmobile-offcanvas navbar navbar-expand-lg navbar-dark bg-primary"
      >
        <div className="main-wrap">
          <nav className="navbar navbar-expand-lg nav-menu">
            <ul className="navbar-nav navbardropdown" id="mobile">
              <li>
                <Link href="/home">Home</Link>
              </li>
              {/* Add mobile-specific menu items */}
            </ul>
          </nav>
          <ul className="top-bar-menu">
            <li>
              <a target="_blank" href="/payments">
                <Image
                  src="/assets/img/payment.png"
                  width={20}
                  height={20}
                  alt=""
                />
                <span>Payments</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="/students">
                <Image
                  src="/assets/img/user.png"
                  width={20}
                  height={20}
                  alt=""
                />
                <span>Students</span>
              </a>
            </li>
            <li>
              <Link href="/alumni">
                <Image
                  src="/assets/img/alumni.png"
                  width={20}
                  height={20}
                  alt=""
                />
                <span>Alumni</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
