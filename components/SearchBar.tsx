import React from "react";

import { Input } from "@/components/ui/input";
import briefcase from "@/public/iconography/outline-briefcase.svg";
import chevronDown from "@/public/iconography/chevron.svg";
import search from "@/public/iconography/outline-search.svg";
import pin from "@/public/iconography/outline-pin.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex flex-col gap-[11px] px-4 text-sm font-bold text-Natural6 sm:flex-row sm:justify-between">
      {/* Content */}
      <div className="flex flex-row items-center  border-b border-Natural2  py-3 sm:border-none sm:py-0">
        {/* Search */}
        <div className="h-[28px] w-[28px] p-1">
          <Image src={search} />
        </div>
        <Input
          className="h-5 w-full border-none py-0 placeholder:text-Natural6 dark:bg-transparent sm:h-6"
          placeholder="Job Title, Company, or Keywords"
          required
        />
      </div>
      <div className="flex flex-row items-center justify-between border-b border-Natural2  py-3 sm:border-none sm:py-0">
        {/* Location */}
        <div className="flex flex-row items-center">
          {/* Icon, Location */}
          <div className="h-[28px] w-[28px] p-1">
            <Image src={pin} />
          </div>
          <Input
            className="h-5 border-none py-0 placeholder:text-Natural6 dark:bg-transparent"
            placeholder="Select location"
          />
        </div>
        <div className="h-[18px] w-[18px]">
          <Image src={chevronDown} />
        </div>
      </div>
      <div className="flex flex-row items-center border-b border-Natural2  py-3 sm:border-none sm:py-0">
        {/* Job Type */}
        <div className="h-[28px] w-[28px] p-1">
          <Image src={briefcase} />
        </div>
        <Input
          className="h-5 border-none py-0 placeholder:text-Natural6 dark:bg-transparent"
          placeholder="Job Type"
        />
      </div>
      <Link
        href="/jobsearch"
        className="my-2.5 rounded-lg bg-Primary px-[19px] py-3 text-center font-semibold text-white"
      >
        Find Jobs
      </Link>
    </div>
  );
};

export default SearchBar;
