"use client";
import React from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (val: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: Props) {
  const handlePageChange = (val: number) => {
    setCurrentPage(val);
    const section = document.querySelector(".faculty-member-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="pagination-div">
      {currentPage > 1 && (
        <button
          className="page-numbers"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt;&lt;
        </button>
      )}

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`page-numbers ${currentPage === i + 1 ? "current" : ""}`}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          className="page-numbers next"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          &gt;&gt;
        </button>
      )}
    </div>
  );
}
