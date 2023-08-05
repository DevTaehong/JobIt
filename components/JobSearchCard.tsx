import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import bookmark from "@/public/iconography/archive.svg";

type Props = {
  employerName: string;
  jobTitle: string;
  jobDescription: string;
  salary: number | null;
  salaryPeriod: string | null;
  companyLogo: string;
  jobSkills: string[] | null;
  jobState: string;
  jobCity: string;
  postDate: number;
};

const JobSearchCard = (props: Props) => {
  /* {Calculate Days left for job posting} */
  function calculatePostDate(expTime: number): number {
    const postDate = new Date(expTime * 1000); // Convert to milliseconds
    const currentDate = new Date();

    const timeDiff = currentDate.getTime() - postDate.getTime();
    const daysPosted = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return daysPosted;
  }

  const postDate = calculatePostDate(props.postDate);

  return (
    <div className="flex w-auto flex-col gap-5 rounded-lg bg-white p-5 dark:bg-DarkBG2">
      <div className="flex justify-between">
        <div className="flex rounded">
          <div className="h-[45px] w-[45px] rounded-[10px] bg-Natural2 p-2 dark:bg-DarkBG3 sm:h-[64px] sm:w-[64px]">
            <img
              className="min-h-[34px] max-w-[34px] sm:h-[48px] sm:max-w-[48px]"
              src={props.companyLogo}
              alt="logo"
            />
          </div>
          <div className="flex flex-col pl-5">
            <h1 className="font-semibold text-gray-900 dark:text-white sm:text-lg">
              {props.jobTitle}
            </h1>
            <div className="flex flex-col sm:flex-row">
              <p className="text-[13px] font-medium leading-tight text-Natural7 sm:text-sm">
                {`${props.employerName} ･ `}
              </p>
              <p className="text-[13px] font-medium leading-tight text-Natural7 sm:text-sm">
                {`${props.jobCity}, ${props.jobState} ･ ${postDate} days ago`}
              </p>
            </div>
          </div>
        </div>
        <div className="flex max-h-[34px] w-fit items-center justify-center rounded-lg px-2 py-1 text-sm text-Natural6 sm:bg-Natural3 sm:dark:bg-DarkBG3">
          <p className="mr-[6px] line-clamp-1 hidden sm:block">Save job</p>
          <Image src={bookmark} alt="bookmark" />
        </div>
      </div>

      <div>
        <p className="line-clamp-6 text-[13px] leading-snug text-Natural7 dark:text-Natural5 sm:line-clamp-2 sm:text-sm">
          {props.jobDescription}
        </p>
      </div>
      {/* Conditionally render skills */}
      <div className="flex gap-1">
        {props.jobSkills &&
          props.jobSkills.map((skill, index) => (
            <div className="flex gap-[5px]" key={index}>
              <p className="justify-start rounded bg-Natural3 px-2.5 py-[5px] text-[13px] text-Natural6 dark:bg-DarkBG3">
                {skill}
              </p>
            </div>
          ))}
      </div>

      {/* Conditionally render salaries */}
      <div className="flex flex-col justify-between gap-[30px] sm:flex-row sm:items-center">
        {props.salary && (
          <div className="flex justify-start">
            <h3 className="text-black">
              <span className="text-base font-semibold dark:text-white sm:text-lg">{`$${props.salary}/`}</span>
              <span className="text-base text-Natural7 sm:text-lg">
                {props.salaryPeriod?.toLowerCase()}
              </span>
            </h3>
          </div>
        )}
        <div className="flex justify-between gap-5">
          <Button className="h-[38px] w-[134px] items-center justify-center rounded-[10px] bg-Natural4 px-3.5 py-[9px] text-[13px]  text-Natural7 dark:bg-DarkBG3 dark:text-Natural7 sm:h-12 sm:w-[125px] sm:py-3 sm:text-[15px]">
            Message
          </Button>
          <Button className="h-[38px] w-[141px] items-center justify-center rounded-[10px] bg-Primary px-3 py-[9px] dark:bg-Primary dark:text-white sm:h-12 sm:w-[180px] sm:px-3.5 sm:py-3">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobSearchCard;
