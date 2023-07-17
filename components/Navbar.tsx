"use client";
import Image from "next/image";
import Link from "next/link";
import StateSwitch from "./StateSwitch";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex h-[4.375rem] w-full shrink-0 items-center justify-between gap-[0.625rem] border-b border-solid border-Natural5 bg-White px-[1.5rem] py-[1.125rem] font-manrope dark:border-DarkBG3 dark:bg-DarkBG1 md:px-20 md:py-0">
        {/* Mobile Menu */}
        <button
          className="flex md:hidden"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <Image
            width={24}
            height={24}
            alt="Menu"
            src="/iconography/companyLogo-outline-property.svg"
          />
        </button>

        <Link
          href="/"
          className="hidden items-center gap-[0.375rem] pb-0 pl-[0.125rem] pr-[0.0625rem] pt-[0.125rem] md:inline-flex"
        >
          <Image src="/images/Logo.svg" alt="logo" width={20} height={20} />
          <Image
            src="/images/Jobit.svg"
            alt="logo"
            width={60.27}
            height={15.18}
          />
        </Link>

        <div className="hidden w-auto md:flex">
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
      className={`${selectedClass} px-0 py-[1.4375rem] font-manrope text-base not-italic text-Natural6 hover:text-Primary`}
    >
      {children}
    </Link>
  );
}

export default Navbar;
