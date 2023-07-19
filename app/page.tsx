import Image from "next/image";
import moment from "moment";

export default function Home() {
  // const currentDate = new Date().toDateString();
  const currentDate = moment().format("dddd,  D MMM YYYY");

  return (
    <>
      <div>
        <nav>{/* <Navbar /> */}</nav>
        <main className="w-auto font-manrope">
          {/* Heading */}
          <section className=" mx-[1.5rem] mt-[1.5rem] sm:mx-[5.5rem] sm:mt-[3.13]">
            <h1 className=" text-2xl font-bold leading-10 dark:leading-6 dark:text-Natural4 sm:text-[1.375rem] sm:leading-8">
              Welcome to the Job Search Platform for Developers
            </h1>
            {/* Date */}
            <h2 className="hidden pt-[.88rem] text-sm font-medium leading-8 text-Natural6 sm:flex">
              {currentDate}
            </h2>
          </section>
          <div className="mx-[1.5rem] flex flex-row flex-wrap sm:mx-[5.5rem]">
            {/* Latest Job Posts */}

            <section className="mt-[2.19rem] w-full sm:w-2/3">
              <span className="flex items-center justify-between">
                <h3 className=" text-[1.375rem] font-bold leading-8 dark:text-White">
                  Latest Job Posts
                </h3>
                <button className="flex items-center gap-2 border px-[.62rem] py-[.44rem] font-sans text-xs	 font-medium leading-6 text-Natural7 dark:border-DarkBG3">
                  See All
                  <div className="sm:hidden">
                    <Image
                      src="/iconography/cheveron.svg"
                      alt="cheveron"
                      width={16}
                      height={16}
                    />
                  </div>
                </button>
              </span>
              <div className="mr-10 mt-[1.88rem] flex-row ">
                <div className="sm:flex">
                  {/* Card One */}
                  <div className="sm:pr-10"> Card One</div>
                  {/* Card Two */}
                  <div className="">Card Two</div>
                </div>
                <div className="sm:flex sm:pt-10">
                  {/* Card Three */}
                  <div className="sm:pr-10">Card Three</div>
                  {/* Card Four */}
                  <div className="">Card Four</div>
                </div>
              </div>
            </section>
            {/* Recomended For You */}
            <section className="order-last mt-[2.19rem] w-full sm:order-none sm:w-1/3">
              <span className="ml-0 flex justify-between sm:ml-10">
                <h3 className=" text-[1.375rem] font-bold leading-8 dark:text-White">
                  Recomended For You
                </h3>
                <button className="flex items-center gap-2 whitespace-nowrap border px-[.62rem] py-[.44rem] font-sans text-xs	 font-medium leading-6 text-Natural7 dark:border-DarkBG3">
                  See All
                  <div className="sm:hidden">
                    <Image
                      src="/iconography/cheveron.svg"
                      alt="cheveron"
                      width={16}
                      height={16}
                    />
                  </div>
                </button>
              </span>
              {/* Inline Job Cards */}
              <div className="ml-0 flex-row gap-3 sm:ml-10">
                <div>Inline Job Card</div>
                <div>Inline Job Card</div>
                <div>Inline Job Card</div>
                <div>Inline Job Card</div>
              </div>
            </section>
            {/* Featured Compaines */}
            <section className=" mt-10 w-full lg:w-1/3">
              <span>
                <h3 className=" text-2xl font-bold leading-10 dark:text-White">
                  Featured Companies
                </h3>
              </span>
              <div className="mt-[1.25rem] flex-row gap-[2.25rem] sm:flex">
                <div>Feature</div>
                <div>Feature</div>
                <div>Feature</div>
              </div>
            </section>
          </div>
          {/* Schedule */}
          <section className="mb-[2.62rem] ml-[1.69rem] mr-[1.31rem] mt-[4rem] flex-row sm:hidden">
            <span className="flex items-center justify-between">
              <h1 className="text-2xl font-bold leading-10 dark:text-White">
                Schedule
              </h1>
              <div className="inline-flex items-center pr-[.62rem] font-sans text-xs font-medium	leading-5">
                <p className="text-Natural6">Sort by:</p>
                {/* Due Date */}
                <p className="font-sans text-[#0BAB7C]">This Week</p>
                <Image
                  src="/iconography/cheveron.svg"
                  alt="cheveron"
                  width={16}
                  height={16}
                />
              </div>
            </span>
            <div className="gap-14">
              <div>Inline Card</div>
              <div>Inline Card</div>
              <div>Inline Card</div>
            </div>
            <button className="flex w-[18.5rem] items-center justify-center gap-[.625rem] px-3 py-3.5 dark:text-Natural6">
              See All Schedule
            </button>
          </section>
        </main>
      </div>
    </>
  );
}
