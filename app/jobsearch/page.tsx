import JobSearchCard from "@/components/JobSearchCard";
import SearchBar from "@/components/SearchBar";
import moment from "moment";
import Image from "next/image";

const JobSearch = () => {
  const currentDate = moment().format("dddd,  D MMM YYYY");

  return (
    <>
      <div className="mx-[1.5rem] mb-[4.06rem] mt-[2.5rem] flex flex-col xl:mx-[5rem] xl:mb-[3.62rem] xl:mt-[3.12rem]">
        {/* Heading */}
        <section>
          <h1 className="ml-[.13rem] text-[1.375rem] font-bold not-italic leading-8 dark:text-Natural4 xl:text-[2rem] xl:leading-10">
            Let’s find your dream job
          </h1>
          <h2 className="mt-[.25rem] text-base font-medium leading-6 text-Natural6 xl:mt-[.87rem] xl:text-xl xl:font-medium xl:leading-8">
            {currentDate}
          </h2>
        </section>
        {/* Main */}
        {/* Search Bar */}
        <section className="mt-[1.87rem] flex h-[20.43rem] w-auto flex-row xl:h-[5rem] ">
          <SearchBar />
        </section>
        <section className="mt-[1.87rem] flex w-auto gap-[5rem] xl:mt-[3.69rem]">
          {/*  Type of Employment */}
          <section className="hidden h-[64.9rem] w-[15.6rem] bg-green-500 xl:flex"></section>
          {/* Job Cards */}
          <div className="flex w-[80rem] flex-col gap-[2.25rem]">
            <div className="flex justify-between">
              <div className="flex gap-[.625rem]">
                <p className="text-base font-medium	leading-6 text-Natural6 xl:text-[1.125rem] xl:font-semibold">
                  Showing:
                </p>
                <p className="text-base	font-semibold	leading-6	dark:text-white xl:text-[1.125rem] xl:font-semibold">
                  10 Jobs
                </p>
              </div>
              <div className="flex items-center gap-[.625rem]">
                <p className="hidden text-[.875rem] font-semibold leading-6	text-Natural6 xl:flex">
                  Sort by:
                </p>
                <p className="text-[.875rem] font-semibold leading-6	dark:text-Natural5	xl:font-bold">
                  Relevence
                </p>
                <Image
                  className="gap-[.5rem]"
                  src="/iconography/chevron.svg"
                  alt="chevron"
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <section className="flex flex-col gap-[1.88rem] xl:h-[50rem] xl:gap-[1.38rem]">
              <JobSearchCard
                employerName={""}
                jobTitle={""}
                jobDescription={""}
                salary={null}
                salaryPeriod={null}
                companyLogo={""}
                jobSkills={null}
                jobState={""}
                jobCity={""}
                postDate={0}
              />
              <JobSearchCard
                employerName={""}
                jobTitle={""}
                jobDescription={""}
                salary={null}
                salaryPeriod={null}
                companyLogo={""}
                jobSkills={null}
                jobState={""}
                jobCity={""}
                postDate={0}
              />
            </section>
            <section className="h-[2.25rem] bg-red-500"></section>
          </div>
        </section>
        {/* Page Selector */}
      </div>
    </>
  );
};

export default JobSearch;
