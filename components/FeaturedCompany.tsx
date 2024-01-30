import Image from "next/image";
import Link from "next/link";

import ImageErrorFallback from "./ImageErrorFallback";

const FeaturedCompany = ({
  companyName,
  image,
  city,
  country,
}: {
  companyName: string;
  image: string;
  city: string;
  country: string;
}) => {
  return (
    <div className="featured-card justify-between gap-6 p-5 shadow-2">
      <div className="flex gap-2.5">
        <ImageErrorFallback src={image} />
        <h2 className="semibold-18 text-black dark:text-white">
          {companyName}
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2.5">
          <Image
            src="/iconography/pin.svg"
            height={20}
            width={20}
            alt={`icon displaying the location of ${companyName}, in ${city},${country}`}
          />
          <span className="regular-14 text-Natural6">
            {city}, {country}
          </span>
        </div>
      </div>
      <Link
        href={`/company-details/${companyName}`}
        className="semibold-13 hover-effect flex h-12 w-full items-center justify-center rounded-[10px] bg-Natural2 text-Natural6 dark:bg-DarkBG3"
      >
        See All
      </Link>
    </div>
  );
};

export default FeaturedCompany;
