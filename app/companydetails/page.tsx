import CompanyDetailCard from "@/components/CompanyDetailCard";
import SmallCard from "@/components/SmallCard";
import SimilarCompanies from "@/components/SimilarCompanies";

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
    <div className="mx-6 mb-[4.5rem] mt-[1.37rem] flex flex-col lg:mx-20 lg:mb-11 lg:mt-[2.87rem] lg:flex-row lg:gap-10 2xl:mx-auto 2xl:max-w-[90rem]">
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
           <SimilarCompanies 
           JobTitle="Company"
           JobTitleSec="Comp/inc"
           icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0"/>

          <SimilarCompanies 
           JobTitle="Companny 2"
           JobTitleSec="Comp/inc"
           icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i49TxmypL921gwSrXCigLk762K1u2Qu9yW0x&s=0
           "/>


          <SimilarCompanies 
           JobTitle="Company 3"
           JobTitleSec="Comp/inc"
           icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LtpFk_Qn5msyHfLis8HxKBBhhxla_ZNtS7bV&s=0"/>



        </div>
      </aside>
    </div>
  );
};

export default CompanyDetails;
