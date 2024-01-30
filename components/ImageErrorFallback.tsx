"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageErrorFallback({
  src,
  card,
}: {
  src: string;
  card?: string;
}) {
  const [error, setError] = useState(false);

  let width = 48;
  let height = 48;
  const defaultSrc = "/iconography/jobit-icon.svg";
  const alt = "Company Placeholder logo";
  const className = "object-contain shrink-0";

  if (
    card === "companyDetailJobCard" ||
    card === "jobSearchCard" ||
    card === "inlineJobCard"
  ) {
    width = 36;
    height = 36;
  }

  if (!src || error) {
    return (
      <Image
        src={defaultSrc}
        width={width}
        height={height}
        alt={alt}
        className={className + " grayscale"}
      />
    );
  }

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt="Company Logo"
      className={className}
      onError={() => setError(true)}
    />
  );
}
