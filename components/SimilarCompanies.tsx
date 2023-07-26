import React from "react";
import Image from "next/image";
import plus from "@public\iconography\Fbuttonplus.svg";


// All notations/comments below are intended for informative purposes for testing

// Job title sec means secondary title
type Props={
icon: string;
JobTitle: string;
JobTitleSec:string;
};

const SimilarCompanies = (props:Props) => {


return(
<div className="inline-flex flex-col justify-center items-start p-[1.25rem] rounded-[0.625rem] gap-[1.25rem] shadow-[0_6px_14px_0_rgba(23,23,37,0.02)] bg-white
dark:bg-DarkBG2 ">
  <div className="flex items-center gap-20">
  <div className="flex items-center gap-[0.9375rem] flex-shrink-0 w-[15.125rem]">

{/* Apple Icon Test Below  */}
<div className="w-[3rem] h-[3rem] flex-shrink-0">
  <img src={props.icon} />
 {/* { <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
<path d="M45 24C45 35.592 35.6025 45 24 45C12.3975 45 3 35.592 3 24C3 12.3975 12.3975 3 24 3C35.6025 3 45 12.3975 45 24Z" fill="#283544"/>
<path d="M33.8432 18.6861C33.7286 18.7529 31.0006 20.1637 31.0006 23.2918C31.1292 26.8591 34.4432 28.1102 34.5 28.1102C34.4432 28.177 33.9997 29.8144 32.686 31.5308C31.6435 33.0093 30.4863 34.5 28.7292 34.5C27.0577 34.5 26.4577 33.5146 24.5292 33.5146C22.458 33.5146 21.872 34.5 20.2863 34.5C18.5292 34.5 17.2863 32.9295 16.1869 31.4648C14.7586 29.5479 13.5447 26.5396 13.5018 23.6512C13.4729 22.1206 13.7878 20.616 14.5872 19.3381C15.7155 17.554 17.7298 16.3429 19.9295 16.3029C21.6149 16.25 23.1149 17.3812 24.1435 17.3812C25.1292 17.3812 26.972 16.3029 29.0571 16.3029C29.9571 16.3038 32.3571 16.5564 33.8432 18.6861ZM24.0009 15.9973C23.7009 14.5996 24.5292 13.2018 25.3006 12.3102C26.2863 11.2319 27.8432 10.5 29.1857 10.5C29.2714 11.8978 28.7282 13.2686 27.7574 14.267C26.8863 15.3453 25.3863 16.1571 24.0009 15.9973Z" fill="white"/>
</svg> }*/}
</div>



{/* Flex section for Company Title and Secondary Title Below */}
<div className="flex flex-col w-[11.1875rem] pr-0 items-start gap-[0.375rem] shrink-0">
<div className=" text-black font-[manrope] text-[1.25rem] not-italic font-semibold leading-6
dark:text-White ">{props.JobTitle}</div>
<div className="text-Natural6 font-[manrope] text-[0.875rem] not-italic font-medium leading-5">{props.JobTitle}</div>
</div>
    </div>

  {/* Button code below. Incase of image sizing error with button check below  */}
<button className="flex justify-center items-center w-[6.125rem] p-[0.375rem, 0.625rem] gap-[0.375rem] rounded-[0.625rem] border border-solid border-[#0BAB7C] ">

    <div className="w-[1.125rem] h-[1.125rem] shrink-0">
    <Image
src={plus}
width={18}
height={18}
  alt="plus" />

     {/*
      Raw svg file below
      intended proper format above*/}

  {/* <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.75 8.25H10.25V3.75C10.25 3.33525 9.914 3 9.5 3C9.086 3 8.75 3.33525 8.75 3.75V8.25H4.25C3.836 8.25 3.5 8.58525 3.5 9C3.5 9.41475 3.836 9.75 4.25 9.75H8.75V14.25C8.75 14.6648 9.086 15 9.5 15C9.914 15 10.25 14.6648 10.25 14.25V9.75H14.75C15.164 9.75 15.5 9.41475 15.5 9C15.5 8.58525 15.164 8.25 14.75 8.25Z" fill="#0BAB7C"/>
</svg> */}
    </div>

    {/* Button Text Code Below  */}
  <div className="font-[manrope] text-[0.875rem] font-semibold not-italic leading-6 text-Primary">
       Follow
    </div>
    </button>

</div>
</div>
)
}