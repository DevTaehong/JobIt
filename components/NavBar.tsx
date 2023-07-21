"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import StateSwitch from "./StateSwitch";
import { useState } from "react";
import NavBarLink from "@/components/NavBarLink";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const mobileSelectedClass = "rounded-md bg-Natural1 dark:bg-DarkBG3";

  const setClose = (e: React.MouseEvent<HTMLUListElement>) => {
    // target is the element that triggered the event (e.g., the user clicked on)
    // currentTarget is the element that the event listener is attached to.
    const t = e.target as HTMLElement;
    const p = e.currentTarget as HTMLElement;
    if (t !== p) {
      setOpen(false);
    }
  };

  return (
    <header>
      <nav className="flex h-[3.875rem] w-full shrink-0 items-center justify-between gap-[0.625rem] border-b border-solid border-Natural5 bg-White px-[1.5rem] py-[1.125rem] dark:border-DarkBG3 dark:bg-DarkBG1 md:h-[4.375rem] md:px-20 md:py-0">
        {/* Mobile navigation */}
        <Sheet
          open={open}
          onOpenChange={() => setOpen((prevOpen) => !prevOpen)}
        >
          <SheetTrigger asChild className="flex md:hidden">
            {!open ? (
              <Image
                width={24}
                height={24}
                alt="Mobile Menu"
                src="/iconography/companyLogo-outline-property.svg"
              />
            ) : (
              <div className="flex items-center gap-[0.375rem] pb-0 pl-[0.125rem] pr-[0.0625rem] pt-[0.125rem]">
                <Image
                  src="/images/Logo.svg"
                  alt="logo"
                  width={20}
                  height={20}
                />
                <Image
                  src="/images/Jobit.svg"
                  alt="logo"
                  width={60.27}
                  height={15.18}
                />
              </div>
            )}
          </SheetTrigger>
          <SheetContent className="flex shrink flex-wrap content-center items-center justify-start gap-12 bg-White dark:bg-DarkBG1">
            <ul
              className="flex w-[14.75rem] flex-col items-start"
              onClick={(e) => setClose(e)}
            >
              <li
                className={`py-[0.75rem] pl-2 pr-[9.1875rem] ${
                  pathName === "/" && mobileSelectedClass
                } `}
              >
                <NavBarLink href="/" open={open}>
                  Overview
                </NavBarLink>
              </li>
              <li
                className={`py-[0.75rem] pl-2 pr-[8.625rem]  ${
                  pathName === "/jobsearch" && mobileSelectedClass
                }`}
              >
                <NavBarLink href="/jobsearch" open={open}>
                  Job Search
                </NavBarLink>
              </li>
              <li
                className={`py-[0.75rem] pl-2 pr-[5.1875rem]  ${
                  pathName === "/estimatedsalaries" && mobileSelectedClass
                }`}
              >
                <NavBarLink href="/estimatedsalaries" open={open}>
                  Estimated Salaries
                </NavBarLink>
              </li>
            </ul>
            {/* when opening the Sheet, show the theme switch button */}
            <div className="pl-2">
              <ThemeSwitch />
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop navigation */}
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
              <NavBarLink href="/" open={open}>
                Overview
              </NavBarLink>
            </li>
            <li>
              <NavBarLink href="/jobsearch" open={open}>
                Job Search
              </NavBarLink>
            </li>
            <li>
              <NavBarLink href="/estimatedsalaries" open={open}>
                Estimated Salaries
              </NavBarLink>
            </li>
          </ul>
        </div>

        {open ? (
          // on mobile, when opening the Sheet, show the close button
          <Image
            src="/images/close-24-outline.png"
            alt="close button"
            width={16}
            height={16}
          />
        ) : (
          // on mobile, when closing the Sheet, show the theme switch button
          <ThemeSwitch />
        )}
      </nav>
    </header>
  );
};

function ThemeSwitch() {
  return (
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
  );
}

export default Navbar;
