import Link from "next/link";
import React from "react";

interface MobileNavProps {
  isMobileMenuOpen: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ isMobileMenuOpen }) => {
  return (
    <nav
      id="navbar_main_nav"
      className={`navmobile-offcanvas navbar navbar-expand-lg navbar-dark bg-primary ${
        isMobileMenuOpen ? "show-mobile-menu" : "hide-mobile-menu"
      }`}
    >
      <div className="main-wrap">
        <nav className="navbar navbar-expand-lg nav-menu">
          <ul className="navbar-nav navbardropdown" id="mobile">
            <li>
              <Link href="/" onClick={() => (window.location.href = "/")}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                onClick={() => (window.location.href = "/about-us")}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                onClick={() => (window.location.href = "/courses")}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/faculties"
                onClick={() => (window.location.href = "/faculties")}
              >
                Faculties
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                onClick={() => (window.location.href = "/contact-us")}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default MobileNav;
