"use client";

import React from "react";

import Chart from "react-apexcharts";

type Props = {};

const demoData = [
  {
    location: "New York, NY",
    job_title: "NodeJS Developer",
    publisher_name: "Salary.com",
    publisher_link:
      "https://www.salary.com/research/salary/recruiting/nodejs-developer-salary/new-york-ny",
    min_salary: 101323,
    max_salary: 150015,
    median_salary: 123104,
    salary_period: "YEAR",
    salary_currency: "USD",
  },

  {
    location: "New York, NY",
    job_title: "Node JS Developer",
    publisher_name: "ZipRecruiter",
    publisher_link:
      "https://www.ziprecruiter.com/Salaries/Node-JS-Developer-Salary--in-New-York",
    min_salary: 92994,
    max_salary: 158637,
    median_salary: 122925,
    salary_period: "YEAR",
    salary_currency: "USD",
  },

  {
    location: "New York, NY",
    job_title: "node js developer",
    publisher_name: "Talent.com",
    publisher_link:
      "https://www.talent.com/salary?job=node+js+developer&location=new+york",
    min_salary: 82895,
    max_salary: 167450,
    median_salary: 127400,
    salary_period: "YEAR",
    salary_currency: "USD",
  },
];

const publisherName = demoData.map((item) => item.publisher_name);
const minSalary = demoData.map((item) => item.min_salary);
const maxSalary = demoData.map((item) => item.max_salary);
const medianSalary = demoData.map((item) => item.median_salary);

const Charts = (props: Props) => {
  const options = {
    chart: {
      id: "basic-bar",

      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: publisherName,
    },
    yaxis: {
      labels: {
        formatter: function (value: number) {
          const formatValue = value / 1000 + "k " + demoData[0].salary_currency;
          return formatValue;
        },
      },
    },
    colors: ["#FDDD8C", "#0BAB7C", "#FFBBD7"],
    legend: {
      position: "top",
      fontSize: "10px",
      fontFamily: "Manrope, sans-serif",
      horizontalAlign: "left",
      markers: {
        width: 8,
        height: 8,
        radius: 8,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 7,
        borderRadiusApplication: "end",
        columnWidth: "30%",
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [
    { name: "Minimun Salary", data: minSalary },
    { name: "Maximum Salary", data: maxSalary },
    { name: "Median Salary", data: medianSalary },
  ];

  return (
    <div className="flex flex-col">
      <div className="pl-[21px] font-bold leading-[22px]">
        <h3>
          Estimated Salary <span className="font-normal">for</span>{" "}
          {demoData[0].job_title} <span className="font-normal">in</span>{" "}
          {demoData[0].location}
        </h3>
      </div>
      <div>
        <Chart options={options} series={series} type="bar" />
      </div>
    </div>
  );
};

export default Charts;
