"use client";

import React, { useEffect, useState } from "react";
import "./style.scss";
import JobSearch from "./JobSearch";
import JobCard from "./JobCard";
import TitleLarge from "@/components/common/TitleLarge/TitleLarge";
import { graphQLClient } from "@/lib/graphql-client";
import { GET_ALL_INTERNSHIP_PROGRAM } from "@/common/queries/query";
import { timeAgo } from "@/lib/jobHelpers";

interface JobArea {
  slug: string;
  id: string;
  name: string;
}

interface InternshipProgramFields {
  companyLogo: {
    node: {
      altText: string;
      sourceUrl: string;
    };
  };
  companyName: string;
  descriptionOfTheJobExcerpt: string | null;
  descriptionOfTheJob: string;
  jobTitle: string;
  jobType: string[];
  location: string[];
  jobArea: {
    nodes: JobArea[];
  };
}

interface JobNode {
  title: string;
  date: string;
  slug: string;
  internshipProgramFeilds: InternshipProgramFields;
}

interface JobOpportunities {
  nodes: JobNode[];
}

const CurrentOpportunities = () => {
  const [jobOpportunities, setJobOpportunities] =
    useState<JobOpportunities | null>(null);

  const [filters, setFilters] = useState({
    keyword: "",
    jobType: "",
    location: "",
    jobCategory: "",
  });

  useEffect(() => {
    const fetchJobOpportunities = async () => {
      try {
        const data = await graphQLClient.request<{
          internshipPrograms: JobOpportunities;
        }>(GET_ALL_INTERNSHIP_PROGRAM);

        setJobOpportunities(data?.internshipPrograms || "");
        // console.log("josb", data);
      } catch (error) {
        console.error("Error fetching internship program:", error);
      }
    };

    fetchJobOpportunities();
  }, []);

  console.log("jobs state", jobOpportunities);

  const filteredJobs = jobOpportunities?.nodes?.filter((job) => {
    const { keyword, jobType, location, jobCategory } = filters;

    const matchesKeyword =
      !keyword ||
      job.internshipProgramFeilds.jobTitle
        .toLowerCase()
        .includes(keyword.toLowerCase());

    const matchesJobType =
      !jobType || job.internshipProgramFeilds.jobType.includes(jobType);

    const matchesLocation =
      !location || job.internshipProgramFeilds.location.includes(location);

    const matchesCategory =
      !jobCategory ||
      job.internshipProgramFeilds.jobArea.nodes.some(
        (area) => area.slug === jobCategory
      );

    return (
      matchesKeyword && matchesJobType && matchesLocation && matchesCategory
    );
  });

  return (
    <section className="currentOpportunities">
      <div className="currentOpportunitiesTitle">
        <TitleLarge title="Current " subtitle="Opportunities" />
      </div>
      <JobSearch filters={filters} setFilters={setFilters} />

      <div className="jobOpportunities">
        {filteredJobs?.map((jobItem, index: number) => (
          <JobCard
            key={index}
            title={jobItem?.internshipProgramFeilds?.jobTitle}
            slug={jobItem?.slug}
            logo={
              jobItem?.internshipProgramFeilds?.companyLogo?.node?.sourceUrl
            }
            logoAlt={
              jobItem?.internshipProgramFeilds?.companyLogo?.node?.sourceUrl
            }
            company={jobItem?.internshipProgramFeilds?.companyName}
            timeAgo={timeAgo(jobItem?.date)}
            jobType={jobItem?.internshipProgramFeilds?.jobType}
            location={jobItem?.internshipProgramFeilds?.location}
            roles={jobItem?.internshipProgramFeilds?.jobArea?.nodes.map(
              (role) => role.name
            )}
            description={jobItem?.internshipProgramFeilds?.descriptionOfTheJob}
            descriptionOfTheJobExcerpt={
              jobItem?.internshipProgramFeilds?.descriptionOfTheJobExcerpt
            }
          />
        ))}
      </div>
    </section>
  );
};

export default CurrentOpportunities;
