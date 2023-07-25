"use client";
import { useState } from "react";

export default function ImageErrorFallback({ src }: { src: string }) {
  const [error, setError] = useState(false);
  if (!src || error)
    return (
      <div className="h-9 w-9 rounded py-1.5 pr-2">
        <img
          className="min-h-[30px] min-w-[30px] object-contain sm:max-h-[36px] sm:max-w-[36px]"
          alt="Company placeholder logo"
          src="/images/companyPlaceholderLogo.png"
        />
      </div>
    );
  if (!error) {
    return (
      <div className="h-9 w-9 rounded py-1.5 pr-2">
        <img
          className="min-h-[30px] min-w-[30px] object-contain sm:max-h-[36px] sm:max-w-[36px]"
          alt="Company Logo"
          src={src}
          onError={(e) => {
            setError(true);
          }}
        />
      </div>
    );
  }
}
