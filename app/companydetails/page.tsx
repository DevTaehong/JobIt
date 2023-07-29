"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CompanyDetails = () => {
  // NOTE https://nextjs.org/docs/app/api-reference/functions/use-router
  const router = useRouter();
  return (
    <div>
      CompanyDetails
      {/* Back button */}
      <Button
        onClick={() => router.back()}
        className="mb-[1.73rem] w-[4.625rem] gap-[0.375rem] rounded-[0.625rem] bg-Natural2 px-[0.63rem] py-[0.44rem] text-[0.8125rem] font-medium not-italic leading-[1.125rem] text-Natural6 hover:text-white dark:border-DarkBG3 dark:bg-DarkBG3 dark:text-Natural6 lg:mb-9 lg:w-[4.625rem]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M11.25 4.5L6.75 9L11.25 13.5"
            stroke="#92929D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Back
      </Button>
    </div>
  );
};

export default CompanyDetails;
