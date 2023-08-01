import moment from "moment";
import Charts from "@/components/Charts";

const EstimatedSalaries = () => {
  const currentDate = moment().format("dddd,  D MMM YYYY");

  return (
    <>
      <div className="mx:mb-[5.75rem] mx-[1.5rem] mb-[4rem] mt-[2.5rem] flex md:mx-[5rem] md:mt-[3.5rem]">
        <section>
          <h1 className="ml-[.13rem] text-[1.375rem] font-bold not-italic leading-8 dark:text-Natural4 md:text-[2rem] md:leading-10">
            Estimated Salaries
          </h1>
          <h2 className="mt-[.25rem] text-base font-medium leading-6 text-Natural6 md:mt-[.87rem] md:text-xl md:font-medium md:leading-8">
            {currentDate}
          </h2>
        </section>
        <div className="mt-[2.5rem] flex-row">
          <section className=" h-[20rem] bg-yellow-400">
            {/* <SalariesInputs /> */}
          </section>
          <section className="mt-[2.5rem] h-[20rem] bg-pink-600">
            {/* <Charts /> */}
          </section>
        </div>
      </div>
    </>
  );
};

export default EstimatedSalaries;
