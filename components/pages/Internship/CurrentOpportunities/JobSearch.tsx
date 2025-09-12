"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";
import Location from "../Location";
import JobType from "../JobType";
import JobCategory from "../JobCategory";
// import "./style.scss";

interface JobSearchProps {
  filters: {
    keyword: string;
    jobType: string;
    location: string;
    jobCategory: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<any>>;
}

const JobSearch: React.FC<JobSearchProps> = ({ filters, setFilters }) => {
  // 🔹 Default filters
  const defaultFilters = {
    keyword: "",
    jobType: "",
    location: "",
    jobCategory: "",
  };

  // 🔹 Check if filters are active
  const hasFilters =
    filters.keyword ||
    filters.jobType ||
    filters.location ||
    filters.jobCategory;

  const handleClear = () => setFilters(defaultFilters);

  return (
    <div className="jobSearch">
      <div className="jobSearch__top">
        <div className="jobSearch__input">
          <FiSearch className="icon" />
          <input
            type="text"
            placeholder="Job Title or keyword"
            value={filters.keyword}
            onChange={(e) =>
              setFilters((prev: any) => ({ ...prev, keyword: e.target.value }))
            }
          />
        </div>
        <div className="jobSearch__filters">
          <Location
            value={filters.location}
            onChange={(e) =>
              setFilters((prev: any) => ({ ...prev, location: e.target.value }))
            }
          />

          <JobType
            value={filters.jobType}
            onChange={(e) =>
              setFilters((prev: any) => ({ ...prev, jobType: e.target.value }))
            }
          />

          <JobCategory
            value={filters.jobCategory}
            onChange={(e) =>
              setFilters((prev: any) => ({
                ...prev,
                jobCategory: e.target.value,
              }))
            }
          />
        </div>
        {hasFilters ? (
          <button className="jobSearch__btn" onClick={handleClear}>
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default JobSearch;
