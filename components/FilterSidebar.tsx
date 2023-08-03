"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

const FilterSidebar = () => {
  const filters = [
    "Employment Type",
    "Job Requirements",
    "Date Posted",
    "Remote",
  ];
  // Initialize an array to store the state and setters for each filter
  const [filterStates, setFilterStates] = useState(
    filters.map(() => ({
      isOpen: false,
    })),
  );

  // Filter 1: Employment Type
  const employmentType = [
    // NOTE Find jobs of particular employment types, specified as a comma delimited list of the following values:
    // NOTE  FULLTIME, CONTRACTOR, PARTTIME, INTERN.
    { id: "FULLTIME", label: "Full Time" },
    { id: "PARTTIME", label: "Part Time" },
    { id: "CONTRACTOR", label: "Contractor" },
    { id: "INTERN", label: "Internship" },
  ];

  // Filter 2: Job Requirements
  const jobRequirements = [
    { id: "under_3_years_experience", label: "Under 3 years experience" },
    {
      id: "more_than_3_years_experience",
      label: "More than 3 years experience",
    },
    { id: "no_experience", label: "No experience" },
    { id: "no_degree", label: "No degree" },
  ];

  // Filter 3: Remote
  const remote = [{ id: "remote", label: "Remote jobs only" }];

  // Filter 4: Date Posted
  const datePosted = [
    { id: "all", label: "All" },
    { id: "today", label: "Today" },
    { id: "3days", label: "Past 3 days" },
    { id: "week", label: "Past week" },
    { id: "month", label: "Past month" },
  ];

  const getCheckboxesForFilter = (filter: string) => {
    switch (filter) {
      case "Employment Type":
        return employmentType;
      case "Job Requirements":
        return jobRequirements;
      case "Remote":
        // Add the checkboxes for the "Salary" filter here if available
        return remote;
      case "Date Posted":
        // Add the checkboxes for the "Location" filter here if available
        return datePosted;
      default:
        return [];
    }
  };

  const handleOpenChange = (index: number, isOpen: boolean) => {
    // Create a copy of the filterStates array and update the isOpen value for the specific filter
    const updatedFilterStates = [...filterStates];
    updatedFilterStates[index].isOpen = isOpen;
    setFilterStates(updatedFilterStates);
  };

  return (
    <div className="hidden lg:flex lg:w-[15.56rem] lg:flex-col lg:gap-[1.88rem]">
      {filters.map((filter, i) => (
        <Filters
          key={i}
          heading={filter}
          checkboxes={getCheckboxesForFilter(filter)}
          setOpen={(prev) => handleOpenChange(i, prev)}
          isOpen={filterStates[i].isOpen}
        />
      ))}
    </div>
  );
};

export default FilterSidebar;

type FiltersProps = {
  checkboxes: { id: string; label: string }[];
  setOpen: (value: boolean) => void;
  isOpen: boolean;
  heading: string;
};

function Filters({ checkboxes, setOpen, isOpen, heading }: FiltersProps) {
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={() => setOpen(!isOpen)}
      className="flex flex-col"
    >
      <div className="flex flex-row items-center justify-between gap-[2.94rem]">
        <h4 className="line-clamp-1 text-[1.125rem] font-semibold not-italic leading-6 dark:text-White">
          {heading}
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="px-0">
            {isOpen ? (
              <Image
                src="/images/chevronUp.svg"
                alt="chevron"
                width="20"
                height="20"
              />
            ) : (
              <Image
                src="/iconography/chevron.svg"
                alt="chevron"
                width="20"
                height="20"
              />
            )}
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className={`${isOpen && "mt-5"} flex flex-col gap-3`}>
        {checkboxes.map((checkbox) => (
          <CollapsibleContent key={checkbox.id}>
            <div className="flex justify-between">
              <div className="flex gap-[0.88rem]">
                <Checkbox id={checkbox.id} />
                <label
                  htmlFor={checkbox.id}
                  className="text-sm font-medium not-italic text-Natural8 hover:text-Primary peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-Natural5 dark:hover:text-Primary"
                >
                  {checkbox.label}
                </label>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="pointer-events-none flex h-[1.5rem] w-[2.19rem] content-center items-center rounded-[0.3125rem] border-0 bg-Natural2 px-[0.375rem] py-[0.125rem] hover:bg-transparent dark:bg-DarkBG3"
              >
                <span className="text-sm font-medium text-Natural8 dark:text-Natural2">
                  100
                </span>
              </Button>
            </div>
          </CollapsibleContent>
        ))}
      </div>
    </Collapsible>
  );
}
