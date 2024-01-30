import { Suspense } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { cookies } from "next/headers";

import { fetchJobSearch } from "@/lib/jsearch";
import FilterSidebar from "@/components/FilterSidebar";
import { Skeleton } from "@/components/ui/skeleton";
import JobSearchCard from "@/components/JobSearchCard";
import PageSelection from "@/components/PageSelection";
import SearchBar from "@/components/SearchBar";

export default async function JobSearch({
  searchParams,
}: {
  searchParams: {
    page: string;
    employment_types: string;
    date_posted: string;
    job_requirements: string[];
    remote: boolean;
    query: string;
  };
}) {
  const cookieStore = cookies();
  const locationCookie = cookieStore.get("location")?.value;
  const jobSearchResult = await fetchJobSearch(searchParams, locationCookie);

  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-[50px] xl:px-20">
      <h1 className="md:bold-32 bold-22 mb-1 text-Black dark:text-white sm:mb-3">
        {`Let's find your dream job`}
      </h1>
      <h2 className="mb-[30px] text-base font-medium leading-6 text-Natural6 sm:text-[20px] sm:leading-8">
        {moment().format("dddd, DD MMM YYYY")}
      </h2>
      <SearchBar />
      <main className="mt-[59px] flex gap-x-[79px]">
        <FilterSidebar />
        <div className="w-full">
          <Suspense fallback={<SearchResultsLoader />} key={uuidv4()}>
            <div className="flex flex-col gap-y-[1.875rem] sm:gap-y-[1.375rem]">
              {jobSearchResult?.data &&
                jobSearchResult?.data?.map((job: JobResult) => (
                  <JobSearchCard key={job.job_id} job={job} />
                ))}
            </div>
          </Suspense>

          <div className="mt-9 border-t border-Natural2 pt-5 dark:border-DarkBG3">
            <PageSelection />
          </div>
        </div>
      </main>
    </div>
  );
}

const SearchResultsLoader = () => {
  const numberOfSkeletons = 10;
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: numberOfSkeletons }).map((_, i) => (
        <div
          key={uuidv4()}
          className="flex h-[302px] w-full flex-col gap-5 rounded-[10px]"
        >
          <div className="flex gap-5">
            <Skeleton className="h-16 w-16" />
            <div className="flex flex-col gap-[0.375rem]">
              {Array.from({ length: 2 }).map((_, i) => (
                <Skeleton key={uuidv4()} className="h-6 w-[25rem]" />
              ))}
            </div>
          </div>
          <Skeleton className="h-6 w-[30rem]" />
          <div className="flex gap-[0.3125rem]">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={uuidv4()} className="h-7 w-12" />
            ))}
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-6 w-[9.5rem]" />
            <div className="flex gap-5">
              {Array.from({ length: 2 }).map((_, i) => (
                <Skeleton key={uuidv4()} className="h-12 w-[11.25rem]" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
