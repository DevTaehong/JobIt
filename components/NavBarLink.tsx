"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function NavBarLink({
  href,
  children,
  open,
}: {
  href: string;
  children: React.ReactNode;
  open: boolean;
}) {
  const pathName = usePathname();
  const mobileNoBorderBottom = open ? "" : "border-b ";
  const mobileFontWeight400 = open ? "font-normal" : "";

  // when a user is on the current page, we want to highlight the link
  // on mobile, font is font-weight = 400, on desktop, font is font-weight = 500
  const selectedClass =
    pathName === href
      ? mobileNoBorderBottom +
        "border-solid border-Primary text-Primary font-bold"
      : open
      ? mobileFontWeight400
      : "font-medium";

  return (
    <Link
      href={href}
      className={`${selectedClass} px-0 py-[1.4375rem] text-base not-italic text-Natural6 hover:text-Primary`}
    >
      {children}
    </Link>
  );
}

export default NavBarLink;
