"use client";

import React, { useEffect, useState } from "react";
import JobSearchCard from "./JobSearchCard";
import { extractRequiredSkills } from "@/lib/jobRequiredSkills";
import { Skeleton } from "./ui/skeleton";

const FetchJobSearchCard = ({ jobPromise }: { jobPromise: Promise<Job> }) => {
  const [jobs, setJobs] = useState<JobResult[]>([]);
  const numberOfRemoteJobs = jobs.reduce((acc, job) => {
    if (job.job_is_remote) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  console.log(numberOfRemoteJobs);

  useEffect(() => {
    async function getJobs() {
      const job = await jobPromise;
      setJobs(job.data);
    }
    getJobs();
  });

  if (jobs.length === 0) {
    return (
      // TODO: Add a skeleton for the job search card
      <div className="flex items-center space-x-4">
        <Skeleton className="rounded-full" />
        <div className="space-y-2">
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[1.38rem]">
      {jobs.slice(0, 5).map((job, i) => (
        <JobSearchCard
          key={i}
          employerName={job.employer_name}
          jobTitle={job.job_title}
          jobDescription={job.job_description}
          salary={job.job_min_salary}
          salaryPeriod={job.job_salary_period}
          companyLogo={job.employer_logo}
          jobSkills={extractRequiredSkills(job.job_description)}
          jobState={job.job_state}
          jobCity={job.job_city}
          postDate={job.job_posted_at_timestamp}
        />
      ))}
    </div>
  );
};

export default FetchJobSearchCard;
