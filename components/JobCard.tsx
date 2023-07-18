import React from "react";
import icMore from "@/public/static/iconography/ic_More.svg";
import briefcase from "@/public/static/iconography/outline-briefcase.svg";
// import companyLogo from "@/public/static/iconography/companyLogo-outline-property.svg";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {
  jobTitle: string;
  jobDescription: string;
  salary: number | null;
  salaryPeriod: string | null;
  companyLogo: string;
  jobSkills: string[] | null;
  employmentType: string;
  expirationDate: number;
};

const JobCard = (props: Props) => {
  /* {Calculate Days left for job posting} */
  function calculateDaysLeft(expTime: number): number {
    const expDate = new Date(expTime * 1000); // Convert to milliseconds
    const currentDate = new Date();

    const timeDiff = currentDate.getTime() - expDate.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return daysLeft;
  }

  const daysLeft = calculateDaysLeft(props.expirationDate);

  return (
    // Job logo & Title
    <div className="flex w-full flex-col gap-7 bg-white p-5 font-Manrope">
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
          </div>
        </div>
        <Image className="items-start" src={icMore} alt="More Icon" />
      </div>

      <div>
        <p className="line-clamp-6 text-Natural7">{props.jobDescription}</p>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center justify-center rounded bg-Natural3 px-2 py-1 text-sm text-Natural6">
          <Image className="mr-2" src={briefcase} alt="logo" />
          <p>{props.employmentType}</p>
        </div>
        <div className="flex items-center justify-center rounded bg-Natural3 px-2 py-1 text-sm text-Natural6">
          <Image className="mr-2" src={briefcase} alt="logo" />
          <p>Full Time</p>
        </div>
        <div className="flex items-center justify-center rounded bg-Natural3 px-2 py-1 text-sm text-Natural6">
          <Image className="mr-2" src={briefcase} alt="logo" />
          <p>{`${daysLeft} days left`}</p>
        </div>
      </div>

      {/* Conditionally render salaries */}
      <div className="flex items-center justify-between">
        {props.salary && (
          <h3 className="text-black">
            {`$${props.salary}/`}
            <span className="text-Natural7">{props.salaryPeriod}</span>
          </h3>
        )}
        <Button className="h-12 w-24 items-center justify-center rounded-lg bg-Primary p-3">
          Visit Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
