import CompanyDetailCard from "@/components/CompanyDetailCard";
import SmallCard from "@/components/SmallCard";
import SimilarCompanies from "@/components/SimilarCompanies";
import { getCompanies, getCompanyDetails, getQuery } from "@/lib/jsearch";

const CompanyDetails = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { query: string };
}) => {
  const CompanyData: Promise<Job> = getCompanyDetails(params.id);
  const [CompanyDetails] = await Promise.all([CompanyData]);

  const moreCompany: Promise<Job> = getCompanies("Texas");
  const [Companies] = await Promise.all([moreCompany]);
  console.log(Companies);

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
          {Companies.data.map((Companies, i) => (
            <div key={i}>
              <SimilarCompanies
                JobTitle={Companies?.employer_name}
                JobTitleSec={Companies?.employer_name}
                icon={Companies?.employer_logo}
              />
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default CompanyDetails;
