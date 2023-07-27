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
  estimatedSalaries?: number;
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
      <main className="h-[151.6rem] shrink-0 border font-manrope lg:h-[96.8125rem]">
        {/* Contents */}
        <div className="pt-5">
          {/* Top Images */}
          <section className="ml-[1.25rem]">
            {/* Company Logo */}
            <div className="absolute ml-[1.87] shrink-0 border pl-[.62rem] pt-[7.37rem]">
              <img
                src={employerLogo}
                alt="company logo"
                width={46}
                height={46}
              />
            </div>
            {/* Cover Photo */}
            <div>
              <Image
                className="bg-Primary"
                src="/iconography/Rectangle.svg"
                alt="test"
                width={295}
                height={150}
              />
            </div>
          </section>
          {/* Heading */}
          <section className="ml-[1.87rem]">
            <section className="pt-[1.75rem]">
              {/* Job Title */}
              <div className="flex items-center">
                <h1 className="pr-[1.25rem] text-xs font-semibold leading-6">
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
              <h2 className="text-[.812rem]	font-medium leading-[1.125rem] text-Natural7">
                {employerName}
              </h2>
              <div className="mt-[.037rem] flex gap-[.31rem] text-center	text-[.812rem] font-medium leading-[1.125rem] text-Natural7">
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
                <h3>{postDate}</h3>
              </div>
            </section>
            {/* Four specs */}
            <section className="mt-[1.75rem]">
              <span className="flex gap-[1.88rem] p-[.62rem]">
                <div>
                  <h3 className="text-[.812rem] font-medium leading-5	text-Natural6">
                    Experience
                  </h3>
                  <p className="text-[.875rem] font-semibold leading-6 text-Natural8">
                    {jobRequiredExperience}
                  </p>
                </div>
                <div>
                  <h3 className="text-[.812rem] font-medium leading-5	text-Natural6">
                    Work Level
                  </h3>
                  <p className="text-[.875rem] font-semibold leading-6 text-Natural8">
                    {workLevel}
                  </p>
                </div>
              </span>
              <span className="flex gap-[2.44rem] p-[.62rem]">
                <div>
                  <h3 className="text-[.812rem] font-medium leading-5	text-Natural6">
                    Employee Type
                  </h3>
                  <p className="text-[.875rem] font-semibold leading-6 text-Natural8">
                    {jobEmploymentType}
                  </p>
                </div>
                <div>
                  <h3 className="text-[.812rem] font-medium leading-5	text-Natural6">
                    Offer Salary
                  </h3>
                  {estimatedSalaries ? (
                    <p className="text-[.875rem] font-semibold leading-6 text-Natural8">
                      {estimatedSalaries}
                    </p>
                  ) : (
                    <p className="text-[.875rem] font-semibold leading-6 text-Natural8">
                      N/A
                    </p>
                  )}
                </div>
              </span>
            </section>
            {/* Buttons */}
            <section className="mt-[.88rem] flex justify-center gap-[.625rem]">
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
            {/* About the job */}
            <section className="mt-[1.88rem]">
              <h2 className="text-base font-bold	leading-6">About The Job</h2>
              <p className="pt-[.62rem] text-[.875rem] font-normal leading-[1.375rem] text-Natural7">
                {jobDescription}
              </p>
            </section>
            {/* Responsibilities */}
            <section className="mb-[1.87rem] mt-[3.62rem]">
              <h2 className="text-base font-bold	leading-6">Responsibilities</h2>
              {jobRequiredSkills &&
                jobRequiredSkills.map((jobRequiredSkills, idx) => (
                  <div className="flex flex-row pt-[.75rem]" key={idx}>
                    <Image
                      className="mt-2 h-[.5rem] stroke-2"
                      src="/iconography/Oval (2).svg"
                      alt="oval"
                      width={8}
                      height={8}
                    />
                    <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7">
                      Design, build, test, and deploy software applications and
                      features
                    </p>
                  </div>
                ))}
            </section>
            {/* Qualifications and Skill Sets */}
            <section className="mt-[1.87rem]">
              <h2 className="text-base font-bold	leading-6">
                Qualifications and Skill Sets
              </h2>
              {qualifications ? (
                qualifications.map((qualificationDescription, idx) => (
                  <div className="flex flex-row pt-[.75rem]" key={idx}>
                    <Image
                      className="mt-2 h-[.5rem] stroke-2"
                      src="/iconography/Oval (2).svg"
                      alt="oval"
                      width={8}
                      height={8}
                    />
                    <p className="pl-[.63rem] text-base font-medium leading-6 text-Natural7">
                      {qualificationDescription}
                    </p>
                  </div>
                ))
              ) : (
                <div className="flex flex-row pt-[.75rem]">
                  <Image
                    className="mt-2 h-[.5rem] stroke-2"
                    src="/iconography/Oval (2).svg"
                    alt="oval"
                    width={8}
                    height={8}
                  />
                  <p className="pl-[.63rem] text-base font-medium leading-6 text-Natural7">
                    N/A
                  </p>
                </div>
              )}
            </section>
            {/* About The Company */}
            <section className="mt-[1.87rem]">
              <h2 className="text-base font-bold	leading-6">
                About The Company
              </h2>
              <span className="mt-[1.25rem] flex">
                <img
                  className="object-contain"
                  src={employerLogo}
                  alt="oval"
                  width={34}
                  height={34}
                />
                <div className="flex flex-col items-start gap-[.125rem] pl-[1.25rem]">
                  <h3 className="text-base font-semibold leading-6">
                    {employerName}
                  </h3>
                  <p className="text-[.9375rem] font-medium	leading-6 text-Natural7">
                    {followers}
                  </p>
                </div>
              </span>
              <button className="mt-[.88rem] flex w-[11.1875rem] items-center justify-center gap-[.375rem] rounded-[.625rem] border border-Primary px-[.4375rem]	py-[.625rem]">
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
              <p className="mb-[1.87rem] mt-[1.25rem] text-base	font-normal	leading-6 text-Natural7">
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
