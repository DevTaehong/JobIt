import Image from "next/image";
import React from "react";

type Props = {};

const JobDetailCard = (props: Props) => {
  return (
    <>
      {/* Box */}
      <main className="h-[96.8125rem] w-[53.75rem] shrink-0 border sm:ml-20">
        {/* Contents */}
        <div>
          {/* Top Images */}
          <section>
            {/* Cover Photo */}
            <div className=" px-5 pt-5">
              <Image src="/test.jpg" alt="test" width={777.6} height={192} />
            </div>
            {/* Company Logo */}
            <div className="h-[4rem] w-[4rem] shrink-0 pl-10 pt-[10.56rem]">
              <Image
                src="/images/Logo.svg"
                alt="company logo"
                width={64}
                height={64}
              />
            </div>
          </section>
          {/* Heading */}
          <section className="pt-[1.84rem]">
            {/* Job Title */}
            <div className="px-[2.34rem] ">
              <h1>Passionate Programmer</h1>
            </div>
            {/* Buttons */}
            <div></div>
          </section>
          {/* Requirements */}
          <section>
            {/* Experience */}
            <div></div>

            {/* Work Level */}
            <div></div>

            {/* Employee Type */}
            <div></div>

            {/* Offer Salary */}
            <div></div>
          </section>
          {/* Main Text */}
          <section>
            {/* About */}
            <div>
              Here at UIHUT, we are a passionate, fun-loving, growing team. We
              are looking for passionate programmers who want to solve technical
              challenges and learn and incorporate new technologies into their
              skillset to join our team and grow with us. In this role, you
              would use various tech stacks, including Laravel, Node JS (Adonis
              JS), Vue JS, React JS, Nuxt JS, Redis, MySQL, MongoDB, and CSS.
              You will be engaged across the software development life cycle to
              create and modify platforms and capabilities in a collaborative
              and agile environment.
            </div>
            {/* Responsibilities */}
            <div>
              Responsibilities Design, build, test, and deploy software
              applications and features Carry software products through the
              software development life cycle (SDLC) Write clean, concise, and
              efficient code Manage code documentation and version control
              Troubleshoot and debug software Participate in on-call rotation to
              respond to production issues
            </div>
            {/* Qualifications and Skill Sets */}
            <div>
              Qualifications and Skill Sets 3+ years of professional experience
              working on this field Bachelors degree in computer science,
              software engineering, or related field Proficiency in at least one
              programming language (e.g., Java, C#, C++) Back-end development
              expertise Strong problem-solving and communication skills
              Experience with build tools such as Gradle and Maven Good working
              knowledge of the Linux operating system
            </div>
          </section>
          {/* Company Info */}
          <section>
            {/* Title */}
            <div>About The Company</div>
            {/* Image */}
            <div>Full width bar</div>
            {/* About */}
            <div>
              UIHUT is a design and coding resources platform for designers,
              developers and entrepreneurs. Were building a digital marketplace
              to simplify the creation of websites, apps and software on any
              device. UIHUT is based in New York City and is privately funded by
              some of the industrys leading investors.
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default JobDetailCard;
