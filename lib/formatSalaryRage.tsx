import React from "react";

export const formatSalaryRange = (
  minSalary: number,
  maxSalary: number,
  salaryPeriod: string,
): JSX.Element => {
  const formattedMin = minSalary / 1000 + "k";
  const formattedMax = maxSalary / 1000 + "k";

  return (
    <>
      <span className="text-base font-semibold text-Natural8">{`$${formattedMin}-${formattedMax}`}</span>
      <span className="text-sm font-medium not-italic text-Natural7">{`/${salaryPeriod.toLowerCase()}`}</span>
    </>
  );
};
