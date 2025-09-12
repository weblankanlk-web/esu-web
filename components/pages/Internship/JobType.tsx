"use client";

import React from "react";

interface JobTypeProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const JobType: React.FC<JobTypeProps> = ({ value, onChange }) => {
  return (
    <select id="jobType" name="jobType" value={value} onChange={onChange}>
      <option value="" disabled>Job Type</option>
      <option value="full_time">Full Time</option>
      <option value="part_time">Part Time</option>
      <option value="internship">Internship</option>
      <option value="contract">Contract</option>
      <option value="casual">Casual</option>
      <option value="general">General</option>
    </select>
  );
};

export default JobType;
