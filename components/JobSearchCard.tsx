import Link from "next/link";
import moment from "moment";
import { FiExternalLink } from "react-icons/fi";

import { truncateString, findKeywords, formatNumber } from "@/lib/utils";
import CompanyLogo from "./CompanyLogo";

const JobSearchCard = async ({ job }: { job: JobResult }) => {
  const {
    job_description: jobDescription,
    job_min_salary: jobMinSalary,
    job_max_salary: jobMaxSalary,
    employer_website: employerWebsite,
    job_id: jobId,
  } = job;

  return (
    <article className="flex flex-col gap-5 rounded-[10px] bg-White p-5 dark:bg-DarkBG2">
      <div className="flex justify-between">
        <Link href={`/job-details/${jobId}`}>
          <div className="flex gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-[10px] bg-Natural3 dark:bg-DarkBG3">
              <div className="relative h-12 w-12 overflow-hidden rounded-[10px]">
                <CompanyLogo
                  companyLogo={job.employer_logo}
                  companyName={job.employer_name}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <h3 className="semibold-16 text-Black hover:underline dark:text-White">
                {job.job_title}
              </h3>
              <div className="medium-13 flex flex-wrap gap-[5px] text-Natural6">
                <Link
                  href={`/company-details/${job.employer_name}`}
                  className="line-clamp-1 hover:underline"
                >
                  {job.employer_name}
                </Link>
                <div className="hidden sm:block">•</div>
                <span>
                  {`${
                    job.job_city ? "･" + job.job_city + "," : job.job_country
                  } ${job.job_state ?? ""}`}
                </span>
                •
                <span className="capitalize">
                  {moment(
                    new Date(job.job_posted_at_timestamp * 1000),
                  ).fromNow()}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="regular-13 sm:regular-14 text-Natural7 dark:text-Natural5">
        {jobDescription && truncateString(jobDescription, 350)}
      </div>

      <div className="flex flex-wrap gap-[10px] ">
        {jobDescription &&
          findKeywords(jobDescription).map(
            (word: string) =>
              word && (
                <div
                  key={word}
                  className="rounded-[5px] bg-Natural4 px-[10px] py-[5px] text-[13px] font-medium leading-[18px] text-Natural6 dark:bg-DarkBG3"
                >
                  {word}
                </div>
              ),
          )}
      </div>

      <div className="flex flex-col items-start gap-5 gap-y-[1.875rem] md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2 text-lg font-medium leading-6 text-Natural7 md:gap-[35px]">
          {jobMinSalary || jobMaxSalary ? (
            <div>
              <span className="text-Black dark:text-White">
                {jobMinSalary && `$${formatNumber(jobMinSalary)}`}
                {jobMinSalary && jobMaxSalary && "-"}
                {jobMaxSalary && `$${formatNumber(jobMaxSalary)}`}
              </span>
              /month
            </div>
          ) : (
            <span className="regular-14 text-Natural7 dark:text-Natural5">
              No salary range provided
            </span>
          )}
        </div>
        <div className="flex w-full flex-wrap gap-2 md:w-auto">
          {employerWebsite && (
            <Link
              href={employerWebsite}
              target="_blank"
              className="hover-effect flex w-full min-w-[125px] items-center justify-center gap-1.5 rounded-[10px] bg-Natural4 px-[14px] py-3 text-sm font-semibold text-Natural7 dark:bg-DarkBG3 md:w-auto"
            >
              Company Website
              <FiExternalLink />
            </Link>
          )}

          {jobId && (
            <Link
              href={`/job-details/${jobId}`}
              className="hover-effect flex w-full min-w-[180px] justify-center rounded-[10px] bg-Primary px-[14px] py-3 text-sm font-semibold text-White md:w-auto"
            >
              View details
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default JobSearchCard;
