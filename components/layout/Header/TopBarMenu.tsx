import Link from "next/link";
import React from "react";

const TopBarMenu = () => {
  return (
    <div className="top-bar">
      <div className="max-wrap">
        <nav className="navbar navbar-expand-lg nav-menu">
          {/* Replace with dynamic menu data */}
          <ul className="navbar-nav navbardropdown" id="top-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/academics">Academics</Link>
            </li>
            <li>
              <Link href="/news">news & events</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/research">Research</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopBarMenu;
