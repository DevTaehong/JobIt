import Image from "next/image";
import moment from "moment";
import JobCard from "@/components/JobCard";
import InlineJobCard from "@/components/InlineJobCard";
import { getLatestJobs, getRecommendedJobs } from "@/lib/jsearch";
import { extractRequiredSkills } from "@/lib/jobRequiredSkills";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const currentDate = moment().format("dddd,  D MMM YYYY");
  const latestJobData: Promise<Job> = getLatestJobs();
  const RecommendedJobData: Promise<Job> = getRecommendedJobs();

  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#parallel-data-fetching
  const [latestJobs] = await Promise.all([latestJobData]);
  const [RecommendedJobs] = await Promise.all([RecommendedJobData]);
  console.log(currentDate);
  return (
    <div className="mx-6 mb-[2.5rem] mt-[1.75rem] 2xl:mx-auto 2xl:max-w-[90rem]">
      {/* Heading */}
      <h1 className="text-[1.25rem] font-bold not-italic leading-8 dark:text-Natural4 sm:text-[2rem] sm:leading-10">
        Welcome to the Job Search Platform for Developers
      </h1>
      {/* Date */}
      <h2 className="mb-[3.06rem] mt-[0.31rem] text-Natural6 sm:flex sm:text-xl sm:font-medium sm:leading-8 xl:mt-[.88rem]">
        {currentDate}
      </h2>

      <div className="mb-[2.5rem] flex flex-col xl:flex-row xl:gap-10">
        <div className="flex flex-col">
          {/* Latest Job Posts and See All button */}
          <div className="mb-[1.87rem] flex items-center justify-between">
            <h3 className="text-[1.25rem] font-semibold leading-8 dark:text-White md:font-bold">
              Latest Job Posts
            </h3>
            <button className="flex items-center justify-center gap-2 rounded-[0.625rem] border px-[.62rem] py-[0.44rem] text-[1rem] font-medium leading-6 text-Natural7 dark:border-Natural8 xl:items-center">
              See All
              <div className="sm:hidden">
                <Image
                  src="/iconography/chevron.svg"
                  alt="chevron"
                  width={16}
                  height={16}
                />
              </div>
            </button>
          </div>
          {/* Latest Job Posts */}
          <main className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10">
            {latestJobs.data.slice(0, 4).map((latestJob, i) => (
              <JobCard
                key={i}
                jobId={latestJob.job_id}
                jobTitle={latestJob?.job_title}
                // NOTE Source: https://stackoverflow.com/questions/5454235/shorten-string-without-cutting-words-in-javascript
                jobDescription={latestJob?.job_description}
                maxSalary={latestJob?.job_max_salary}
                minSalary={latestJob?.job_min_salary}
                salaryPeriod={latestJob?.job_salary_period}
                companyLogo={latestJob?.employer_logo}
                jobSkills={extractRequiredSkills(
                  latestJob?.job_description,
                ).slice(0, 4)}
                employmentType={latestJob?.job_employment_type}
                expirationDate={latestJob?.job_offer_expiration_timestamp}
                educationObj={latestJob?.job_required_education}
              />
            ))}
          </main>

          {/* Featured Companies */}
          <section className="mt-10">
            <h3 className="mb-[1.87rem] text-[1.25rem] font-semibold leading-8 dark:text-White md:font-bold">
              Featured Companies
            </h3>
            <div className="flex flex-col gap-[2.25rem] lg:flex-row">
              {Array.from({ length: 3 }, (_, i) => (
                <Card key={i} className="shadow-none dark:bg-DarkBG2">
                  <CardHeader>
                    <CardTitle>Apple Inc.</CardTitle>
                    <CardDescription>
                      Deploy your new project in one-click.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>New york, USA</CardContent>
                  <CardFooter className="flex justify-between">
                    <Button>See All</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Recommended For You */}
        <aside className="mt-[3.12rem] lg:mt-0">
          {/* Recommended For You and See All button */}
          <div className="mb-[1.87rem] flex justify-between gap-[0.81rem]">
            <h3 className="text-[1.25rem] font-semibold leading-8 dark:text-White md:font-bold">
              Recommended For You
            </h3>
            <button className="flex items-center justify-center gap-2 rounded-[0.625rem] border px-[0.625rem] py-[0.4375rem] dark:border-Natural8 xl:items-center">
              <span className="text-base font-medium text-Natural7">
                See All
              </span>
              <div className="sm:hidden">
                <Image
                  src="/iconography/chevron.svg"
                  alt="chevron"
                  width={16}
                  height={16}
                />
              </div>
            </button>
          </div>

          {/* Recommended Inline Job Cards */}
          <div className="flex flex-col gap-3 rounded-[0.625rem] bg-White px-5 py-[1.25rem] dark:bg-DarkBG2">
            {RecommendedJobs.data.slice(0, 10).map((RecommendedJob, i) => (
              <div key={i}>
                <InlineJobCard
                  employerName={RecommendedJob?.employer_name}
                  jobTitle={RecommendedJob.job_title}
                  maxSalary={RecommendedJob?.job_max_salary}
                  minSalary={RecommendedJob?.job_min_salary}
                  salaryPeriod={RecommendedJob?.job_salary_period}
                  companyLogo={RecommendedJob?.employer_logo}
                  jobState={RecommendedJob?.job_state}
                  jobCity={RecommendedJob?.job_city}
                  employmentType={RecommendedJob?.job_employment_type}
                />
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
