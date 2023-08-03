"use client";
import { useState } from "react";

export default function ImageErrorFallback({
  src,
  card,
}: {
  src: string;
  card: string;
}) {
  const [error, setError] = useState(false);
  if (card === "similarCompany") {
    if (!src || error)
      return (
        <img
          src={src || "/images/companyPlaceholderLogo.png"}
          width={48}
          height={48}
          alt="Company placeholder logo"
          className="object-contain"
        />
      );
    if (!error) {
      return (
        <img
          src={src || "images/companyPlaceholderLogo.png"}
          width={48}
          height={48}
          className="object-contain"
          alt="Company Logo"
          onError={(e) => {
            setError(true);
          }}
        />
      );
    }
  }

  if (!src || error)
    return (
      <img
        className="min-h-[30px] min-w-[30px] object-contain sm:max-h-[36px] sm:max-w-[36px]"
        alt="Company placeholder logo"
        src="/images/companyPlaceholderLogo.png"
      />
    );
  if (!error) {
    return (
      <img
        className="min-h-[30px] min-w-[30px] object-contain sm:max-h-[36px] sm:max-w-[36px]"
        alt="Company Logo"
        src={src}
        onError={(e) => {
          setError(true);
        }}
      />
    );
  }
}
