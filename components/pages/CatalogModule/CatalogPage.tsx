'use client';

import React, { useEffect, useState } from "react";
import CatalogSearchBar from "./CatalogSearchBar";
import CatalogFilter from "./CatalogFilter";
import CatalogList from "./CatalogList";
import CatalogPagination from "./CatalogPagination";
import { CatalogItem } from "./types";

interface Props {
  heading: string;
  items: CatalogItem[];
  filters: {
    schoolTypes: { id: string; name: string; slug: string }[];
    courseTypes: { id: string; name: string; slug: string }[];
    branchTypes: { id: string; name: string; slug: string }[];
    deliveryModeTypes: { id: string; name: string; slug: string }[];
  };
  renderItem: (item: CatalogItem) => React.ReactNode;
}

const CatalogPage: React.FC<Props> = ({ heading, items, filters, renderItem }) => {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const [selectedSchools, setSelectedSchools] = useState<string[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    let result = [...items];

    if (search) {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedSchools.length > 0) {
      result = result.filter((item) =>
        item.schoolTypes?.nodes?.some((s) => selectedSchools.includes(s.slug))
      );
    }

    if (selectedPrograms.length > 0) {
      result = result.filter((item) =>
        item.courseTypes?.nodes?.some((c) => selectedPrograms.includes(c.slug))
      );
    }

    if (selectedBranches.length > 0) {
      result = result.filter((item) =>
        item.branchTypes?.nodes?.some((b) => selectedBranches.includes(b.slug))
      );
    }

    if (selectedModes.length > 0) {
      result = result.filter((item) =>
        item.deliveryModeTypes?.nodes?.some((d) => selectedModes.includes(d.slug))
      );
    }

    setFilteredItems(result);
    setCurrentPage(1);
  }, [search, selectedSchools, selectedPrograms, selectedBranches, selectedModes, items]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <section className="simple-padding-bottom">
      <div className="small-middle-wrap">
        <h2 className="section-heading section-heading--black">
          our <span>{heading}</span>
        </h2>

        <CatalogSearchBar search={search} setSearch={setSearch} />

        <CatalogFilter
          filters={filters}
          selectedSchools={selectedSchools}
          setSelectedSchools={setSelectedSchools}
          selectedPrograms={selectedPrograms}
          setSelectedPrograms={setSelectedPrograms}
          selectedBranches={selectedBranches}
          setSelectedBranches={setSelectedBranches}
          selectedModes={selectedModes}
          setSelectedModes={setSelectedModes}
        />

        <CatalogList
          items={filteredItems}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          renderItem={renderItem}
        />

        <CatalogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default CatalogPage;

