import ImageErrorFallback from "@/components/ImageErrorFallback";
import { FormatSalaryRange } from "./FormatSalaryRage";

type Props = {
  employerName: string;
  jobTitle: string;
  minSalary: number | null;
  maxSalary: number | null;
  salaryPeriod: string | null;
  companyLogo: string;
  jobState: string;
  jobCity: string;
  employmentType: string;
};

const InlineJobCard = (props: Props) => {
  return (
    <div className="gap-5 rounded-[10px] bg-Natural3 px-3 py-3.5 dark:bg-DarkBG3 xl:w-[22.5rem]">
      <div className="flex justify-between">
        <div className="flex gap-[0.56rem] rounded">
          <div className="flex h-12 w-12 shrink-0 items-center rounded-[0.46rem]">
            <ImageErrorFallback src={props?.companyLogo} />
          </div>
          <div className="flex flex-col gap-1 pl-0 text-start">
            <h1 className="line-clamp-1 text-[15px] font-semibold text-gray-900 dark:text-white sm:text-base">
              {props?.jobTitle}
            </h1>
            <p className="line-clamp-1 text-[13px] font-normal leading-tight text-Natural7 sm:text-sm">
              {`${props?.employerName} ${
                props?.jobCity ? "･" + props?.jobCity + "," : ""
              } ${props?.jobState ? props?.jobState : ""}`}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          {props?.minSalary && props?.maxSalary && props?.salaryPeriod ? (
            FormatSalaryRange(
              props?.minSalary,
              props?.maxSalary,
              props?.salaryPeriod,
              "recommendedJobCard",
            )
          ) : (
            <span className="ml-2 line-clamp-1 text-sm font-medium not-italic text-Natural7 dark:text-White">
              -
            </span>
          )}
          <p className="text-center text-[13px] font-medium leading-tight text-Natural7">
            {props?.employmentType}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InlineJobCard;
