"use client";
import Image from "next/image";
import Link from "next/link";
import StateSwitch from "./StateSwitch";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header>
      <nav className="flex h-[4.375rem] w-full shrink-0 items-center justify-between gap-[0.625rem] border-b border-solid border-Natural5 bg-White px-20 py-0 dark:border-DarkBG3 dark:bg-DarkBG1">
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
              <Link
                href="/"
                className={`${
                  pathName === "/" &&
                  "border-b border-solid border-Primary text-Primary"
                } px-0 py-[1.4375rem] font-manrope text-base font-medium not-italic text-Natural6 hover:text-Primary`}
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="/jobsearch"
                className={`${
                  pathName === "/jobsearch" &&
                  "border-b border-solid border-Primary text-Primary"
                } px-0 py-[1.4375rem] font-manrope text-base font-medium not-italic text-Natural6 hover:text-Primary`}
              >
                Job Search
              </Link>
            </li>
            <li>
              <Link
                href="/estimatedsalaries"
                className={`${
                  pathName === "/estimatedsalaries" &&
                  "border-b border-solid border-Primary text-Primary"
                } px-0 py-[1.4375rem] font-manrope text-base font-medium not-italic text-Natural6 hover:text-Primary`}
              >
                Estimated Salaries
              </Link>
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

export default Navbar;
