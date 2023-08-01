import CompanyDetailCard from "@/components/CompanyDetailCard";
import SmallCard from "@/components/SmallCard";
import SimilarCompanies from "@/components/SimilarCompanies";
import {
  getCompanyDetails,
  getQuery,
  getSimilarCompanies,
} from "@/lib/jsearch";

const CompanyDetails = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { query: string };
}) => {
  const CompanyData: Promise<Job> = getCompanyDetails(params.id);
  const [CompanyDetails] = await Promise.all([CompanyData]);

  const moreCompany: Promise<Job> = getSimilarCompanies(params.id);
  const [SimilarCompanies] = await Promise.all([moreCompany]);

  const { query } = searchParams;
  const queryData: Promise<Job> = getQuery(query ?? "developer");

  // TODO: Remove this demo data
  const companyData = {
    logo: CompanyDetails.data[0].employer_logo,
    employer: CompanyDetails.data[0].employer_name,
    state: CompanyDetails.data[0].job_state,
    city: CompanyDetails.data[0].job_city,
    companyType: CompanyDetails.data[0].employer_company_type,
    companyLink: CompanyDetails.data[0].employer_website,
  };


  return (
    <div className="mx-6 mb-[4.5rem] mt-[1.37rem] flex flex-col lg:mx-20 lg:mb-11 lg:mt-[2.87rem] lg:flex-row lg:gap-10">
      <CompanyDetailCard
        logo={companyData?.logo}
        employer={companyData?.employer}
        companyType={companyData?.companyType}
        city={companyData?.city}
        state={companyData?.state}
        companyLink={companyData?.companyLink}
        jobId={params.id}
        queryData={queryData}
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
            icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0"
          />

          <SimilarCompanies
            JobTitle="Companny 2"
            JobTitleSec="Comp/inc"
            icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i49TxmypL921gwSrXCigLk762K1u2Qu9yW0x&s=0
           "
          />

          <SimilarCompanies
            JobTitle="Company 3"
            JobTitleSec="Comp/inc"
            icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LtpFk_Qn5msyHfLis8HxKBBhhxla_ZNtS7bV&s=0"
          />
        </div>
      </aside>
    </div>
  );
};

export default CompanyDetails;
