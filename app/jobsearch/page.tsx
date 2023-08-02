import moment from "moment";

const JobSearch = () => {
  const currentDate = moment().format("dddd,  D MMM YYYY");

  return (
    <>
      <div className="mx-[1.5rem] mb-[4.06rem] mt-[2.5rem] flex flex-col lg:mx-[5rem] lg:mb-[3.62rem] lg:mt-[3.12rem]">
        {/* Heading */}
        <section>
          <h1 className="ml-[.13rem] text-[1.375rem] font-bold not-italic leading-8 dark:text-Natural4 lg:text-[2rem] lg:leading-10">
            Estimated Salaries
          </h1>
          <h2 className="mt-[.25rem] text-base font-medium leading-6 text-Natural6 lg:mt-[.87rem] lg:text-xl lg:font-medium lg:leading-8">
            {currentDate}
          </h2>
        </section>
        {/* Main */}
        {/* Search Bar */}
        <section className="mt-[1.87rem] flex h-[20.43rem] w-auto flex-row bg-purple-500 lg:h-[5rem] lg:max-w-[80rem]"></section>
        <section className="mt-[1.87rem] flex gap-[5rem] lg:mt-[3.69rem] lg:max-w-[80rem]">
          {/*  Type of Employment */}
          <section className="hidden h-[64.9rem] w-[15.6rem] bg-green-500 lg:flex"></section>
          {/* Job Cards */}
          <div className="flex w-[80rem] flex-col gap-[2.25rem]">
            <section className="bg-yellow-500 lg:h-[50rem]"></section>
            <section className="h-[2.25rem] bg-red-500"></section>
          </div>
        </section>
        {/* Page Selector */}
      </div>
    </>
  );
};

export default JobSearch;
