import React from "react";
import icMore from "@/public/static/iconography/ic_More.svg";
import briefcase from "@/public/static/iconography/outline-briefcase.svg";
import companyLogo from "@/public/static/iconography/companyLogo-outline-property.svg";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {};

const JobCard = (props: Props) => {
  return (
    <div className="flex w-full flex-col gap-7 bg-white p-5">
      <div className="flex justify-between">
        <div className="flex">
          <Image src={companyLogo} alt="logo" />
          <div className="flex flex-col pl-5">
            <h1>Passionate Programmer</h1>
            <div className="inline-flex">
              <p className="rounded bg-Natural3 px-2 py-1 text-Natural6">PHP</p>
            </div>
          </div>
        </div>
        <Image className="items-start" src={icMore} alt="More Icon" />
      </div>
      <div>
        <p>
          Here at UIHUT, we are a passionate, fun-loving, growing team. We are
          looking for passionate programmers who want to solve technical
          challenges and learn and incorporate new technologies into their
          skillset to join our team and grow with us.
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-center rounded bg-Natural3 px-2 py-1 text-Natural6">
          <Image className="mr-2" src={briefcase} alt="logo" />
          <p>Full Time</p>
        </div>
        <div className="flex justify-center rounded bg-Natural3 px-2 py-1 text-Natural6">
          <Image className="mr-2" src={briefcase} alt="logo" />
          <p>Full Time</p>
        </div>
        <div className="flex justify-center rounded bg-Natural3 px-2 py-1 text-Natural6">
          <Image className="mr-2" src={briefcase} alt="logo" />
          <p>Full Time</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-black">
          $15k-20k<span className="text-Natural7">/month</span>
        </h3>
        <Button className="h-12 w-24 items-center justify-center rounded-lg bg-Primary p-3">
          Visit Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
