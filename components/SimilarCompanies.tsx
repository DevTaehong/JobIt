import React from "react";
import Image from "next/image";
import plus from "@/public/iconography/Fbuttonplus.svg";
import Link from "next/link";
// All notations/comments below are intended for informative purposes for testing

// Job title sec means secondary title
type Props = {
  icon: string;
  JobTitle: string;
  JobTitleSec: string;
  Follow: string;
};

const SimilarCompanies = ({ icon, JobTitle, JobTitleSec, Follow }: Props) => {
  icon = icon ?? "/iconography/CompanyLogo.svg";
  JobTitle = JobTitle ?? "Tech Company";
  JobTitle = JobTitle ?? "Tech Company";
  Follow = Follow ?? "www.linkedin.com";

  return (
    <div
      className="rounded-[0.625rem] bg-white p-[1.25rem] font-manrope shadow-[0_6px_14px_0_rgba(23,23,37,0.02)] dark:bg-DarkBG2
lg:w-[400px] "
    >
      <div className="flex w-full items-center justify-between ">
        <div className="flex shrink-0 items-center gap-[10px] sm:gap-[0.9375rem]">
          {/* Apple Icon Test Below  */}
          <div className="h-[3rem] w-[3rem] shrink-0">
            <img src={icon} />
          </div>

          {/* Flex section for Company Title and Secondary Title Below */}
          <div className="flex shrink-0 flex-col items-start gap-[0.375rem]">
            <div
              className=" text-[1rem] font-semibold  not-italic leading-6 text-black dark:text-White
lg:text-[18px] "
            >
              {JobTitle}
            </div>
            <div className="text-[0.875rem] font-medium not-italic leading-5 text-Natural6">
              {JobTitleSec}
            </div>
          </div>
        </div>

        {/* Button code below. Incase of image sizing error with button check below  */}
        <Link
          className="flex w-[5.2rem] items-center justify-center gap-[0.375rem] rounded-[0.625rem] border border-solid border-[#0BAB7C] p-[0.375rem_0.625rem] sm:w-[6.125rem] "
          href={Follow}
        >
          <div className="h-[1.125rem] w-[1.125rem] shrink-0">
            <Image src={plus} width={18} height={18} alt="plus" />
          </div>

          {/* Button Text Code Below  */}
          <div className="text-[0.875rem] font-semibold not-italic leading-6 text-Primary">
            Follow
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SimilarCompanies;
