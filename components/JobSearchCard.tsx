import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

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
    <div className="flex w-full flex-col gap-5 bg-white p-5 font-manrope">
      <div className="flex justify-between">
        <div className="flex rounded">
          <div className="rounded p-2">
            <img
              width={48}
              className="h-12 w-12"
              src={props.companyLogo}
              alt="logo"
            />
          </div>
          <div className="flex flex-col pl-5">
            <h1 className=" text-lg font-semibold text-gray-900">
              {props.jobTitle}
            </h1>
            <p className="text-center text-sm font-medium leading-tight text-Natural7">
              {`${props.employerName} ･ ${props.jobCity},${props.jobState} ･ ${postDate} days ago`}
            </p>
          </div>
        </div>
        <div>
          <p className="justify-start rounded bg-Natural3 px-2 py-1 text-sm text-Natural6">
            Save job
          </p>
        </div>
      </div>

      <div>
        <p className="line-clamp-6 text-Natural7 sm:line-clamp-2">
          {props.jobDescription}
        </p>
      </div>
      {/* Conditionally render skills */}
      <div className="flex gap-1">
        {props.jobSkills &&
          props.jobSkills.map((skill, index) => (
            <div className="flex" key={index}>
              <p className="justify-start rounded bg-Natural3 px-2 py-1 text-sm text-Natural6">
                {skill}
              </p>
            </div>
          ))}
      </div>

      {/* Conditionally render salaries */}
      <div className="flex items-center justify-between">
        {props.salary && (
          <h3 className="text-black">
            {`$${props.salary}/`}
            <span className="font-sans text-Natural7">
              {props.salaryPeriod}
            </span>
          </h3>
        )}
        <div className="flex gap-5">
          <Button className="h-12 w-32 items-center justify-center rounded-lg bg-Natural4 p-3 text-Natural7">
            Message
          </Button>
          <Button className="h-12 w-44 items-center justify-center rounded-lg bg-Primary p-3">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobSearchCard;
