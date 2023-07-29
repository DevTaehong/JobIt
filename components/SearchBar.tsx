import React from "react";

import briefcase from "@/public/iconography/outline-briefcase.svg";
import chevronDown from "@/public/iconography/chevron.svg";
import search from "@/public/iconography/outline-search.svg";
import pin from "@/public/iconography/outline-pin.svg";
import Image from "next/image";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex flex-col">
      {/* Content */}
      <div className="flex flex-row">
        {/* Search */}
        <div>
          <Image src={search} />
        </div>
        <div>Job Title, Company, or Keywords</div>
      </div>
      <div className="flex flex-row">
        {/* Location */}
        <div>
          <Image src={pin} />
        </div>
        <div>Select Location</div>
        <div>
          <Image src={chevronDown} />
        </div>
      </div>
      <div className="flex flex-row">
        {/* Job Type */}
        <div>
          <Image src={briefcase} />
        </div>
        <div>Job Type</div>
      </div>
      <button>Find Jobs</button>
    </div>
  );
};

export default SearchBar;
