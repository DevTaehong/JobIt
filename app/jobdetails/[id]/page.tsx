import JobDetailCard from "@/components/JobDetailCard";
import moment from "moment";

const JobDetails = ({ params }: { params: { id: string } }) => {
  const currentDate = moment().format("dddd,  D MMM YYYY");

  return (
    <>
      <main className="mx-6 w-auto sm:mx-20">
        {/* Heading */}
        <section className=" ml-[-.25] mt-[3.13] sm:mt-[3rem]">
          <h1 className="text-[1.375rem] font-bold not-italic leading-8 dark:text-Natural4 sm:text-[2rem] sm:leading-10">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Let's find your dream job
          </h1>
          {/* Date */}
          <h2 className=" flex text-Natural6 sm:text-xl sm:font-medium sm:leading-8 xl:pt-[.88rem]">
            {currentDate}
          </h2>
        </section>
        {/* Job Details */}
        <section className="mt-8 w-full xl:w-2/3">
          <span className="flex items-center sm:mb-[23px] ">
            <button className="hidden items-center gap-2 rounded-[0.625rem] bg-Natural4 px-[.62rem] py-[.44rem] text-xs font-medium leading-[18px] text-Natural7 dark:border-DarkBG3 sm:flex">
              Back
            </button>
          </span>
          <div>
            <JobDetailCard qualifications={["2, ", "1"]} />
          </div>
        </section>
      </main>
    </>
  );
};

export default JobDetails;
