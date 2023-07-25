"use client";

export default function ImageErrorFallback({ src }: { src: string }) {
  return (
    <img
      alt="Company Logo"
      src={src}
      onError={(e) => {
        e.currentTarget.src = "/images/companyPlaceholderLogo.png";
      }}
    />
  );
}
