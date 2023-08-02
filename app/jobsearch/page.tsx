import moment from "moment";

const JobSearch = () => {
  const currentDate = moment().format("dddd,  D MMM YYYY");

  return (
    <>
      <div className="mx:mb-[5.75rem] mx-[1.5rem] mb-[4rem] mt-[2.5rem] lg:mx-[5rem] lg:mt-[3.5rem]">
        {/* Heading */}
        <section>
          <h1 className="ml-[.13rem] text-[1.375rem] font-bold not-italic leading-8 dark:text-Natural4 lg:text-[2rem] lg:leading-10">
            Estimated Salaries
          </h1>
          <h2 className="mt-[.25rem] text-base font-medium leading-6 text-Natural6 lg:mt-[.87rem] lg:text-xl lg:font-medium lg:leading-8">
            {currentDate}
          </h2>
        </section>
        {/* Search Bar */}
        <section></section>
        {/* Type of Employment & Job Cards */}
        <section>
          {/*  Type of Employment */}
          <section></section>
          {/* Job Cards */}
          <section></section>
        </section>
        {/* Page Selector */}
        <section></section>
      </div>
    </>
  );
};

export default JobSearch;
