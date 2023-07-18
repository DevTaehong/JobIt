"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";
import NavBarLink from "@/components/NavBarLink";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex h-[3.875rem] w-full shrink-0 items-center justify-between gap-[0.625rem] border-b border-solid border-Natural5 bg-White px-[1.5rem] py-[1.125rem] font-manrope dark:border-DarkBG3 dark:bg-DarkBG1 md:h-[4.375rem] md:px-20 md:py-0">
        <Sheet onOpenChange={() => setOpen((prevOpen) => !prevOpen)}>
          <SheetTrigger asChild>
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
          <SheetContent className="flex shrink items-center justify-start bg-White dark:bg-DarkBG1">
            <ul className="flex flex-col items-start gap-6">
              <li>
                <NavBarLink href="/" open={open}>
                  1
                </NavBarLink>
              </li>
              <li>
                <NavBarLink href="/jobsearch" open={open}>
                  2
                </NavBarLink>
              </li>
              <li>
                <NavBarLink href="/estimatedsalaries" open={open}>
                  3
                </NavBarLink>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
