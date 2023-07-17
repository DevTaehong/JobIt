"use client";
import Image from "next/image";
import Link from "next/link";
import StateSwitch from "./StateSwitch";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex h-[4.375rem] w-full shrink-0 items-center justify-between gap-[0.625rem] border-b border-solid border-Natural5 bg-White px-20 py-0 font-manrope dark:border-DarkBG3 dark:bg-DarkBG1">
        <Link
          href="/"
          className="inline-flex items-center gap-[0.375rem] pb-0 pl-[0.125rem] pr-[0.0625rem] pt-[0.125rem]"
        >
          <Image src="/images/Logo.svg" alt="logo" width={20} height={20} />
          <Image
            src="/images/Jobit.svg"
            alt="logo"
            width={60.27}
            height={15.18}
          />
        </Link>

        <div className="flex w-auto">
          <ul className="flex gap-[1.875rem]">
            <li>
              <NavBarLink href="/">Overview</NavBarLink>
            </li>
            <li>
              <NavBarLink href="/jobsearch">Job Search</NavBarLink>
            </li>
            <li>
              <NavBarLink href="/estimatedsalaries">
                Estimated Salaries
              </NavBarLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-[0.625rem]">
          <Image
            width={24}
            height={24}
            alt="Light mode"
            src="/iconography/outline-sun.svg"
          />
          <StateSwitch />
          <Image
            width={24}
            height={24}
            alt="Dark mode"
            src="/iconography/outline-moon.svg"
          />
        </div>
      </nav>
    </header>
  );
};

function NavBarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const selectedClass =
    pathName === href
      ? "border-b border-solid border-Primary text-Primary font-bold"
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

export default Navbar;
