import React from "react";
import Image from "next/image";

type Props = {
  employerName: string;
  jobTitle: string;
  salary: number | null;
  salaryPeriod: string | null;
  companyLogo: string;
  jobState: string;
  jobCity: string;
  employmentType: string;
};

const InlineJobCard = (props: Props) => {
  return (
    <div className="w-full flex-col gap-5 bg-Natural3 p-5 font-manrope">
      <div className="flex justify-between">
        <div className="flex rounded">
          <div className="rounded p-2">
            <img
              width={36}
              className="h-9 w-9"
              src={props.companyLogo}
              alt="logo"
            />
          </div>
          <div className="flex flex-col pl-5">
            <h1 className=" text-lg font-semibold text-gray-900">
              {props.jobTitle}
            </h1>
            <p className="text-center text-sm font-medium leading-tight text-Natural7">
              {`${props.employerName} ･ ${props.jobCity},${props.jobState}`}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          {props.salary && (
            <h3 className="text-black">
              {`$${props.salary}/`}
              <span className="font-sans text-Natural7">
                {props.salaryPeriod}
              </span>
            </h3>
          )}
          <p className="text-center text-sm font-medium leading-tight text-Natural7">
            {props.employmentType}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InlineJobCard;
