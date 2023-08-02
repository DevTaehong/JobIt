"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import briefcase from "@/public/iconography/outline-briefcase.svg";
import search from "@/public/iconography/outline-search.svg";
import pin from "@/public/iconography/outline-pin.svg";

type Props = {};

const SearchBar = (props: Props) => {
  const router = useRouter();

  const initialFormData = {
    keywords: "",
    location: "",
    jobType: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData);

  const handleFormSubmit = (formData) => {
    const queryString = formData.keywords + " in " + formData.location;

    formData.jobType
      ? router.push(
          `/jobsearch?query=${queryString}&employment_type=${formData.jobType}`,
        )
      : router.push(`/jobsearch?query=${queryString}`);
  };

  return (
    <div className="flex flex-col gap-[11px] px-4 text-sm font-bold text-Natural6 sm:flex-row sm:justify-between">
      {/* Content */}
      <div className="flex flex-row items-center  border-b border-Natural2  py-3 sm:border-none sm:py-0">
        {/* Search */}
        <div className="h-[28px] w-[28px] p-1">
          <Image src={search} alt="search" />
        </div>
        <Input
          name="keywords"
          className="h-5 w-[295px] border-none py-0 placeholder:text-Natural6 dark:bg-transparent sm:h-6 sm:px-0"
          placeholder="Job Title, Company, or Keywords"
          onChange={handleInputChange}
          value={formData.keywords}
          required
        />
      </div>
      <div className="flex flex-row items-center border-b border-Natural2  py-3 sm:border-none sm:py-0">
        {/* Location */}
        <div className="h-[28px] w-[28px] p-1">
          <Image src={pin} alt="location" />
        </div>

        <Input
          name="location"
          className="h-5 border-none py-0 placeholder:text-Natural6 dark:bg-transparent"
          placeholder="Select Location"
          onChange={handleInputChange}
          value={formData.location}
        />
      </div>
      <div className="flex flex-row items-center justify-between border-b border-Natural2  py-3 sm:border-none sm:py-0">
        {/* Job Type */}
        <div className="flex flex-row items-center">
          {/* Icon, Job Type */}
          <div className="h-[28px] w-[28px] p-1">
            <Image src={briefcase} alt="briefcase" />
          </div>
          <select
            name="jobType"
            className="h-5 border-none py-0 placeholder:text-Natural6 dark:bg-transparent"
            value={formData.jobType}
            onChange={handleInputChange}
          >
            <option value="">Job Type</option>
            <option value="Fulltime">Full Time</option>
            <option value="Parttime">Part Time</option>
            <option value="Contractor">Contractor</option>
            <option value="Intern">Intern</option>
          </select>
        </div>
      </div>

      <Button
        type="submit"
        onClick={() => handleFormSubmit(formData)}
        className="h-12 rounded-lg bg-Primary px-[19px] py-3 text-center text-[15px] font-semibold text-white dark:bg-Primary dark:text-white"
      >
        Find Jobs
      </Button>
    </div>
  );
};

export default SearchBar;
