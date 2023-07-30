import CompanyDetailCard from "@/components/CompanyDetailCard";
import SmallCard from "@/components/SmallCard";

const CompanyDetails = () => {
  // TODO: Remove this demo data
  const demoData = {
    logo: "/iconography/companyLogo.svg",
    jobTitle: "Web developer",
    employer: "UIHUT",
    description:
      "Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve.Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve.",
    minSalary: 70000,
    maxSalary: 100000,
    salaryPeriod: "MONTH",
    skills: ["React", "Node.js", "JavaScript"],
    companyType: "Finance",
    applyLink: "https://www.google.com",
    city: "Austin",
    state: "TX",
  };

  return (
    <div className="mx-6 mb-[4.5rem] mt-[1.37rem] flex flex-col lg:mx-20 lg:mb-11 lg:mt-[2.87rem] lg:flex-row lg:gap-10">
      <CompanyDetailCard
        logo={demoData?.logo}
        employer={demoData?.employer}
        companyType={demoData?.companyType}
        city={demoData?.city}
        state={demoData?.state}
      />
      <aside>
        <h2 className="mb-[1.87rem] mt-[2.88rem] text-[1.375rem] font-bold not-italic leading-8 text-Black dark:text-White lg:mb-5 lg:mt-[4.25rem]">
          Similar Companies
        </h2>
        <div className="flex flex-col gap-6">
          {/* // TODO: Replace with Similar Company Component */}
          <SmallCard
            icon={demoData?.logo}
            salary={demoData?.minSalary}
            jobTitle={demoData?.jobTitle}
            jobLocation={demoData?.state}
            salaryPeriod={demoData?.salaryPeriod}
            jobCity={demoData?.city}
            jobState={demoData?.state}
            daysLeft={2323}
          />
          <SmallCard
            icon={demoData?.logo}
            salary={demoData?.minSalary}
            jobTitle={demoData?.jobTitle}
            jobLocation={demoData?.state}
            salaryPeriod={demoData?.salaryPeriod}
            jobCity={demoData?.city}
            jobState={demoData?.state}
            daysLeft={2323}
          />
          <SmallCard
            icon={demoData?.logo}
            salary={demoData?.minSalary}
            jobTitle={demoData?.jobTitle}
            jobLocation={demoData?.state}
            salaryPeriod={demoData?.salaryPeriod}
            jobCity={demoData?.city}
            jobState={demoData?.state}
            daysLeft={2323}
          />
          <SmallCard
            icon={demoData?.logo}
            salary={demoData?.minSalary}
            jobTitle={demoData?.jobTitle}
            jobLocation={demoData?.state}
            salaryPeriod={demoData?.salaryPeriod}
            jobCity={demoData?.city}
            jobState={demoData?.state}
            daysLeft={2323}
          />
        </div>
      </aside>
    </div>
  );
};

export default CompanyDetails;
