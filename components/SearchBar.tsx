import React from "react";

import briefcase from "@/public/iconography/outline-briefcase.svg";
import chevronDown from "@/public/iconography/chevron.svg";
import search from "@/public/iconography/outline-search.svg";
import pin from "@/public/iconography/outline-pin.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex flex-col gap-[11px] px-4 text-sm font-bold text-Natural6 sm:flex-row sm:justify-between sm:py-4 sm:pl-5">
      {/* Content */}
      <div className="flex flex-row items-center gap-[13px] border-b border-Natural2  py-3 sm:border-none">
        {/* Search */}
        <div className="h-[28px] w-[28px] p-1">
          <Image src={search} />
        </div>
        <div>Job Title, Company, or Keywords</div>
      </div>
      <div className="flex flex-row items-center justify-between border-b border-Natural2  py-3 sm:border-none">
        {/* Location */}
        <div className="flex flex-row items-center gap-[13px]">
          {/* Icon, Location */}
          <div className="h-[28px] w-[28px] p-1">
            <Image src={pin} />
          </div>
          <div>Select Location</div>
        </div>
        <div className="h-[18px] w-[18px]">
          <Image src={chevronDown} />
        </div>
      </div>
      <div className="flex flex-row items-center gap-[13px] border-b border-Natural2  py-3 sm:border-none">
        {/* Job Type */}
        <div className="h-[28px] w-[28px] p-1">
          <Image src={briefcase} />
        </div>
        <div>Job Type</div>
      </div>
      <Link
        href="/jobsearch"
        className="my-2.5 rounded-lg bg-Primary px-[19px] py-3 font-semibold text-white"
      >
        Find Jobs
      </Link>
    </div>
  );
};

export default SearchBar;
