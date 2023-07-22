"use client"
import React from "react";

type Props={
  icon: string;
  salary: number;
  jobTitle: string;
  jobLocation: string;
  salaryPeriod: string;
  jobCity: string;
  jobState: string;
  daysLeft: number;
}

function calculateDaysLeft(expTime: number): number {
  const expDate = new Date(expTime * 1000); // Convert to milliseconds
  const currentDate = new Date();

  const timeDiff = expDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysLeft;
}


const SmallCards = (props:Props) => {
const daysLeft = calculateDaysLeft(props.daysLeft)

return(
  <>
<div className="p-[1.25rem] flex flex-col justify-center items-start gap-5 bg-white">
  <div className="flex items-start gap-[1.875rem] bg-white">
<div className="w-12 h-12"><img src= {props.icon}/></div>

<div className="flex w-[12.25rem] pr-0 flex-col items-start gap-[0.375rem]">
  
  <div className="font-manrope text-[1.125rem] font-bold leading-6 not-italic text-black">{props.jobTitle}</div>
 
  <div className="font-manrope text-[0.875rem] font-medium leading-5 not-italic text-Natural6">{props.jobCity}, {props.jobState}</div>
  </div>

<div className="flex items-start gap-[0.1875rem]">
  <div className="font-manrope text-[0.875] font-semibold leading-6 not-italic text-black text-right">{props.salary}</div>
  <div className="font-manrope text-[0.875rem] font-normal leading-[1.375rem] not-italic text-Natural6 text-right"></div>
  </div>
</div>

<div className="flex items-center gap-[9.375rem] bg-Natural4">
  <div className="w-[5.3125rem] font-manrope text-[0.875rem] font-medium leading-5 not-italic text-Natural6">
    {daysLeft}
    </div>
  <div className="flex items-center gap-[0.6875rem]">
    <button className="flex p-2 justify-center items-center gap-[0.4375rem] rounded-md border-solid border-[0.06rem]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M12.615 1.5H5.38499C3.78749 1.5 2.48999 2.805 2.48999 4.395V14.9625C2.48999 16.3125 3.45749 16.8825 4.64249 16.23L8.30249 14.1975C8.69249 13.98 9.32249 13.98 9.70499 14.1975L13.365 16.23C14.55 16.89 15.5175 16.32 15.5175 14.9625V4.395C15.51 2.805 14.2125 1.5 12.615 1.5ZM11.2575 7.3125C10.53 7.575 9.76499 7.71 8.99999 7.71C8.23499 7.71 7.46999 7.575 6.74249 7.3125C6.44999 7.2075 6.29999 6.885 6.40499 6.5925C6.51749 6.3 6.83999 6.15 7.13249 6.255C8.33999 6.69 9.66749 6.69 10.875 6.255C11.1675 6.15 11.49 6.3 11.595 6.5925C11.7 6.885 11.55 7.2075 11.2575 7.3125Z" fill="#92929D" fill-opacity="0.7"/>
</svg></button>
    <button className="flex px-[0.875rem] py-[0.5rem] justify-center items-center gap=[0.625rem] rounded bg-emerald-200">
      <div className="text-center font-manrope text-[0.875rem] not-italic font-medium leading-5 text-Primary">View</div>
      </button>
  </div>
</div>
</div> 
</>
)
}

export default SmallCards;