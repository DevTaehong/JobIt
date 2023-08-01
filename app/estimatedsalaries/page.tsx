import moment from "moment";
import Charts from "@/components/Charts";
import { data } from "autoprefixer";

const EstimatedSalaries = () => {
  const currentDate = moment().format("dddd,  D MMM YYYY");

  type DataItem = {
    location: string;
    job_title: string;
    publisher_name: string;
    publisher_link: string;
    min_salary: number;
    max_salary: number;
    median_salary: number;
    salary_period: string;
    salary_currency: string;
  };
  const data: DataItem[] = [
    {
      location: "London",
      job_title: "Software Engineer",
      publisher_name: "Google",
      publisher_link: "https://www.google.com",
      min_salary: 50000,
      max_salary: 60000,
      median_salary: 55000,
      salary_period: "year",
      salary_currency: "GBP",
    },
    {
      location: "London",
      job_title: "Software Engineer",
      publisher_name: "Google",
      publisher_link: "https://www.google.com",
      min_salary: 20000,
      max_salary: 40000,
      median_salary: 34000,
      salary_period: "year",
      salary_currency: "GBP",
    },
  ];

  return (
    <>
      <div className="mx:mb-[5.75rem] mx-[1.5rem] mb-[4rem] mt-[2.5rem] md:mx-[5rem] md:mt-[3.5rem]">
        <section>
          <h1 className="ml-[.13rem] text-[1.375rem] font-bold not-italic leading-8 dark:text-Natural4 md:text-[2rem] md:leading-10">
            Estimated Salaries
          </h1>
          <h2 className="mt-[.25rem] text-base font-medium leading-6 text-Natural6 md:mt-[.87rem] md:text-xl md:font-medium md:leading-8">
            {currentDate}
          </h2>
        </section>
        <div className="mt-[2.5rem] flex-row gap-[2.5rem] md:flex md:w-full">
          <section className="md:w-1/2">{/* <SalariesInputs /> */}</section>
          <section className="mt-[2.5rem] md:mt-[-6.5rem] md:h-[26.5rem] md:w-1/2">
            <Charts data={data} />
          </section>
        </div>
      </div>
    </>
  );
};

export default EstimatedSalaries;
