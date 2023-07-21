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
        <div className="px-5 pt-5">
          {/* Top Images */}
          <section>
            {/* Company Logo */}
            <div className="absolute h-[4rem] w-[4rem] shrink-0 pl-[1.87] pt-[8.62rem]">
              <Image
                src="/images/Logo.svg"
                alt="company logo"
                width={64}
                height={64}
              />
            </div>
            {/* Cover Photo */}
            <div>
              <Image src="/test.jpg" alt="test" width={295} height={150} />
            </div>
          </section>
          {/* Heading */}
          <section className="pt-[1.88rem]">
            {/* Job Title */}
            <div className="flex items-center pt-[1.88rem]">
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
                src="/iconography/Oval .svg"
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
          <section className="mt-[.88rem]">
            <button className="pr-[.96rem]">Apply Now</button>
            <button>Message</button>
          </section>
          {/* About the job */}
          <section className="pt-[1.88rem]">
            <h2>About The Job</h2>
            <p className="pt-[.62rem]">
              Here at UIHUT, we are a passionate, fun-loving, growing team. We
              are looking for passionate programmers who want to solve technical
              challenges and learn and incorporate new technologies into their
              skillset to join our team and grow with us. In this role, you
              would use various tech stacks, including Laravel, Node JS (Adonis
              JS), Vue JS, React JS, Nuxt JS, Redis, MySQL, MongoDB, and CSS.
              You will be engaged across the software development life cycle to
              create and modify platforms and capabilities in a collaborative
              and agile environment.
            </p>
          </section>
          {/* Responsibilities */}
          <section>
            <h2>Responsibilities</h2>
            <p>
              Responsibilities Design, build, test, and deploy software
              applications and features Carry software products through the
              software development life cycle (SDLC) Write clean, concise, and
              efficient code Manage code documentation and version control
              Troubleshoot and debug software Participate in on-call rotation to
              respond to production issues
            </p>
          </section>
          {/* Qualifications and Skill Sets */}
          <section>
            <h2>Qualifications and Skill Sets</h2>
            <p>
              Qualifications and Skill Sets 3+ years of professional experience
              working on this field Bachelors degree in computer science,
              software engineering, or related field Proficiency in at least one
              programming language (e.g., Java, C#, C++) Back-end development
              expertise Strong problem-solving and communication skills
              Experience with build tools such as Gradle and Maven Good working
              knowledge of the Linux operating system
            </p>
          </section>
          {/* About The Company */}
          <section>
            <h2>About The Company</h2>
            <span></span>
            <button></button>
            <p>
              UIHUT is a design and coding resources platform for designers,
              developers and entrepreneurs. Were building a digital marketplace
              to simplify the creation of websites, apps and software on any
              device. UIHUT is based in New York City and is privately funded by
              some of the industrys leading investors.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default JobDetailCard;
