"use client";
import { useState } from "react";

export default function ImageErrorFallback({ src }: { src: string }) {
  const [error, setError] = useState(false);
  if (!src || error)
    return (
      <img
        className="min-h-[30px] min-w-[30px] sm:max-h-[36px] sm:max-w-[36px]"
        alt="Company placeholder logo"
        src="/images/companyPlaceholderLogo.png"
      />
    );
  if (!error) {
    return (
      <img
        className="min-h-[30px] min-w-[30px] sm:max-h-[36px] sm:max-w-[36px]"
        alt="Company Logo"
        src={src}
        onError={(e) => {
          setError(true);
        }}
      />
    );
  }
}
