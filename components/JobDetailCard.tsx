import Image from "next/image";
import React from "react";

type Props = {
  employerName?: string;
  employerLogo?: String;
  qualifications?: string[];
  jobRequiredSkills: string[];
  jobEmploymentType?: string;
  jobTitle?: string;
  jobApplyLink?: string;
  jobDescription?: string;
  jobCity?: string;
  jobState?: string;
  estimatedSalaries?: string;
  jobRequiredExperience?: string;
  postDate: number;
  workLevel: string;
  aboutTheCompany: string;
  followers: number;
};

const JobDetailCard = ({
  employerName,
  employerLogo,
  qualifications,
  jobRequiredSkills,
  jobEmploymentType,
  jobTitle,
  jobApplyLink,
  jobDescription,
  jobCity,
  jobState,
  estimatedSalaries,
  jobRequiredExperience,
  postDate,
  workLevel,
  aboutTheCompany,
  followers,
}: Props) => {
  return (
    <>
      {/* Box */}
      {/* Change width to full after when done */}
      <main className=" shrink-0 border font-manrope lg:ml-20">
        {/* Contents */}
        <div className="pt-5">
          {/* Top Images */}
          <section className="mx-[1.25rem]">
            {/* Company Logo */}
            <div className="absolute ml-[1.87] h-[2.88rem] w-[2.88rem] shrink-0 pl-[.62rem] pt-[7.37rem] lg:h-[4rem] lg:w-[4rem]">
              <img
                className="object-contain"
                src="/iconography/CompanyLogo.svg"
                alt="company logo"
              />
            </div>
            {/* Cover Photo */}
            <div className="h-[9.38rem] w-full lg:h-[12rem]">
              <img
                className="rounded-t-xl object-fill"
                src="/iconography/job-detail.svg"
                alt="cover"
              />
            </div>
          </section>
          {/* Heading */}
          <section className="mx-[1.87rem]">
            <section className="pt-[1.75rem]">
              {/* Job Title */}
              <div className="flex items-center">
                <h1 className="pr-[1.25rem] text-xs font-semibold leading-6 lg:text-2xl	lg:font-bold	lg:leading-8">
                  {jobTitle}
                </h1>
                <div className="pr-[2.06rem]">
                  <Image
                    src="/iconography/uiHut-icon-ic_Saved.svg"
                    alt="uiHunt"
                    width={20}
                    height={20}
                  />
                </div>
                <Image
                  src="/iconography/more-vertical.svg"
                  alt="more-vertical"
                  width={24}
                  height={24}
                />
              </div>
              {/* Sub Title */}
              <section className="flex lg:justify-between">
                <section className="lg:flex">
                  <h2 className="text-[.812rem]	font-medium leading-[1.125rem] text-Natural7 lg:text-xs	lg:font-semibold	lg:leading-6">
                    {employerName}
                  </h2>
                  <div className="mt-[.037rem] flex gap-[.31rem] text-center	text-[.812rem] font-medium leading-[1.125rem] text-Natural7 lg:text-xs	lg:font-semibold	lg:leading-6">
                    <h3>
                      {jobCity}
                      {jobState}
                    </h3>
                    <Image
                      src="/iconography/Oval.svg"
                      alt="oval"
                      width={3}
                      height={3}
                    />
                    <h3 className="text-center	text-[.812rem] font-medium leading-[1.125rem] text-Natural7 lg:text-xs	lg:font-semibold	lg:leading-6">
                      {postDate}
                    </h3>
                  </div>
                </section>
                <section className="mt-[-1.6rem] hidden lg:block">
                  <a
                    className="w-[8.5rem] rounded-[.625rem] bg-Primary px-[.875rem] py-[.625rem] text-center text-[.9375rem] font-semibold	leading-6 "
                    href={jobApplyLink}
                  >
                    Apply Now
                  </a>
                  <button className="w-[8.5rem] rounded-[.625rem] border border-solid px-[.875rem] py-[.625rem] text-center text-[.9375rem] font-semibold leading-6">
                    Message
                  </button>
                </section>
              </section>
              {/* Four specs */}
              <section className="mt-[1.75rem] lg:flex">
                <span className="flex gap-[1.88rem] p-[.62rem] lg:gap-[2.5rem]">
                  <div className="w-[6.4rem]">
                    <h3 className="text-[.812rem] font-medium leading-5	text-Natural6 lg:text-lg lg:font-semibold lg:leading-6">
                      Experience
                    </h3>
                    <p className="text-[.875rem] font-semibold leading-6 text-Natural8 lg:text-base">
                      {jobRequiredExperience}
                    </p>
                  </div>
                  <div className="w-[6.4rem]">
                    <h3 className="text-[.812rem] font-medium leading-5	text-Natural6 lg:text-lg lg:font-semibold lg:leading-6">
                      Work Level
                    </h3>
                    <p className="text-[.875rem] font-semibold leading-6 text-Natural8 lg:text-base">
                      {workLevel}
                    </p>
                  </div>
                </span>
                <span className="flex gap-[1.88rem] p-[.62rem] lg:gap-[2.5rem] lg:text-base">
                  <div className="w-[6.4rem]">
                    <h3 className="text-[.812rem] font-medium leading-5	text-Natural6 lg:text-lg lg:font-semibold lg:leading-6">
                      Employee Type
                    </h3>
                    <p className="text-[.875rem] font-semibold leading-6 text-Natural8 lg:text-base">
                      {jobEmploymentType}
                    </p>
                  </div>
                  <div className="w-[6.4rem]">
                    <h3 className="text-[.812rem] font-medium leading-5	text-Natural6 lg:text-lg lg:font-semibold lg:leading-6">
                      Offer Salary
                    </h3>
                    <p className="text-[.875rem] font-semibold leading-6 text-Natural8 lg:text-base">
                      {estimatedSalaries}
                    </p>
                  </div>
                </span>
              </section>
              {/* Buttons */}
              {/* lg:-order-1 is not working */}
              <section className="mt-[.88rem] flex gap-[.625rem] lg:hidden">
                <a
                  className="w-[8.5rem] rounded-[.625rem] bg-Primary px-[.875rem] py-[.625rem] text-center text-[.9375rem] font-semibold	leading-6 "
                  href={jobApplyLink}
                >
                  Apply Now
                </a>
                <button className="w-[8.5rem] rounded-[.625rem] border border-solid px-[.875rem] py-[.625rem] text-center text-[.9375rem] font-semibold leading-6">
                  Message
                </button>
              </section>
            </section>
            {/* About the job */}
            <section className="mt-[1.88rem]">
              <h2 className="text-base font-bold	leading-6 lg:text-lg">
                About The Job
              </h2>
              <p className="pt-[.62rem] text-[.875rem] font-normal leading-[1.375rem] text-Natural7 lg:text-base lg:leading-6">
                {jobDescription}
              </p>
            </section>
            {/* Responsibilities */}
            <section className="mb-[1.87rem] mt-[3.62rem]">
              <h2 className="text-base font-bold leading-6 lg:text-lg">
                Responsibilities
              </h2>
              {jobRequiredSkills.map((jobRequiredSkills, idx) => (
                <div className="flex flex-row pt-[.75rem]" key={idx}>
                  <Image
                    className="mt-2 h-[.5rem] stroke-2"
                    src="/iconography/Oval (2).svg"
                    alt="oval"
                    width={8}
                    height={8}
                  />
                  <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7 lg:text-base lg:leading-6">
                    Design, build, test, and deploy software applications and
                    features
                  </p>
                </div>
              ))}
            </section>
            {/* Qualifications and Skill Sets */}
            <section className="mt-[1.87rem]">
              <h2 className="text-base font-bold	leading-6 lg:text-lg">
                Qualifications and Skill Sets
              </h2>
              {qualifications.map((qualificationDescription, idx) => (
                <div className="flex flex-row pt-[.75rem]" key={idx}>
                  <Image
                    className="mt-2 h-[.5rem] stroke-2"
                    src="/iconography/Oval (2).svg"
                    alt="oval"
                    width={8}
                    height={8}
                  />
                  <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7 lg:text-base lg:leading-6">
                    {qualificationDescription}
                  </p>
                </div>
              ))}
            </section>
            {/* About The Company */}
            <section className="mt-[1.87rem]">
              <h2 className="text-base font-bold	leading-6 lg:text-lg">
                About The Company
              </h2>
              <span className="w-full lg:flex lg:items-center lg:justify-between">
                <span className="mt-[1.25rem] flex">
                  <div className="lgh[3.13rem] h-[2.13rem] w-[2.13rem] lg:w-[3.13rem]">
                    <img
                      className="object-contain"
                      src="/iconography/CompanyLogo.svg"
                      alt="oval"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[.125rem] pl-[1.25rem]">
                    <h3 className="text-base font-semibold leading-6 lg:text-lg lg:font-bold	">
                      {employerName}
                    </h3>
                    <p className="text-[.9375rem] font-medium	leading-6 text-Natural7 lg:text-base">
                      {followers}
                    </p>
                  </div>
                </span>
                <button className="mr-[2.88rem] mt-[.88rem] flex h-[1.18rem] w-[11.1875rem] items-center justify-center gap-[.375rem] rounded-[.625rem] border	border-Primary  px-[.4375rem] py-[.625rem] lg:w-[5.13rem]">
                  <Image
                    className="shrink-0"
                    src="/iconography/plus.svg"
                    alt="oval"
                    width={18}
                    height={18}
                  />
                  <p className="text-[.8125rem] font-medium	leading-[1.125rem] text-Primary">
                    Follow
                  </p>
                </button>
              </span>
              <p className="mb-[1.87rem] mt-[1.25rem] text-base	font-normal	leading-6 text-Natural7 lg:text-base lg:leading-6">
                {aboutTheCompany}
              </p>
            </section>
          </section>
        </div>
      </main>
    </>
  );
};

export default JobDetailCard;
