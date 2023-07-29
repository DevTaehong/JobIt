"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { formatSalaryRange } from "@/lib/formatSalaryRage";
import followerCounts from "@/lib/followerCounts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

// NOTE To be removed after API integration
// const demoData = {
//   logo: "/iconography/companyLogo.svg",
//   jobTitle: "Web developer",
//   employer: "UIHUT",
//   description:
//     "Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve.Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve.",
//   minSalary: 70000,
//   maxSalary: 100000,
//   salaryPeriod: "MONTH",
//   skills: ["React", "Node.js", "JavaScript"],
//   companyType: "Finance",
//   applyLink: "https://www.google.com",
//   city: "Austin",
//   state: "TX",
// };

type TypeProps = {
  logo: string;
  jobTitle: string;
  employer: string;
  description: string;
  minSalary: number | null;
  maxSalary: number | null;
  salaryPeriod: string | null;
  skills: string[];
  companyType: string;
  applyLink: string;
  city: string;
  state: string;
};

const randomAvatars = [
  "https://xsgames.co/randomusers/avatar.php?g=male",
  "https://randomuser.me/api/portraits/thumb/men/55.jpg",
  "https://randomuser.me/api/portraits/thumb/men/77.jpg",
  "",
];

const CompanyDetailCard = ({
  logo,
  jobTitle,
  employer,
  description,
  minSalary,
  maxSalary,
  salaryPeriod,
  skills,
  companyType,
  applyLink,
  city,
  state,
}: TypeProps) => {
  // NOTE https://nextjs.org/docs/app/api-reference/functions/use-router
  const router = useRouter();

  return (
    <main className="flex flex-col px-6 pt-[5.14rem] lg:px-20">
      {/* Back button */}
      <Button
        onClick={() => router.back()}
        className="mb-[1.73rem] w-[4.625rem] gap-[0.375rem] rounded-[0.625rem] bg-Natural2 px-[0.63rem] py-[0.44rem] text-[0.8125rem] font-medium not-italic leading-[1.125rem] text-Natural6 hover:text-white dark:border-DarkBG3 dark:bg-DarkBG3 dark:text-Natural6 lg:mb-9 lg:w-[4.625rem]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M11.25 4.5L6.75 9L11.25 13.5"
            stroke="#92929D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Back
      </Button>
      {/* Title, Logo, followers, city, state, follow button */}
      <Card className="border-0 bg-transparent shadow-none">
        {/* Company cover and logo */}
        <div
          className="relative h-[8.21875rem] w-full rounded-t-[1.25rem] bg-[url('/images/companyCover.png')] bg-cover 
            bg-center lg:h-[9.87rem]"
        >
          {/* // TODO fallback for company logo */}
          <img
            className="absolute left-3 top-[6.47rem] h-14 w-14 rounded-[10px] border-[3px]
              border-Natural3 dark:border-Natural8 dark:bg-[#1717250f] lg:left-6 lg:top-[8.12125rem]"
            src={logo}
          />
        </div>
        {/* Card header */}
        <div className="flex flex-col dark:bg-DarkBG1 lg:flex-row lg:items-end lg:justify-between lg:pb-[3.19rem]">
          {/* Company name, location and follower counts */}
          <div className="pl-3 pt-[2.45875rem] lg:flex lg:flex-col lg:gap-[0.63rem] lg:pl-6 lg:pt-[5.64875rem]">
            <CardTitle className="text-[1.375rem] not-italic leading-8 lg:text-[2rem] lg:font-bold">
              {employer}
            </CardTitle>
            <CardDescription className="mt-2 flex flex-row items-center gap-[0.38rem] text-sm font-medium not-italic text-Natural7 dark:text-Natural6 lg:mt-0 lg:text-[1.125rem] lg:leading-6 lg:text-Natural8">
              {employer}
              {/* Oval image */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 3.5C2.32843 3.5 3 2.82843 3 2C3 1.17157 2.32843 0.5 1.5 0.5C0.671573 0.5 0 1.17157 0 2C0 2.82843 0.671573 3.5 1.5 3.5Z"
                  fill="#696974"
                />
              </svg>
              {city}, {state}
            </CardDescription>
            <CardDescription className="mt-1 flex flex-row items-center gap-[0.38rem] text-sm font-medium not-italic text-Natural6 lg:mt-0 lg:text-base">
              {companyType}
              {/* Oval image */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="4"
                viewBox="0 0 3 4"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 3.5C2.32843 3.5 3 2.82843 3 2C3 1.17157 2.32843 0.5 1.5 0.5C0.671573 0.5 0 1.17157 0 2C0 2.82843 0.671573 3.5 1.5 3.5Z"
                  fill="#696974"
                />
              </svg>
              {`${followerCounts(employer).toLocaleString()} Followers`}
            </CardDescription>
            <Separator className="my-5 lg:hidden" />
          </div>
          {/* Avatars and the follow button */}
          <div>
            <div className="flex flex-row -space-x-3 pb-4 pl-3 lg:mr-5">
              {randomAvatars.map((avatar: string, i: number) => (
                <Avatar key={i}>
                  <AvatarImage
                    src={
                      i === 2
                        ? // Get random avatar for the random user  API
                          `https://randomuser.me/api/portraits/thumb/men/${Math.floor(
                            Math.random() * 100,
                          )}.jpg`
                        : avatar
                    }
                    className="rounded-[5rem] border-2 border-solid border-White dark:border-Natural8"
                  />
                  <AvatarFallback className="rounded-[5rem] border-2 border-solid border-White dark:border-Natural8 dark:bg-Natural2">
                    <span className="text-xs font-bold text-Natural8">+99</span>
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="mb-[1.63rem] mr-[0.63rem] pl-3 lg:mb-[0.62rem] lg:mr-5">
              <Button
                onClick={() => {
                  alert("Follow Functionality Coming Soon :)");
                }}
                variant="outline"
                className="flex w-full flex-row gap-[0.38rem] rounded-[0.625rem] border border-solid border-Primary text-Primary dark:border-Primary dark:bg-DarkBG1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.25 8.25H9.75V3.75C9.75 3.33525 9.414 3 9 3C8.586 3 8.25 3.33525 8.25 3.75V8.25H3.75C3.336 8.25 3 8.58525 3 9C3 9.41475 3.336 9.75 3.75 9.75H8.25V14.25C8.25 14.6648 8.586 15 9 15C9.414 15 9.75 14.6648 9.75 14.25V9.75H14.25C14.664 9.75 15 9.41475 15 9C15 8.58525 14.664 8.25 14.25 8.25Z"
                    fill="#0BAB7C"
                  />
                </svg>
                <span className="text-[0.875rem] font-semibold not-italic leading-6">
                  Follow
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Search Job title */}
      <div className="rounded-[0.625rem] bg-white px-4 py-5 dark:bg-DarkBG2 lg:ml-6 lg:px-5 lg:pb-0 lg:pt-[1.88rem]">
        <div className="relative md:w-[28.75rem]">
          <span className="absolute left-[0.625rem] top-1/2 -mt-2.5 lg:left-[1.12rem]">
            <Image
              className="flex"
              src="/iconography/outline-search.svg"
              alt="Search icon"
              width={18}
              height={18}
            />
          </span>
          <input
            className="h-11 w-full rounded-2xl border-0 bg-Natural3 px-[0.625rem] py-2 pl-[2.185rem] text-[0.8125rem] font-medium not-italic leading-[1.125rem] text-Natural6 focus:outline-none focus:ring-1 focus:ring-Primary dark:bg-DarkBG3 lg:h-[3.625rem] lg:pl-[3.62rem] lg:text-[0.875rem]
              lg:font-semibold lg:leading-6"
            type="text"
            placeholder="Search Job title or Keyword"
          />
          <Button
            onClick={() => {
              alert("Search Functionality Coming Soon :)");
            }}
            className="absolute inset-y-0 right-[0.62rem] top-2 h-[1.75rem] w-[4.5rem] rounded-[0.625rem] rounded-r-lg bg-Primary px-[0.88rem] py-1 font-semibold text-White dark:bg-Primary dark:text-White lg:right-[1.12rem] lg:h-[2.625rem] lg:w-[4.9375rem]"
          >
            Search
          </Button>
        </div>

        <div className="py-5 text-base font-bold text-Black dark:text-White lg:pb-[1.25rem] lg:pt-[1.87rem] lg:text-[1.125rem] lg:font-bold lg:leading-7">
          Recently Posted Job
        </div>
        {/* Recently Posted Job Card */}
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-[1.88rem]">
          {
            <Card className="flex flex-col gap-5 rounded-[0.625rem] border-0 bg-white shadow-custom dark:bg-DarkBG3 dark:shadow-none lg:gap-[1.38rem]">
              {/* Company logo, job title, skills */}
              <CardHeader className="flex flex-row justify-between px-5 pb-0 pt-5">
                <div className="flex flex-row gap-3 lg:gap-5">
                  <div
                    className="h-12 w-12 shrink-0 rounded-[0.47rem] border-[0.14rem] border-Natural3 
                    bg-Natural3 p-[0.35rem] dark:border-Natural8 dark:bg-[#1717250f] lg:rounded-[0.625rem] lg:border-[3px]"
                  >
                    <img width={36} height={36} src={logo} alt="Company logo" />
                  </div>
                  <div className="flex flex-col gap-1 lg:gap-[0.62rem]">
                    <CardTitle className="text-base font-semibold not-italic text-Black dark:text-White lg:text-[1.125rem]">
                      {jobTitle}
                    </CardTitle>
                    {/* Skills */}
                    <div className="flex flex-row flex-wrap gap-[0.31rem]">
                      {skills.slice(0, 3).map((skill: string, i: number) => (
                        <CardDescription
                          key={i}
                          className="rounded-[0.3125rem] bg-Natural3 px-[0.38rem] py-[0.06rem] text-center text-[0.8125rem] font-normal not-italic leading-[1.375rem] dark:bg-DarkBG2 lg:px-[0.62rem] lg:py-[0.19rem] lg:text-Natural6 "
                        >
                          {skill}
                        </CardDescription>
                      ))}
                    </div>
                  </div>
                </div>
                {/* ic-More button */}
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Image
                        src="/iconography/ic_More.svg"
                        alt="More button"
                        width={16}
                        height={16}
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="dark:bg-DarkBG2">
                      <DropdownMenuItem
                        onClick={() => {
                          alert("Save Job Functionality Coming Soon :)");
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.04765 0.872986H14.7857C16.539 0.872986 17.9603 2.2943 17.9603 4.04759V16.8432C17.9603 17.7199 17.2497 18.4305 16.373 18.4305C16.0126 18.4305 15.6629 18.3078 15.3814 18.0826L10.9167 14.5104L6.45201 18.0826C5.7675 18.6303 4.76862 18.5194 4.22094 17.8349C3.99574 17.5534 3.87305 17.2037 3.87305 16.8432V4.04759C3.87305 2.2943 5.29437 0.872986 7.04765 0.872986ZM7.04765 2.46029C6.17101 2.46029 5.46035 3.17095 5.46035 4.04759V16.8432L9.92504 13.271C10.5048 12.8072 11.3286 12.8072 11.9084 13.271L16.373 16.8432V4.04759C16.373 3.17095 15.6624 2.46029 14.7857 2.46029H7.04765Z"
                            fill="#92929D"
                          />
                        </svg>
                        <span className="ml-1 dark:text-white">Save Job</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="px-5 pb-0">
                <p className="line-clamp-4 h-[5.3125rem] text-[0.875rem] font-normal not-italic leading-[1.375rem] text-Natural7 dark:text-Natural6 lg:line-clamp-3 lg:h-[4.4375rem] lg:text-base">
                  {description}
                </p>
              </CardContent>
              <CardFooter className="flex flex-row justify-between px-5 pb-5">
                <p>
                  {minSalary && maxSalary && salaryPeriod ? (
                    formatSalaryRange(minSalary, maxSalary, salaryPeriod)
                  ) : (
                    <span className="ml-2 text-sm font-medium not-italic text-Natural7 dark:text-White">
                      -
                    </span>
                  )}
                </p>
                <Button className="rounded-[0.625rem] bg-[#0bab7c1a] px-[0.875rem] py-2 text-[0.8125rem] font-semibold not-italic leading-5 text-Primary dark:bg-[#0bab7c1a] dark:text-Primary lg:text-[0.9375rem] lg:leading-6">
                  <a target="_blank" href={applyLink}>
                    Apply now
                  </a>
                </Button>
              </CardFooter>
            </Card>
          }
        </div>

        {/* See all jobs button */}
        <Collapsible>
          <CollapsibleContent>
            <div className="mt-2 grid grid-cols-1 gap-2 lg:mt-[1.88rem] lg:grid-cols-2 lg:gap-[1.88rem]">
              <Card className="flex flex-col gap-5 rounded-[0.625rem] border-0 bg-white shadow-custom dark:bg-DarkBG3 dark:shadow-none lg:gap-[1.38rem]">
                {/* Company logo, job title, skills */}
                <CardHeader className="flex flex-row justify-between px-5 pb-0 pt-5">
                  <div className="flex flex-row gap-3 lg:gap-5">
                    <div
                      className="h-12 w-12 shrink-0 rounded-[0.47rem] border-[0.14rem] border-Natural3 
                    bg-Natural3 p-[0.35rem] dark:border-Natural8 dark:bg-[#1717250f] lg:rounded-[0.625rem] lg:border-[3px]"
                    >
                      <img
                        width={36}
                        height={36}
                        src={logo}
                        alt="Company logo"
                      />
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-[0.62rem]">
                      <CardTitle className="text-base font-semibold not-italic text-Black dark:text-White lg:text-[1.125rem]">
                        {jobTitle}
                      </CardTitle>
                      {/* Skills */}
                      <div className="flex flex-row flex-wrap gap-[0.31rem]">
                        {skills.slice(0, 3).map((skill: string, i: number) => (
                          <CardDescription
                            key={i}
                            className="rounded-[0.3125rem] bg-Natural3 px-[0.38rem] py-[0.06rem] text-center text-[0.8125rem] font-normal not-italic leading-[1.375rem] dark:bg-DarkBG2 lg:px-[0.62rem] lg:py-[0.19rem] lg:text-Natural6 "
                          >
                            {skill}
                          </CardDescription>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* ic-More button */}
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Image
                          src="/iconography/ic_More.svg"
                          alt="More button"
                          width={16}
                          height={16}
                        />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="dark:bg-DarkBG2">
                        <DropdownMenuItem
                          onClick={() => {
                            alert("Save Job Functionality Coming Soon :)");
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.04765 0.872986H14.7857C16.539 0.872986 17.9603 2.2943 17.9603 4.04759V16.8432C17.9603 17.7199 17.2497 18.4305 16.373 18.4305C16.0126 18.4305 15.6629 18.3078 15.3814 18.0826L10.9167 14.5104L6.45201 18.0826C5.7675 18.6303 4.76862 18.5194 4.22094 17.8349C3.99574 17.5534 3.87305 17.2037 3.87305 16.8432V4.04759C3.87305 2.2943 5.29437 0.872986 7.04765 0.872986ZM7.04765 2.46029C6.17101 2.46029 5.46035 3.17095 5.46035 4.04759V16.8432L9.92504 13.271C10.5048 12.8072 11.3286 12.8072 11.9084 13.271L16.373 16.8432V4.04759C16.373 3.17095 15.6624 2.46029 14.7857 2.46029H7.04765Z"
                              fill="#92929D"
                            />
                          </svg>
                          <span className="ml-1 dark:text-white">Save Job</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-0">
                  <p className="line-clamp-4 h-[5.3125rem] text-[0.875rem] font-normal not-italic leading-[1.375rem] text-Natural7 dark:text-Natural6 lg:line-clamp-3 lg:h-[4.4375rem] lg:text-base">
                    {description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-row justify-between px-5 pb-5">
                  <p>
                    {minSalary && maxSalary && salaryPeriod ? (
                      formatSalaryRange(minSalary, maxSalary, salaryPeriod)
                    ) : (
                      <span className="ml-2 text-sm font-medium not-italic text-Natural7 dark:text-White">
                        -
                      </span>
                    )}
                  </p>
                  <Button className="rounded-[0.625rem] bg-[#0bab7c1a] px-[0.875rem] py-2 text-[0.8125rem] font-semibold not-italic leading-5 text-Primary dark:bg-[#0bab7c1a] dark:text-Primary lg:text-[0.9375rem] lg:leading-6">
                    <a target="_blank" href={applyLink}>
                      Apply now
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CollapsibleContent>
          <div className="mb-[1.875rem] flex items-center justify-center lg:mb-[3.25rem] lg:mt-[3.75rem]">
            <CollapsibleTrigger>
              <Button
                className="hidden rounded-[0.625rem] border border-solid border-Natural5 px-[0.875rem] py-2 dark:border-DarkBG3 dark:bg-DarkBG3 lg:block"
                variant="outline"
              >
                <span className="text-[0.9375rem] font-semibold not-italic leading-6 text-Natural6">
                  See All Jobs
                </span>
              </Button>
            </CollapsibleTrigger>
          </div>
        </Collapsible>
      </div>
    </main>
  );
};

export default CompanyDetailCard;
