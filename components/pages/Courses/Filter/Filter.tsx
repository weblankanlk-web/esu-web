import React, { useEffect, useState } from "react";
import FilterPanel from "../FilterPanel/FilterPanel";
import {
  BranchType,
  CourseType,
  DeliveryModeTypes,
  SchoolType,
} from "@/types/data";
import { useTheme } from "@/lib/ThemeContext";
import { graphQLClient } from "@/lib/graphql-client";
import {
  BRANCH_TYPES_QUERY,
  COURSE_TYPES_QUERY,
  DELIVERY_MODE_QUERY,
  SCHOOL_TYPES_QUERY,
} from "@/queries/queries";
import { FaTimes } from "react-icons/fa";

interface FilterProps {
  setSelectedSchools: any;
  setSelectedPrograms: any;
  setSelectedModes: any;
  setSelectedBranches: any;
  setSearch: any;
  search: any;
  selectedSchools: any;
  selectedPrograms: any;
  selectedModes: any;
  selectedBranches: any;
  filteredCourses: any;
}

const Filter: React.FC<FilterProps> = ({
  setSelectedSchools,
  setSelectedPrograms,
  setSelectedModes,
  setSelectedBranches,
  setSearch,
  search,
  selectedSchools,
  selectedPrograms,
  selectedModes,
  selectedBranches,
  filteredCourses,
}) => {
  const [courseTypes, setCourseTypes] = useState<CourseType[]>([]);
  const [branchTypes, setBranchTypes] = useState<BranchType[]>([]);
  const [schoolTypes, setSchoolTypes] = useState<SchoolType[]>([]);
  const [deliveryModeTypes, setDeliveryModeTypes] = useState<
    DeliveryModeTypes[]
  >([]);

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const handleClearFilters = () => {
    {
      setSelectedSchools && setSelectedSchools([]);
    }
    {
      setSelectedPrograms && setSelectedPrograms([]);
    }
    {
      setSelectedModes && setSelectedModes([]);
    }

    {
      setSelectedBranches && setSelectedBranches([]);
    }
    {
      setSearch && setSearch("");
    }
  };

  useEffect(() => {
    async function fetchCourseTypes() {
      try {
        const data = await graphQLClient.request<{
          courseTypes: { nodes: CourseType[] };
        }>(COURSE_TYPES_QUERY);
        setCourseTypes(data.courseTypes.nodes);
      } catch (error) {
        console.error("Error fetching course types:", error);
      }
    }

    async function fetchBranchTypes() {
      try {
        const data = await graphQLClient.request<{
          branchTypes: { nodes: BranchType[] };
        }>(BRANCH_TYPES_QUERY);

        setBranchTypes(data.branchTypes.nodes);
      } catch (error) {
        console.error("Error fetching branch types:", error);
      }
    }

    async function fetchSchoolTypes() {
      try {
        const data = await graphQLClient.request<{
          schoolTypes: { nodes: SchoolType[] };
        }>(SCHOOL_TYPES_QUERY);

        setSchoolTypes(data.schoolTypes.nodes);
      } catch (error) {
        console.error("Error fetching school types:", error);
      }
    }

    async function fetchDeliveryModeTypes() {
      try {
        const data = await graphQLClient.request<{
          deliveryModeTypes: { nodes: DeliveryModeTypes[] };
        }>(DELIVERY_MODE_QUERY);

        setDeliveryModeTypes(data.deliveryModeTypes.nodes);
      } catch (error) {
        console.error("Error fetching delivery mode types:", error);
      }
    }

    fetchCourseTypes();
    fetchBranchTypes();
    fetchSchoolTypes();
    fetchDeliveryModeTypes();
  }, []);

  const { color } = useTheme();

  const toggleMobileFilter = () => {
    setMobileFilterOpen((prev) => !prev);
  };

  return (
    <div className="landing-filter">
      {search ||
      (selectedSchools && selectedSchools.length) ||
      (selectedPrograms && selectedPrograms.length) ||
      (selectedModes && selectedModes.length) ||
      (selectedBranches && selectedBranches.length) ? (
        <div>
          <p id="search-breif">
            <span id="result-count">{filteredCourses.length} </span>
            {search && <span id="result-keyword">"{search}"</span>}
            Search Results for:
            {selectedSchools && selectedSchools.length > 0 && (
              <span>
                {" "}
                | Facultie(s):{" "}
                {selectedSchools.map((slug: string) => {
                  const school = schoolTypes.find((s) => s.slug === slug);
                  return school ? school.name : slug;
                })}
              </span>
            )}
            {selectedPrograms && selectedPrograms.length > 0 && (
              <span>
                {" "}
                | Program(s):{" "}
                {selectedPrograms.map((slug: string) => {
                  const program = courseTypes.find((c) => c.slug === slug);
                  return program ? program.name : slug;
                })}
              </span>
            )}
            {selectedModes && selectedModes.length > 0 && (
              <span>
                {" "}
                | Mode(s):{" "}
                {selectedModes.map((slug: string) => {
                  const modes = deliveryModeTypes.find((c) => c.slug === slug);
                  return modes ? modes.name : slug;
                })}
              </span>
            )}
            {selectedBranches && selectedBranches.length > 0 && (
              <span>
                {" "}
                | Branche(s):{" "}
                {selectedBranches.map((slug: string) => {
                  const branches = branchTypes.find((c) => c.slug === slug);
                  return branches ? branches.name : slug;
                })}
              </span>
            )}
          </p>
        </div>
      ) : null}

      <div className="d-flex filter-clear-wrap justify-content-between align-items-center">
        <h5 className="desktop-div">Filter</h5>
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
        {setSelectedSchools && (
          <FilterPanel
            title="Faculties"
            options={schoolTypes}
            selected={selectedSchools}
            setSelected={setSelectedSchools}
            loading={false}
          />
        )}

        {setSelectedPrograms && (
          <FilterPanel
            title="Programs"
            options={courseTypes}
            selected={selectedPrograms}
            setSelected={setSelectedPrograms}
            loading={false}
          />
        )}
        {setSelectedModes && (
          <FilterPanel
            title="Modes"
            options={deliveryModeTypes}
            selected={selectedModes}
            setSelected={setSelectedModes}
            loading={false}
          />
        )}
        {setSelectedBranches && (
          <FilterPanel
            title="Branches"
            options={branchTypes}
            selected={selectedBranches}
            setSelected={setSelectedBranches}
            loading={false}
          />
        )}
      </div>
    </div>
  );
};

export default Filter;
