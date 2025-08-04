import Link from "next/link";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";

interface MobileNavProps {
  isMobileMenuOpen: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ isMobileMenuOpen }) => {
  return (
    <nav
      id="navbar_main_nav"
      className={`navmobile-offcanvas navbar navbar-expand-lg navbar-dark  ${
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
                href="/academics"
                onClick={() => (window.location.href = "/academics")}
              >
                Academics
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
                href="/news"
                onClick={() => (window.location.href = "/news")}
              >
                News & Events
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                onClick={() => (window.location.href = "/blogs")}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/research"
                onClick={() => (window.location.href = "/research")}
              >
                Research
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
            <li className="">
              <Link
                href="https://store.esu.lk/"
                target="_blank"
                onClick={() => (window.location.href = "/contact-us")}
                className="d-flex align-items-center justify-content-center gap-2"
              >
                <FaShoppingBag size={30} />
                Merch Store
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default MobileNav;
