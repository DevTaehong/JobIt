// "use client";

// import React, { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// import JobSearchCard from "./JobSearchCard";
// import { extractRequiredSkills } from "@/lib/jobRequiredSkills";
// import {
//   getInitialJobsOnJobSearchPage,
//   findJobsOnJobSearchPage,
//   getRecommendedJobs,
// } from "@/lib/jsearch";
// import { Skeleton } from "./ui/skeleton";

// const FetchJobSearchCard = ({
//   searchParams,
//   locationCookie,
// }: {
//   searchParams: SearchParams;
//   locationCookie: string | undefined;
// }) => {
//   const { query, searchQuery, employmentType, pageNumber, recommended } =
//     searchParams;
//   const [jobs, setJobs] = useState<Job | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setIsLoading(true);
//     let jobPromise: Promise<Job> | null = null;

//     if (searchQuery === undefined) {
//       jobPromise = getInitialJobsOnJobSearchPage(query, locationCookie);
//     } else if (recommended) {
//       jobPromise = getRecommendedJobs(locationCookie);
//     } else {
//       jobPromise = findJobsOnJobSearchPage(
//         query,
//         searchQuery,
//         employmentType,
//         pageNumber,
//       );
//     }

//     jobPromise?.then((data) => setJobs(data));
//     setIsLoading(false);
//   }, [searchQuery, query, recommended, employmentType, pageNumber]);

//   if (isLoading) {
//     return (
//       // TODO: Add a skeleton for the job search card
//       <div className="mt-6 flex flex-col gap-8">
//         {[...Array(10 ?? 1)].map((_, i) => (
//           <Skeleton key={uuidv4()} className="h-[17.75rem] w-full" />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col gap-[1.38rem]">
//       {jobs?.data
//         .slice(0, 10)
//         .map((job) => (
//           <JobSearchCard
//             key={job.job_id}
//             employerName={job.employer_name}
//             jobTitle={job.job_title}
//             jobDescription={job.job_description}
//             salary={job.job_min_salary}
//             salaryPeriod={job.job_salary_period}
//             companyLogo={job.employer_logo}
//             jobSkills={extractRequiredSkills(job.job_description).slice(0, 3)}
//             jobState={job.job_state}
//             jobCity={job.job_city}
//             postDate={job.job_posted_at_timestamp}
//           />
//         ))}
//     </div>
//   );
// };

// export default FetchJobSearchCard;
