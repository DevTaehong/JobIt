import React from "react";

import { Button } from "./ui/button";

type Props = {};

const JobCard = (props: Props) => {
  return (
    <div className="flex w-full flex-col gap-7 bg-white p-5">
      <div className="flex">
        <img src="app/favicon.ico" alt="logo" />
        <div className="flex flex-col">
          <h1>Passionate Programmer</h1>
          <p>PHP</p>
        </div>
      </div>
      <div>
        <p>
          Here at UIHUT, we are a passionate, fun-loving, growing team. We are
          looking for passionate programmers who want to solve technical
          challenges and learn and incorporate new technologies into their
          skillset to join our team and grow with us.
        </p>
      </div>
      <div className="flex">
        <div className="flex">
          <img src="app/favicon.ico" alt="logo" />
          <p>Full Time</p>
        </div>
        <div className="flex">
          <img src="app/favicon.ico" alt="logo" />
          <p>Full Time</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3>$15k-20k/month</h3>
        <Button className="h-12 w-24 items-center justify-center rounded-lg bg-Primary p-3">
          Visit Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
