import { getJobDetails, getSimilarJobs } from "@/lib/jsearch";

import JobDetailCard from "@/components/JobDetailCard";
import SmallCard from "@/components/SmallCard";
import chevron from "@/public/iconography/CheveronLeft.svg";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const JobDetails = async ({ params }: { params: { id: string } }) => {
  const currentDate = moment().format("dddd,  D MMM YYYY");
  const jobDetailsData = getJobDetails(params.id);

  const [jobDetails] = await Promise.all([jobDetailsData]);

  const similarJobDetails = await getSimilarJobs(
    jobDetails.data[0].employer_name,
  );
  console.log("Check here", similarJobDetails.data[0]);

  // Round down salary to nearest 100
  function roundDown(number: number) {
    return Math.floor(number / 100) * 100;
  }

  // calc experience in years
  function expInYears(number: number) {
    return Math.floor(number / 12);
  }

  return (
    <>
      <main className="mx-6 w-auto sm:mx-20">
        {/* Heading */}
        <section className="mb-[30px] ml-[-.25] mt-10 sm:mt-[3rem]">
          <h1 className="text-[1.375rem] font-bold not-italic leading-8 dark:text-Natural4 sm:text-[2rem] sm:leading-10">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Let's find your dream job
          </h1>
          {/* Date */}
          <h2 className=" flex font-medium text-Natural6 sm:text-lg sm:font-semibold sm:leading-6 xl:pt-[.88rem]">
            {currentDate}
          </h2>
        </section>

        {/* Search  */}
        <div className="w-full rounded-[10px] bg-white px-2.5 py-4 shadow dark:bg-DarkBG2">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-between">
            <div className="border-b px-5 py-3 sm:border-none">Job title</div>
            <div className="border-b px-5 py-3 sm:border-none">Location</div>
            <div className="border-b px-5 py-3 sm:border-none">Job Type</div>
            <button className="w-full justify-end rounded-[10px] bg-Primary px-[19px] py-3 text-center text-[15px] font-semibold leading-normal text-white sm:w-fit">
              Find Jobs
            </button>
          </div>
        </div>

        {/* Job Details */}
        <div className="flex flex-row flex-wrap gap-10">
          <section className="mt-8 w-full lg:w-[calc(66%-20px)]">
            <span className="flex items-center sm:mb-[23px] ">
              <Link
                href="/"
                className="hidden items-center gap-2 rounded-[0.625rem] bg-Natural4 px-[.62rem] py-[.44rem] text-xs font-medium leading-[18px] text-Natural7 dark:border-DarkBG3 dark:bg-DarkBG2 sm:flex"
              >
                <div className="">
                  <Image src={chevron} alt="back logo" width={18} height={18} />
                </div>
                Back
              </Link>
            </span>
            <div className="max-w-[860px] rounded-[10px] bg-white dark:bg-DarkBG2">
              <JobDetailCard
                aboutTheCompany={"anything"}
                followers={10}
                jobRequiredSkills={
                  jobDetails.data[0].job_highlights.Responsibilities
                }
                postDate={3846732}
                workLevel="tuesday"
                employerLogo={jobDetails.data[0].employer_logo}
                employerName={jobDetails.data[0].employer_name}
                estimatedSalaries={roundDown(
                  jobDetails.data[0].estimated_salaries[0]?.median_salary,
                )}
                jobApplyLink={jobDetails.data[0].job_apply_link}
                jobCity={jobDetails.data[0].job_city}
                jobDescription={jobDetails.data[0].job_description}
                jobEmploymentType={jobDetails.data[0].job_employment_type}
                jobRequiredExperience={expInYears(
                  jobDetails.data[0].job_required_experience
                    .required_experience_in_months,
                )}
                jobState={jobDetails.data[0].job_state}
                jobTitle={jobDetails.data[0].job_title}
                qualifications={
                  jobDetails.data[0].job_highlights.Qualifications
                }
              />
            </div>
          </section>

          {/* Similar Jobs */}
          <section className="order-last mt-[2.19rem] max-w-[379px] lg:w-[calc(33%-20px)] xl:order-none ">
            <span className="flex justify-between">
              <h3 className="text-[18px] font-bold leading-8 dark:text-White">
                Similar Jobs
              </h3>
            </span>
            {/* Similar Job Cards */}
            <div className="mt-[2.06rem] flex-row gap-3">
              <SmallCard
                daysLeft={277777}
                icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0
             "
                jobCity="Los Angelas"
                jobLocation="downtown"
                jobState="California"
                jobTitle="Head Banger"
                salary={70}
                salaryPeriod="year"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default JobDetails;
