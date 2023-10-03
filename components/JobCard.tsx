import React from "react";
import icMore from "@/public/iconography/ic_More.svg";
import briefcase from "@/public/iconography/outline-briefcase.svg";
import clock from "@/public/iconography/outline-clock.svg";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import eduIcon from "@/public/iconography/eduIcon.svg";
import { FormatSalaryRange } from "./FormatSalaryRage";

type EducationType = {
  postgraduate_degree: boolean;
  professional_certification: boolean;
  high_school: boolean;
  associates_degree: boolean;
  bachelors_degree: boolean;
  degree_mentioned: boolean;
  degree_preferred: boolean;
  professional_certification_mentioned: boolean;
};

type Props = {
  jobId: string;
  jobTitle: string;
  jobDescription: string;
  minSalary: number | null;
  maxSalary: number | null;
  salaryPeriod: string | null;
  companyLogo: string;
  jobSkills: string[] | null;
  employmentType: string;
  expirationDate: number;
  educationObj: EducationType;
};

const JobCard = (props: Props) => {
  /* {Calculate Days left for job posting} */
  // function calculateDaysLeft(expTime: number): number {
  //   const expDate = new Date(expTime * 1000); // Convert to milliseconds
  //   const currentDate = new Date();

  //   const timeDiff = expDate.getTime() - currentDate.getTime();
  //   const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  //   return daysLeft;
  // }
  console.log(props?.expirationDate);

  function calculateDaysLeft(expirationTimestamp: number): string {
    const currentTimestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
    const secondsInADay = 86400; // 24 * 60 * 60 seconds

    const timeDifference = expirationTimestamp - currentTimestamp;
    const daysLeft = Math.ceil(timeDifference / secondsInADay);

    if (daysLeft < 0) {
      return "Expired"; // Job offer has already expired
    }

    return `${daysLeft} day${daysLeft !== 1 ? "s" : ""} left`;
  }

  const educationRequired = (educationObj: EducationType) => {
    for (const value of Object.values(educationObj)) {
      if (value) return true;
    }
    return false;
  };

  const daysLeft = calculateDaysLeft(props?.expirationDate);
  const educationNeeded = educationRequired(props?.educationObj);

  return (
    <div className="flex flex-col gap-7 rounded-[10px] bg-white p-5 dark:bg-DarkBG2">
      <div className="flex justify-between">
        <div className="flex rounded">
          <div className="flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-[0.45rem] border border-neutral-50 bg-Natural3 p-2 dark:border-none dark:bg-DarkBG3 md:h-16 md:w-16 md:rounded-[0.625rem]">
            <img
              className="object-contain"
              width={34.5}
              height={34.5}
              src={
                props?.companyLogo
                  ? props?.companyLogo
                  : "/images/companyPlaceholderLogo.png"
              }
              alt="Company Logo"
            />
          </div>
          <div className="flex flex-col justify-between pl-[18px] sm:pl-5">
            <h1 className="line-clamp-1 font-semibold text-gray-900 dark:text-white sm:text-lg">
              {props?.jobTitle}
            </h1>

            {/* Conditionally render skills */}
            <div className="flex gap-1">
              {props?.jobSkills &&
                props?.jobSkills.map((skill, index) => (
                  <p
                    key={index}
                    className="flex justify-start rounded bg-Natural3 px-[6px] py-[3px] text-[13px] text-Natural6 dark:bg-DarkBG3 sm:px-[10px] sm:py-[5px] sm:text-sm"
                  >
                    {skill}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div>
          <Image width={16} height={16} src={icMore} alt="More Icon" />
        </div>
      </div>

      <p className="line-clamp-6 grow text-[15px] text-Natural7 dark:text-Natural6 sm:text-base">
        {props?.jobDescription}
      </p>

      <div className="flex justify-between gap-[5px] sm:gap-3">
        <div className="flex items-center justify-center rounded bg-Natural3 px-1 py-[6px] text-[13px] text-Natural6 dark:bg-DarkBG3 sm:px-[10px] sm:text-sm">
          <Image
            className="mr-2"
            width={18}
            height={18}
            src={briefcase}
            alt="briefcase icon"
          />
          <p>{props?.employmentType?.toLowerCase()}</p>
        </div>
        <div className="flex items-center justify-center rounded bg-Natural3 px-1 py-[6px] text-[13px] text-Natural6 dark:bg-DarkBG3 sm:px-[10px] sm:text-sm">
          <Image
            className="mr-2 opacity-50"
            width={18}
            height={18}
            src={eduIcon}
            alt="eduIcon"
          />
          <p className="line-clamp-1">
            {educationNeeded ? "Required" : "Not Required"}
          </p>
        </div>
        <div className="flex items-center justify-center  rounded bg-Natural3 px-1 py-[6px] text-[13px] text-Natural6 dark:bg-DarkBG3 sm:px-[10px] sm:text-sm">
          <Image
            className="mr-2"
            width={18}
            height={18}
            src={clock}
            alt="clock_icon"
          />
          <p className="line-clamp-1">{`${daysLeft}days left`}</p>
        </div>
      </div>

      {/* Conditionally render salaries */}
      <div className="flex items-center justify-between">
        <div>
          {props.minSalary && props.maxSalary && props.salaryPeriod ? (
            FormatSalaryRange(
              props.minSalary,
              props.maxSalary,
              props.salaryPeriod,
            )
          ) : (
            <span className="ml-2 text-sm font-medium not-italic text-Natural7 dark:text-White">
              No salary range provided
            </span>
          )}
        </div>
        {/* Button based on screen size */}
        <Link href={`/jobdetails/${props.jobId}`}>
          <Button className="items-center justify-center rounded-[0.625rem] bg-Primary px-[.86rem] py-[0.5rem] text-[0.9375rem] font-semibold leading-6 dark:bg-Primary dark:text-white sm:hidden">
            Apply Now
          </Button>
          <Button className="hidden items-center justify-center rounded-[0.625rem] bg-Primary p-[1.25rem] text-[0.9375rem] font-semibold leading-6 dark:bg-Primary dark:text-white sm:flex">
            Visit Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
