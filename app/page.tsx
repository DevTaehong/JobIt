import Image from "next/image";
import moment from "moment";
import JobCard from "@/components/JobCard";
import InlineJobCard from "@/components/InlineJobCard";

export default function Home() {
  // const currentDate = new Date().toDateString();
  const currentDate = moment().format("dddd,  D MMM YYYY");

  return (
    <>
      <div>
        <nav>{/* <Navbar /> */}</nav>
        <main className="mx-6 w-auto font-manrope sm:mx-20">
          {/* Heading */}
          <section className=" ml-[-.25] mt-[3.13] sm:mt-[3rem]">
            <h1 className="text-[1.375rem] font-bold not-italic leading-8 dark:text-Natural4 sm:text-[2rem] sm:leading-10">
              Welcome to the Job Search Platform for Developers
            </h1>
            {/* Date */}
            <h2 className="hidden text-Natural6 sm:flex sm:text-xl sm:font-medium sm:leading-8 xl:pt-[.88rem]">
              {currentDate}
            </h2>
          </section>
          <div className="flex flex-row flex-wrap">
            {/* Latest Job Posts */}
            <section className="mt-8 w-full xl:w-2/3">
              <div className="flex-row ">
                <span className="flex items-center justify-between sm:mb-[2.06rem] ">
                  <h3 className="text-[1.375rem] font-bold leading-8 dark:text-White">
                    Latest Job Posts
                  </h3>
                  <button className="flex items-center gap-2 rounded-[0.625rem] border px-[.62rem] py-[.44rem] font-sans	text-xs font-medium leading-6 text-Natural7 dark:border-DarkBG3">
                    See All
                    <div className="sm:hidden">
                      <Image
                        src="/iconography/cheveron.svg"
                        alt="cheveron"
                        width={16}
                        height={16}
                      />
                    </div>
                  </button>
                </span>
                <div className="flex flex-col flex-wrap gap-[4.76%] sm:flex-row [&>div]:mb-[4.76%] [&>div]:w-full  [&>div]:md:w-[47.25%]  [&>div]:lg:w-[29.75%] [&>div]:xl:w-[47.62%]">
                  {/* Card One */}
                  <div className="">
                    <JobCard
                      jobTitle={"nfgkaslnglr"}
                      jobDescription={
                        "Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us."
                      }
                      salary={null}
                      salaryPeriod={null}
                      companyLogo={""}
                      jobSkills={null}
                      employmentType={""}
                      expirationDate={0}
                    />
                  </div>
                  <div className="">
                    <JobCard
                      jobTitle={""}
                      jobDescription={
                        "Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us."
                      }
                      salary={null}
                      salaryPeriod={null}
                      companyLogo={""}
                      jobSkills={null}
                      employmentType={""}
                      expirationDate={0}
                    />
                  </div>
                  {/* Card Two */}
                  <div className="">
                    {" "}
                    <JobCard
                      jobTitle={""}
                      jobDescription={
                        "Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us."
                      }
                      salary={null}
                      salaryPeriod={null}
                      companyLogo={""}
                      jobSkills={null}
                      employmentType={""}
                      expirationDate={0}
                    />
                  </div>
                  {/* Card Three */}
                  <div className="">
                    {" "}
                    <JobCard
                      jobTitle={""}
                      jobDescription={
                        "Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us."
                      }
                      salary={null}
                      salaryPeriod={null}
                      companyLogo={""}
                      jobSkills={null}
                      employmentType={""}
                      expirationDate={0}
                    />
                  </div>
                  <div className="">
                    {" "}
                    <JobCard
                      jobTitle={""}
                      jobDescription={
                        "Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us."
                      }
                      salary={null}
                      salaryPeriod={null}
                      companyLogo={""}
                      jobSkills={null}
                      employmentType={""}
                      expirationDate={0}
                    />
                  </div>
                  {/* Card Four */}
                  <div className="">
                    {" "}
                    <JobCard
                      jobTitle={""}
                      jobDescription={
                        "Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us."
                      }
                      salary={null}
                      salaryPeriod={null}
                      companyLogo={""}
                      jobSkills={null}
                      employmentType={""}
                      expirationDate={0}
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* Recomended For You */}
            <section className="order-last mt-[2.19rem] w-full xl:order-none xl:w-1/3">
              <span className="flex justify-between">
                <h3 className="text-[1.375rem] font-bold leading-8 dark:text-White lg:ml-10">
                  Recommended For You
                </h3>
                <button className="flex items-center gap-2 rounded-[0.625rem] border px-[.62rem] py-[.44rem] font-sans	text-xs font-medium leading-6 text-Natural7 dark:border-DarkBG3">
                  See All
                  <div className="sm:hidden">
                    <Image
                      src="/iconography/cheveron.svg"
                      alt="cheveron"
                      width={16}
                      height={16}
                    />
                  </div>
                </button>
              </span>
              {/* Inline Job Cards */}
              <div className="mt-[2.06rem] flex-row gap-3 pl-10">
                <div>
                  <InlineJobCard
                    employerName={""}
                    jobTitle={""}
                    salary={null}
                    salaryPeriod={null}
                    companyLogo={""}
                    jobState={""}
                    jobCity={""}
                    employmentType={""}
                  />
                </div>
                <div>
                  {" "}
                  <InlineJobCard
                    employerName={""}
                    jobTitle={""}
                    salary={null}
                    salaryPeriod={null}
                    companyLogo={""}
                    jobState={""}
                    jobCity={""}
                    employmentType={""}
                  />
                </div>
                <div>
                  {" "}
                  <InlineJobCard
                    employerName={""}
                    jobTitle={""}
                    salary={null}
                    salaryPeriod={null}
                    companyLogo={""}
                    jobState={""}
                    jobCity={""}
                    employmentType={""}
                  />
                </div>
                <div>
                  {" "}
                  <InlineJobCard
                    employerName={""}
                    jobTitle={""}
                    salary={null}
                    salaryPeriod={null}
                    companyLogo={""}
                    jobState={""}
                    jobCity={""}
                    employmentType={""}
                  />
                </div>
              </div>
            </section>
            {/* Featured Compaines */}
            <section className="mt-10 w-full">
              <span>
                <h3 className="text-2xl font-bold leading-10 dark:text-White">
                  Featured Companies
                </h3>
              </span>
              <div className="mt-[1.25rem] flex-row gap-[2.25rem] sm:flex">
                <div>Feature</div>
                <div>Feature</div>
                <div>Feature</div>
              </div>
            </section>
          </div>
          {/* Schedule */}
          <section className="mb-[2.62rem] mt-[4rem] flex-row sm:hidden">
            <span className="flex items-center justify-between">
              <h1 className="text-2xl font-bold leading-10 dark:text-White">
                Schedule
              </h1>
              <div className="inline-flex items-center pr-[.62rem] font-sans text-xs font-medium leading-5">
                <p className="text-Natural6">Sort by:</p>
                {/* Due Date */}
                <p className="font-sans text-[#0BAB7C]">This Week</p>
                <Image
                  src="/iconography/cheveron.svg"
                  alt="cheveron"
                  width={16}
                  height={16}
                />
              </div>
            </span>
            <div className="gap-14">
              <div>Inline Card</div>
              <div>Inline Card</div>
              <div>Inline Card</div>
            </div>
            <button className="flex w-[18.5rem] items-center justify-center gap-[.625rem] px-3 py-3.5 dark:text-Natural6">
              See All Schedule
            </button>
          </section>
        </main>
      </div>
    </>
  );
}
