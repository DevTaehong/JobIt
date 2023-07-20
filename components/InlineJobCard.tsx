"use client";
import React from "react";
import Image from "next/image";
import { useGetJobsQuery } from "@/redux/services/jsearch";
import { Skeleton } from "./ui/skeleton";

// type Props = {
//   employerName: string;
//   jobTitle: string;
//   salary: number | null;
//   salaryPeriod: string | null;
//   companyLogo: string;
//   jobState: string;
//   jobCity: string;
//   employmentType: string;
// };

const InlineJobCard = () => {
  const { data, isLoading } = useGetJobsQuery();

  if (isLoading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="hidden w-full flex-col gap-5 bg-Natural3 p-5 font-manrope sm:block">
      <div className="flex justify-between">
        <div className="flex rounded">
          <div className="rounded p-2">
            <Image width={36} height={36} src="/image/Logo.svg" alt="logo" />
          </div>
          <div className="flex flex-col pl-5">
            <h1 className=" text-lg font-semibold text-gray-900">
              {data?.data[0]?.job_job_title}
            </h1>
            <p className="text-center text-sm font-medium leading-tight text-Natural7">
              {`${data?.data[0]?.employer_name} ･ ${data?.data[0]?.job_city},${data?.data[0]?.job_state}`}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          {data?.data[0]?.salary && (
            <h3 className="text-black">
              {`$${data?.data[0]?.job_min_salary}/`}
              <span className="font-sans text-Natural7">
                {data?.data[0]?.job_salary_Period}
              </span>
            </h3>
          )}
          <p className="text-center text-sm font-medium leading-tight text-Natural7">
            {data?.data[0]?.job_employment_type}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InlineJobCard;
