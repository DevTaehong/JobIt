"use client"
import React from "react";
import Image from "next/image"
import hut from "@/public/iconography/uiHut-icon-ic_Saved.svg"

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
  
  <div className="p-[1.25rem] flex flex-col justify-center items-start gap-5 bg-white
  dark:bg-DarkBG2">
    <div className="flex items-start w-full gap-[.95rem] bg-white
    dark:bg-DarkBG2">
  <div className="w-[3rem] min-w-[3rem] border">
              <img className="object-fill" src={props.icon} />
            </div>
  
  <div className="flex w-[12.25rem] pr-0 flex-col items-start gap-[0.375rem]">
    
    <div className="font-manrope text-[1.125rem] font-bold leading-6 not-italic text-black
    dark:text-White">{props.jobTitle}</div>
   
    <div className="font-manrope text-[0.875rem] font-medium leading-5 not-italic text-Natural6">{props.jobCity}, {props.jobState}</div>
    </div>
  
  <div className="flex items-start gap-[0.1875rem] ml-auto">
    <div className="font-manrope text-[0.875rem] font-semibold leading-6 not-italic text-black text-right
    dark:text-White">${props.salary}</div>
  <div className="text-right font-manrope text-[0.875rem] font-normal not-italic leading-[1.375rem] text-Natural6">
                {"/"}
                {props.salaryPeriod}
              </div>
    </div>
  </div>
  <div className="flex items-center gap-[9.375rem] bg-Natural4 
  dark:bg-DarkBG2">
    <div className="w-[5.3125rem] font-manrope text-[0.875rem] font-medium leading-5 not-italic text-Natural6">
      {daysLeft} days left
      </div>
    <div className="flex items-center gap-[0.6875rem]">
      <button className="flex p-2 justify-center items-center gap-[0.4375rem] rounded-md border-solid border-[0.06rem]">
        <Image 
        src={hut} 
        width={18}
        height={18}
        alt="hut" 
        />
      </button>
      <button className="flex px-[0.875rem] py-[0.5rem] justify-center items-center gap=[0.625rem] rounded bg-[#0BAB7C10]">
        <div className="text-center font-manrope text-[0.875rem] not-italic font-medium leading-5 text-Primary">View</div>
        </button>
    </div>
  </div>
  </div>
  )
  };




export default SmallCards;