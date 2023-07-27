import React from 'react';

export const formatSalaryRange = (
  minSalary: number,
  maxSalary: number,
  salaryPeriod: string,
): JSX.Element => {
  const formattedMin = (minSalary / 1000).toFixed(0) + "k";
  const formattedMax = (maxSalary / 1000).toFixed(0) + "k";

  return (
    <span>{`$${formattedMin}-${formattedMax}/${salaryPeriod.toLowerCase()}`}</span>
  );
};
