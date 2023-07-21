import React from "react";
import icMore from "@/public/iconography/ic_More.svg";
import briefcase from "@/public/iconography/outline-briefcase.svg";
import clock from "@/public/iconography/outline-clock.svg";
import people from "@/public/iconography/outline-people.svg";
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

    const timeDiff = expDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return daysLeft;
  }

  const daysLeft = calculateDaysLeft(props.expirationDate);

  return (
    <div className="">
      <div className="flex flex-col gap-7 rounded-[10px] bg-white p-5 font-manrope dark:bg-DarkBG2">
        <div className="flex justify-between">
          <div className="flex rounded">
            <div className="h-[46px] w-[46px] justify-center rounded-[10px] border border-neutral-50 bg-Natural3 p-2 dark:border-none dark:bg-DarkBG3 sm:h-[64px] sm:w-[64px]">
              <img
                className="min-h-[34.5px] min-w-[34.5px]  sm:h-[48px] sm:w-[48px]"
                src={props.companyLogo}
                alt="logo"
              />
            </div>
            <div className="flex flex-col justify-between pl-[18px] sm:pl-5">
              <h1 className="line-clamp-1 font-semibold text-gray-900 dark:text-white sm:text-lg">
                {props.jobTitle}
              </h1>

              {/* Conditionally render skills */}
              <div className="flex gap-1">
                {props.jobSkills &&
                  props.jobSkills.map((skill, index) => (
                    <div className="flex " key={index}>
                      <p className="justify-start rounded bg-Natural3 px-[6px] py-[3px] text-[13px] text-Natural6 dark:bg-DarkBG3 sm:px-[10px] sm:py-[5px] sm:text-sm">
                        {skill}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <Image
              className="min-h-[16px] min-w-[16px]"
              src={icMore}
              alt="More Icon"
            />
          </div>
        </div>

        <div>
          <p className="line-clamp-6 text-[15px] text-Natural7 dark:text-Natural6 sm:text-base">
            {props.jobDescription}
          </p>
        </div>

        <div className="flex justify-between gap-[5px] sm:gap-3">
          <div className="flex items-center justify-center rounded bg-Natural3 px-1 py-[6px] text-[13px] text-Natural6 dark:bg-DarkBG3 sm:px-[10px] sm:text-sm">
            <Image
              className="mr-2 h-[18px] w-[18px]"
              src={briefcase}
              alt="logo"
            />
            <p>{props.employmentType?.toLowerCase()}</p>
          </div>
          <div className="flex items-center justify-center rounded bg-Natural3 px-1 py-[6px] text-[13px] text-Natural6 dark:bg-DarkBG3 sm:px-[10px] sm:text-sm">
            <Image
              className="mr-2 h-[18px] w-[18px]"
              src={people}
              alt="peopleIcon"
            />
            <p className="line-clamp-1">45 Applied</p>
          </div>
          <div className="flex items-center justify-center  rounded bg-Natural3 px-1 py-[6px] text-[13px] text-Natural6 dark:bg-DarkBG3 sm:px-[10px] sm:text-sm">
            <Image
              className="mr-2 h-[18px] w-[18px]"
              src={clock}
              alt="clock_icon"
            />
            <p className="line-clamp-1">{`${daysLeft}days left`}</p>
          </div>
        </div>

        {/* Conditionally render salaries */}
        <div className="flex items-center justify-between">
          {props.salary && (
            <h3 className="text-[18px] text-black dark:text-white">
              {`$${props.salary}/`}
              <span className="font-sans text-base text-Natural7 sm:text-[16px]">
                {props.salaryPeriod?.toLowerCase()}
              </span>
            </h3>
          )}
          {/* Button based on screen size */}
          <Button className="h-10 w-[103px] items-center justify-center rounded-[10px] bg-Primary px-3.5 py-2 text-[15px] dark:bg-Primary sm:hidden">
            Apply Now
          </Button>
          <Button className="hidden items-center justify-center rounded-[10px] bg-Primary px-3.5 py-3 text-[15px] dark:bg-Primary dark:text-white sm:flex sm:h-12 sm:w-[94px]">
            Visit Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
