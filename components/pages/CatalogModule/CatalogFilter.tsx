"use client";

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useTheme } from "@/lib/ThemeContext";
import { FilterPanel } from "../Courses";

interface FilterOption {
  id: string;
  name: string;
  slug: string;
}

interface Props {
  filters: {
    schoolTypes: FilterOption[];
    courseTypes: FilterOption[];
    branchTypes: FilterOption[];
    deliveryModeTypes: FilterOption[];
  };
  selectedSchools: string[];
  setSelectedSchools: React.Dispatch<React.SetStateAction<string[]>>;

  selectedPrograms: string[];
  setSelectedPrograms: React.Dispatch<React.SetStateAction<string[]>>;

  selectedBranches: string[];
  setSelectedBranches: React.Dispatch<React.SetStateAction<string[]>>;

  selectedModes: string[];
  setSelectedModes: React.Dispatch<React.SetStateAction<string[]>>;
}

const CatalogFilter: React.FC<Props> = ({
  filters,
  selectedSchools,
  setSelectedSchools,
  selectedPrograms,
  setSelectedPrograms,
  selectedBranches,
  setSelectedBranches,
  selectedModes,
  setSelectedModes,
}) => {
  const { color } = useTheme();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const toggleMobileFilter = () => {
    setMobileFilterOpen((prev) => !prev);
  };

  const handleClearFilters = () => {
    setSelectedSchools([]);
    setSelectedPrograms([]);
    setSelectedBranches([]);
    setSelectedModes([]);
  };

  return (
    <div className="landing-filter">
      {(selectedSchools.length ||
        selectedPrograms.length ||
        selectedBranches.length ||
        selectedModes.length) > 0 && (
        <p id="search-breif">
          <span id="result-count">Filtered Results </span>
          {selectedSchools.length > 0 && (
            <span> | Faculties: {selectedSchools.join(", ")}</span>
          )}
          {selectedPrograms.length > 0 && (
            <span> | Programs: {selectedPrograms.join(", ")}</span>
          )}
          {selectedBranches.length > 0 && (
            <span> | Branches: {selectedBranches.join(", ")}</span>
          )}
          {selectedModes.length > 0 && (
            <span> | Modes: {selectedModes.join(", ")}</span>
          )}
        </p>
      )}

      <div className="d-flex filter-clear-wrap justify-content-between align-items-center">
        <h5 className="desktop-div">Filter By</h5>
        <button
          id="filter-toggle"
          className="mobile-div"
          style={{ backgroundColor: color }}
          onClick={toggleMobileFilter}
        >
          Select Filter
        </button>
        <button
          className="clear-filter-btn"
          id="clear-filters-btn"
          onClick={handleClearFilters}
        >
          Clear
        </button>
      </div>

      <ul id="selected-checks"></ul>
      <div
        className={`att-box-wrapper ${
          mobileFilterOpen ? "show-mobile-filter" : "hide-mobile-filter"
        }`}
      >
        <button className="mobile-filter-btn" onClick={toggleMobileFilter}>
          <FaTimes />
        </button>

        <FilterPanel
          title="Faculties"
          options={filters.schoolTypes}
          selected={selectedSchools}
          setSelected={setSelectedSchools}
          loading={false}
        />
        <FilterPanel
          title="Programs"
          options={filters.courseTypes}
          selected={selectedPrograms}
          setSelected={setSelectedPrograms}
          loading={false}
        />
        <FilterPanel
          title="Branches"
          options={filters.branchTypes}
          selected={selectedBranches}
          setSelected={setSelectedBranches}
          loading={false}
        />
        <FilterPanel
          title="Modes"
          options={filters.deliveryModeTypes}
          selected={selectedModes}
          setSelected={setSelectedModes}
          loading={false}
        />
      </div>
    </div>
  );
};

export default CatalogFilter;
