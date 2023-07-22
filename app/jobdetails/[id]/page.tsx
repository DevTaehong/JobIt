import JobDetailCard from "@/components/JobDetailCard";
import moment from "moment";

const JobDetails = ({ params }: { params: { id: string } }) => {
  const currentDate = moment().format("dddd,  D MMM YYYY");

  return (
    <>
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
      <div>
        <JobDetailCard qualifications={["2, ", "1"]} />
      </div>
    </>
  );
};

export default JobDetails;
