import Image from "next/image";
import React from "react";

type Props = {};

const JobDetailCard = (props: Props) => {
  return (
    <>
      {/* Box */}
      {/* Change width to full after when done */}
      <main className="h-[151.6rem] w-[20.44rem] shrink-0 border font-manrope lg:ml-20 lg:h-[96.8125rem] lg:w-[53.75rem]">
        {/* Contents */}
        <div className="pt-5">
          {/* Top Images */}
          <section className="ml-[1.25rem]">
            {/* Company Logo */}
            <div className="absolute ml-[1.87] shrink-0 border pl-[.62rem] pt-[7.37rem]">
              <Image
                src="/iconography/Company Logo.png"
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
                  Passionate Programmer
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
                UIHUT Technologies LLC
              </h2>
              <div className="mt-[.037rem] flex gap-[.31rem] text-center	text-[.812rem] font-medium leading-[1.125rem] text-Natural7">
                <h3>Sylhet, BD</h3>
                <Image
                  src="/iconography/Oval.svg"
                  alt="oval"
                  width={3}
                  height={3}
                />
                <h3>3 days ago</h3>
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
                    Minimum 1 Year
                  </p>
                </div>
                <div>
                  <h3 className="text-[.812rem] font-medium leading-5	text-Natural6">
                    Work Level
                  </h3>
                  <p className="text-[.875rem] font-semibold leading-6 text-Natural8">
                    Senior Level
                  </p>
                </div>
              </span>
              <span className="flex gap-[2.44rem] p-[.62rem]">
                <div>
                  <h3 className="text-[.812rem] font-medium leading-5	text-Natural6">
                    Employee Type
                  </h3>
                  <p className="text-[.875rem] font-semibold leading-6 text-Natural8">
                    Full Time Jobs
                  </p>
                </div>
                <div>
                  <h3 className="text-[.812rem] font-medium leading-5	text-Natural6">
                    Offer Salary
                  </h3>
                  <p className="text-[.875rem] font-semibold leading-6 text-Natural8">
                    $2150,0 / M
                  </p>
                </div>
              </span>
            </section>
            {/* Buttons */}
            <section className="mt-[.88rem] flex justify-center gap-[.625rem]">
              <button className="w-[8.5rem] rounded-[.625rem] bg-Primary px-[.875rem] py-[.625rem] text-center text-[.9375rem] font-semibold	leading-6">
                Apply Now
              </button>
              <button className="w-[8.5rem] rounded-[.625rem] border border-solid px-[.875rem] py-[.625rem] text-center text-[.9375rem] font-semibold leading-6">
                Message
              </button>
            </section>
            {/* About the job */}
            <section className="mt-[1.88rem]">
              <h2 className="text-base font-bold	leading-6">About The Job</h2>
              <p className="pt-[.62rem] text-[.875rem] font-normal leading-[1.375rem] text-Natural7">
                Here at UIHUT, we are a passionate, fun-loving, growing team. We
                are looking for passionate programmers who want to solve
                technical challenges and learn and incorporate new technologies
                into their skillset to join our team and grow with us. In this
                role, you would use various tech stacks, including Laravel, Node
                JS (Adonis JS), Vue JS, React JS, Nuxt JS, Redis, MySQL,
                MongoDB, and CSS. You will be engaged across the software
                development life cycle to create and modify platforms and
                capabilities in a collaborative and agile environment.
              </p>
            </section>
            {/* Responsibilities */}
            <section className="mb-[1.87rem] mt-[3.62rem]">
              <h2 className="text-base font-bold	leading-6">Responsibilities</h2>
              <div className="flex flex-row pt-[.75rem]">
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
              <div className="flex flex-row pt-[.75rem]">
                <Image
                  className="mt-2 h-[.5rem] stroke-2"
                  src="/iconography/Oval (2).svg"
                  alt="oval"
                  width={8}
                  height={8}
                />
                <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7">
                  Carry software products through the software development life
                  cycle (SDLC)
                </p>
              </div>
              <div className="flex flex-row pt-[.75rem]">
                <Image
                  className="mt-2 h-[.5rem] stroke-2"
                  src="/iconography/Oval (2).svg"
                  alt="oval"
                  width={8}
                  height={8}
                />
                <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7">
                  Write clean, concise, and efficient code
                </p>
              </div>
              <div className="flex flex-row pt-[.75rem]">
                <Image
                  className="mt-2 h-[.5rem] stroke-2"
                  src="/iconography/Oval (2).svg"
                  alt="oval"
                  width={8}
                  height={8}
                />
                <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7">
                  Manage code documentation and version control
                </p>
              </div>{" "}
              <div className="flex flex-row pt-[.75rem]">
                <Image
                  className="mt-2 h-[.5rem] stroke-2"
                  src="/iconography/Oval (2).svg"
                  alt="oval"
                  width={8}
                  height={8}
                />
                <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7">
                  Troubleshoot and debug software
                </p>
              </div>
              <div className="flex flex-row pt-[.75rem]">
                <Image
                  className="mt-2 h-[.5rem] stroke-2"
                  src="/iconography/Oval (2).svg"
                  alt="oval"
                  width={8}
                  height={8}
                />
                <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7">
                  Participate in on-call rotation to respond to production
                  issues
                </p>
              </div>
            </section>
            {/* Qualifications and Skill Sets */}
            <section className="mt-[1.87rem]">
              <h2 className="text-base font-bold	leading-6">
                Qualifications and Skill Sets
              </h2>
              <div className="flex flex-row pt-[.75rem]">
                <Image
                  className="mt-2 h-[.5rem] stroke-2"
                  src="/iconography/Oval (2).svg"
                  alt="oval"
                  width={8}
                  height={8}
                />
                <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7">
                  3+ years of professional experience working on this field
                </p>
              </div>
              <div className="flex flex-row pt-[.75rem]">
                <Image
                  className="mt-2 h-[.5rem] stroke-2"
                  src="/iconography/Oval (2).svg"
                  alt="oval"
                  width={8}
                  height={8}
                />
                <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7">
                  Bachelors degree in computer science, software engineering, or
                  related field
                </p>
              </div>
              <div className="flex flex-row pt-[.75rem]">
                <Image
                  className="mt-2 h-[.5rem] stroke-2"
                  src="/iconography/Oval (2).svg"
                  alt="oval"
                  width={8}
                  height={8}
                />
                <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7">
                  Proficiency in at least one programming language (e.g., Java,
                  C#, C++)
                </p>
              </div>
              <div className="flex flex-row pt-[.75rem]">
                <Image
                  className="mt-2 h-[.5rem] stroke-2"
                  src="/iconography/Oval (2).svg"
                  alt="oval"
                  width={8}
                  height={8}
                />
                <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7">
                  Back-end development expertise
                </p>
              </div>{" "}
              <div className="flex flex-row pt-[.75rem]">
                <Image
                  className="mt-2 h-[.5rem] stroke-2"
                  src="/iconography/Oval (2).svg"
                  alt="oval"
                  width={8}
                  height={8}
                />
                <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7">
                  Strong problem-solving and communication skills
                </p>
              </div>
              <div className="flex flex-row pt-[.75rem]">
                <Image
                  className="mt-2 h-[.5rem] stroke-2"
                  src="/iconography/Oval (2).svg"
                  alt="oval"
                  width={8}
                  height={8}
                />
                <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7">
                  Experience with build tools such as Gradle and Maven
                </p>
              </div>
              <div className="flex flex-row pt-[.75rem]">
                <Image
                  className="mt-2 h-[.5rem] stroke-2"
                  src="/iconography/Oval (2).svg"
                  alt="oval"
                  width={8}
                  height={8}
                />
                <p className="pl-[.63rem] text-base	font-medium	leading-6 text-Natural7">
                  Good working knowledge of the Linux operating system
                </p>
              </div>
            </section>
            {/* About The Company */}
            <section className="mt-[1.87rem]">
              <h2 className="text-base font-bold	leading-6">
                About The Company
              </h2>
              <span className="mt-[1.25rem] flex">
                <Image
                  className="object-contain"
                  src="/iconography/Company Logo.png"
                  alt="oval"
                  width={34}
                  height={34}
                />
                <div className="flex flex-col items-start gap-[.125rem] pl-[1.25rem]">
                  <h3 className="text-base font-semibold leading-6">UI HUT</h3>
                  <p className="text-[.9375rem] font-medium	leading-6 text-Natural7">
                    203,765 Followers
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
                UIHUT is a design and coding resources platform for designers,
                developers and entrepreneurs. Were building a digital
                marketplace to simplify the creation of websites, apps and
                software on any device. UIHUT is based in New York City and is
                privately funded by some of the industrys leading investors.
              </p>
            </section>
          </section>
        </div>
      </main>
    </>
  );
};

export default JobDetailCard;
