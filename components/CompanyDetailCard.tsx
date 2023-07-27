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

const demoData = {
  employer_logo: "/images/companyPlaceholderLogo.png",
  job_title: "Web developer",
  employer_Name: "UIHUT",
  job_description:
    "Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve.",
  job_min_salary: 15000,
  job_max_salary: 20000,
  job_salary_period: "MONTH",
};

function CompanyDetails() {
  return (
    <main className="flex flex-col px-6 pt-[5.14rem]">
      <Card className="border-0 bg-transparent shadow-none">
        <div
          className="relative h-[8.21875rem] w-full rounded-t-[1.25rem] bg-[url('/images/companyCover.png')] 
            bg-cover bg-center"
        >
          <img
            className="absolute left-3 top-[6.47rem] h-14 w-14 rounded-[10px] 
              border-[3px] border-Natural3"
            src={demoData.employer_logo}
          />
        </div>
        <CardHeader className="pb-[1.19rem] pl-3 pt-[2.45875rem]">
          <CardTitle>{demoData.employer_Name}</CardTitle>
          <CardDescription className="mt-2">
            UIHUT Technologies LLC Sylhet, BD
          </CardDescription>
          <CardDescription className="mt-1">
            Design Resources platform
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row -space-x-3 pl-3">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="rounded-[5rem] border-2 border-solid border-White"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              className="rounded-[5rem] border-2 border-solid border-White"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              className="rounded-[5rem] border-2 border-solid border-White"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              className="rounded-[5rem] border-2 border-solid border-White"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardContent>
        <CardFooter className="pl-3">
          <Button
            variant="outline"
            className="w-full rounded-[0.625rem] border border-solid border-Primary text-Primary"
          >
            Follow
          </Button>
        </CardFooter>
      </Card>

      {/* Search Job title */}
      <div className="rounded-[0.625rem] bg-white px-4 py-5">
        <div className="relative">
          <span className="absolute left-[0.625rem] top-1/2 -mt-2.5">
            <Image
              className="flex"
              src="/iconography/outline-search.svg"
              alt="Search icon"
              width={18}
              height={18}
            />
          </span>
          <input
            className="h-11 w-full rounded-2xl border-0 bg-Natural3 px-[0.625rem] py-2 pl-[2.185rem] text-[0.8125rem] font-medium not-italic leading-[1.125rem] text-Natural6 focus:outline-none 
              focus:ring-1 focus:ring-Primary"
            type="text"
            placeholder="Search Job title or Keyword"
          />
          <Button className="absolute inset-y-0 right-[0.62rem] top-2 h-[1.75rem] w-[4.5rem] rounded-[0.625rem] rounded-r-lg bg-Primary px-[0.88rem] py-1 font-semibold text-White">
            Search
          </Button>
        </div>

        <div className="pb-2 pt-5 text-base font-bold text-Black">
          Recently Posted Job
        </div>
        <div className="grid grid-flow-row gap-2">
          <Card className="flex flex-col gap-5 rounded-[0.625rem] border-0 bg-white shadow-custom">
            {/* Company logo, job title, skills */}
            <CardHeader className="flex flex-row justify-between px-5 pb-0 pt-5">
              <div className="flex flex-row items-center gap-3">
                <div
                  className="h-12 w-12 shrink-0 rounded-[0.47rem] border-[0.14rem] border-Natural3 
                  bg-Natural3 p-[0.35rem]"
                >
                  <img
                    width={36}
                    height={36}
                    src="/images/Company-logo.png"
                    alt="Company logo"
                  />
                </div>
                <div className="flex flex-col">
                  <CardTitle className="text-base font-semibold not-italic text-Black">
                    {demoData.job_title}
                  </CardTitle>
                  {/* Skills */}
                  <div className="flex flex-row gap-[0.31rem]">
                    <CardDescription className="rounded-[0.3125rem] bg-Natural3 px-[0.38rem] py-[0.06rem] text-center text-[0.8125rem] font-normal not-italic leading-[1.375rem]">
                      PHP
                    </CardDescription>
                    <CardDescription className="rounded-[0.3125rem] bg-Natural3 px-[0.38rem] py-[0.06rem] text-center text-[0.8125rem] font-normal not-italic leading-[1.375rem]">
                      Next.js
                    </CardDescription>
                    <CardDescription className="rounded-[0.3125rem] bg-Natural3 px-[0.38rem] py-[0.06rem] text-center text-[0.8125rem] font-normal not-italic leading-[1.375rem]">
                      JavaScript
                    </CardDescription>
                  </div>
                </div>
              </div>
              {/* ic-More button */}
              <div className="">
                <Image
                  src="/iconography/ic_More.svg"
                  alt="More button"
                  width={16}
                  height={16}
                />
              </div>
            </CardHeader>
            <CardContent className="px-5 pb-0">
              <p className="text-[0.875rem] font-normal not-italic leading-[1.375rem] text-Natural7 ">
                {demoData.job_description}
              </p>
            </CardContent>
            <CardFooter className="px-5 pb-5">
              <p>
                {formatSalaryRange(
                  demoData.job_min_salary,
                  demoData.job_max_salary,
                  demoData.job_salary_period,
                )}
              </p>
            </CardFooter>
          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col gap-5 rounded-[0.625rem] border-0 bg-white shadow-custom">
            <CardHeader className="px-5 pb-0 pt-5">
              <div className="h-[2.25rem] w-[2.25rem]">
                <img src="/images/companyPlaceholderLogo.png" />
              </div>
              <CardTitle>{demoData.job_title}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className="px-5 pb-0">
              <p>Card Content</p>
            </CardContent>
            <CardFooter className="px-5 pb-5">
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          {/* Card 3 */}
          <Card className="flex flex-col gap-5 rounded-[0.625rem] border-0 bg-white shadow-custom">
            <CardHeader className="px-5 pb-0 pt-5">
              <div className="h-[2.25rem] w-[2.25rem]">
                <img src="/images/companyPlaceholderLogo.png" />
              </div>
              <CardTitle>{demoData.job_title}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className="px-5 pb-0">
              <p>Card Content</p>
            </CardContent>
            <CardFooter className="px-5 pb-5">
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default CompanyDetails;
