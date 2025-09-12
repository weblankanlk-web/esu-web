"use client";

import { GET_INTERNSHIP_PROGRAM_SLUG } from "@/common/queries/query";
import Preloader from "@/components/common/Preloader/Preloader";
import InternshipDetail from "@/components/pages/Internship/InternshipDetail/InternshipDetail";
import { graphQLClient } from "@/lib/graphql-client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

// 🔹 Types for GraphQL data
interface InternshipProgram {
  internshipProgramFeilds: {
    companyLogo: {
      node: {
        altText: string;
        sourceUrl: string;
      };
    } | null;
    companyName: string;
    descriptionOfTheJob: string;
    descriptionOfTheJobExcerpt: string;
    jobArea: {
      nodes: {
        id: string;
        name: string;
      }[];
    };
    jobTitle: string;
    jobType: string[];
    location: string[];
  };
}

const Page = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  console.log(slug);

  const [job, setJob] = useState<InternshipProgram | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const data = await graphQLClient.request<{
          internshipProgram: InternshipProgram;
        }>(GET_INTERNSHIP_PROGRAM_SLUG, { slug });

        setJob(data?.internshipProgram || null);
      } catch (error) {
        console.error("Error fetching internship program:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchSingleJob();
    }
  }, [slug]);

  if (loading) return <Preloader />;
  if (!job) return <p>No internship program found.</p>;

  const fields = job.internshipProgramFeilds;

  return (
    <InternshipDetail
      logo={fields.companyLogo?.node.sourceUrl || ""}
      logoAlt={fields.companyLogo?.node.altText || fields.companyName}
      company={fields.companyName}
      title={fields.jobTitle}
      postedAgo={"5 days ago"} // 🔹 You can calculate this dynamically if you add a date field
      jobType={fields.jobType}
      location={fields.location}
      about={fields.descriptionOfTheJob}
    />
  );
};

export default Page;
