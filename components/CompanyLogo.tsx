"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CompanyLogo = ({
  companyLogo,
  companyName,
}: {
  companyLogo: string | null | undefined;
  companyName: string;
}) => {
  const [imageError, setImageError] = useState(false);

  return companyLogo ? (
    <Link className="hover-effect" href={`/company-details/${companyName}`}>
      <Image
        alt="Company Logo"
        src={imageError ? "/iconography/jobit-icon.svg" : companyLogo}
        fill
        className={`${imageError && "grayscale"} object-contain`}
        onError={() => setImageError(true)}
      />
    </Link>
  ) : (
    <Link className="hover-effect" href={`/company-details/${companyName}`}>
      <Image
        alt="Company Logo"
        src={"/iconography/jobit-icon.svg"}
        fill
        className="object-contain grayscale"
      />
    </Link>
  );
};

export default CompanyLogo;
