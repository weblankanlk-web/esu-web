"use client";

import { GET_JOB_AREA } from "@/common/queries/query";
import { graphQLClient } from "@/lib/graphql-client";
import React, { useEffect, useState } from "react";

interface JobAreaNode {
  name: string;
  slug: string;
}

interface JobAreaData {
  nodes: JobAreaNode[];
}

interface JobCategoryProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const JobCategory: React.FC<JobCategoryProps> = ({ value, onChange }) => {
  const [jobArea, setJobArea] = useState<JobAreaData | null>(null);

  useEffect(() => {
    const fetchJobCategory = async () => {
      try {
        const data = await graphQLClient.request<{
          jobAreas: JobAreaData;
        }>(GET_JOB_AREA);

        setJobArea(data?.jobAreas || "");
      } catch (error) {
        console.error("Error fetching internship program:", error);
      }
    };

    fetchJobCategory();
  }, []);

  console.log(jobArea?.nodes);

  return (
    <select id="jobCategory" name="jobCategory" value={value} onChange={onChange}>
      <option value="" disabled>
        Job Category
      </option>
      {jobArea?.nodes?.map((text, index) => (
        <option value={text.slug} key={index}>
          {text.name}
        </option>
      ))}

      <option value="marketing">Marketing</option>
    </select>
  );
};

export default JobCategory;
