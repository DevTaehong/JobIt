"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import { useAppDispatch } from "@/redux/hooks";
import {
  setEmploymentType,
  setSearchQuery,
} from "@/redux/feature/searchJobs/searchJobs";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const keywords = searchParams.get("keywords");
  const jobType = searchParams.get("jobType");

  const router = useRouter();
  const dispatch = useAppDispatch();

  const initialFormData = {
    keywords: location ?? "",
    location: keywords ?? "",
    jobType: jobType ?? "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (formData: typeof initialFormData) => {
    const queryString = formData.keywords + " in " + formData.location;

    dispatch(setSearchQuery(queryString));
    dispatch(setEmploymentType(formData.jobType));

    formData.jobType
      ? router.push(
          `/job-search?query=${queryString}&employment_types=${formData.jobType}`,
        )
      : router.push(`/job-search?query=${queryString}`);
  };

  return (
    <div className="flex w-full shrink-0 flex-col gap-y-4 rounded-[20px] bg-White p-4 shadow-searchBar dark:bg-DarkBG2 md:h-20 md:flex-row md:items-center">
      <div className="flex h-20 w-full items-center gap-x-[13px] border-b border-Natural2 px-[20px] dark:border-Natural8 md:w-auto md:border-b-0 md:border-r md:pl-5 lg:w-1/3 lg:pr-[99px]">
        <Image
          src="/iconography/outline-search.svg"
          width={28}
          height={28}
          alt="search icon"
        />
        <div className="inline-block h-20">
          <div className="invisible h-0" aria-hidden="true">
            Job Title, Company, or Keywords
          </div>
          <input
            name="keywords"
            type="text"
            className="bold-14 searchBar-placeholder h-full w-full bg-transparent text-Natural6 outline-none"
            placeholder="Job Title, Company, or Keywords"
            value={formData.keywords}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex h-full items-center gap-x-[13px] border-b border-Natural2 px-[20px] py-5 dark:border-Natural8 md:h-20 md:w-auto md:border-b-0 md:border-r lg:w-1/3 lg:px-[20px]">
        <Image
          src="/iconography/outline-pin.svg"
          width={28}
          height={28}
          alt="search icon"
        />
        <div className="block w-full">
          <div className="invisible h-0 " aria-hidden="true">
            Select Location
          </div>
          <input
            name="location"
            onChange={handleInputChange}
            type="text"
            placeholder="Select Location"
            className="searchBar-placeholder bold-14 flex w-full bg-White text-Natural6 outline-none dark:bg-DarkBG2"
            autoComplete="off"
            value={formData.location}
          />
        </div>
      </div>
      <div className="flex h-full items-center gap-x-[13px] border-b border-Natural2 px-[20px] py-5 dark:border-Natural8 md:w-auto md:border-b-0 lg:w-1/6">
        <Image
          src="/iconography/outline-briefcase.svg"
          width={28}
          height={28}
          alt="search icon"
        />
        <div className="xl:semibold-14 semibold-14 lg:bold-14 inline-block text-Natural6">
          <div className="invisible h-0" aria-hidden="true">
            Job Type
          </div>
          <select
            name="jobType"
            className="cursor-pointer bg-transparent outline-none "
            id="jobType"
            value={formData.jobType}
            onChange={handleInputChange}
          >
            <option className="cursor-pointer" value="">
              Job Type
            </option>
            <option className="cursor-pointer" value="FULLTIME">
              Full-Time
            </option>
            <option className="cursor-pointer" value="PARTTIME">
              Part-Time
            </option>
            <option className="cursor-pointer" value="CONTRACTOR">
              Contractor
            </option>
            <option className="cursor-pointer" value="INTERN">
              Intern
            </option>
          </select>
        </div>
      </div>
      <div className="md:ml-5 md:w-auto lg:ml-auto lg:w-1/6 lg:max-w-[105px]">
        <button
          type="submit"
          onClick={() => handleFormSubmit(formData)}
          className="hover-effect w-full whitespace-nowrap rounded-[10px] bg-Primary px-[20px] py-3 text-White"
        >
          Find Jobs
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
