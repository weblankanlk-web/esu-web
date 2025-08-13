import Link from "next/link";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const TopBarMenu = () => {
  return (
    <div className="top-bar">
      <div className="max-wrap">
        <nav className="navbar navbar-expand-lg nav-menu">
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
              <Link href="/centre-for-qa">Centre for QA</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <nav className="navbar navbar-expand-lg nav-menu">
          <ul className="navbar-nav navbardropdown" id="top-menu">
            <li>
              <Link
                href="https://store.esu.lk/"
                target="_blank"
                className="d-flex align-items-center justify-content-center gap-2"
              >
                <FaShoppingBag size={12} />
                merch store
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopBarMenu;
