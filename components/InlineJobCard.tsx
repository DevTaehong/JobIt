import React from "react";

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
    <div className="w-full gap-5 rounded-[10px] bg-Natural3 px-3 py-3.5 font-manrope dark:bg-DarkBG2">
      <div className="flex justify-between">
        <div className="flex rounded">
          <div className="h-9 w-9 rounded py-1.5 pr-2">
            <img
              className="min-h-[30px] min-w-[30px]  sm:max-h-[36px] sm:max-w-[36px]"
              src={props.companyLogo}
              alt="logo"
            />
          </div>
          <div className="flex flex-col justify-between pl-0 text-start">
            <h1 className="line-clamp-1 text-[15px] font-semibold text-gray-900 dark:text-white sm:text-base">
              {props.jobTitle}
            </h1>
            <p className="line-clamp-1 text-[13px] font-normal leading-tight text-Natural7 sm:text-sm">
              {`${props.employerName} ･ ${props.jobCity},${props.jobState}`}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between text-[13px] sm:text-sm">
          {props.salary && (
            <h3 className="text-black dark:text-white ">
              {`$${props.salary}/`}
              <span className="font-sans text-Natural7">
                {props.salaryPeriod?.toLowerCase()}
              </span>
            </h3>
          )}
          <p className="text-start text-[13px] font-medium leading-tight text-Natural7">
            {props.employmentType}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InlineJobCard;
