import Image from "next/image";

type Props = {};

const PageSelection = (props: Props) => {
  return (
    <>
      <div className="flex">
        {/* Mobile */}
        <div className="flex w-full items-center justify-between pt-[1rem] xl:hidden">
          <div>
            <Image
              className="flex dark:hidden"
              src="/iconography/arrow-left.svg"
              alt="arrow left"
              width={20}
              height={20}
            />
            <Image
              className="hidden dark:flex"
              src="/iconography/arrow-left-white.svg"
              alt="arrow left"
              width={20}
              height={20}
            />
          </div>
          <div className="flex text-[.875rem] font-semibold leading-6 text-Natural7  dark:text-Natural6">
            <p className="flex gap-[.2rem]">
              Page
              <p className="text-Natural8 dark:text-white">1</p>
              of 10
            </p>
          </div>
          <div>
            <Image
              className="flex dark:hidden"
              src="/iconography/arrow-right.svg"
              alt="arrow right"
              width={20}
              height={20}
            />
            <Image
              className="hidden dark:flex"
              src="/iconography/arrow-right-white.svg"
              alt="arrow right"
              width={20}
              height={20}
            />
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden w-full items-center justify-between border-t border-t-Natural2 pt-[1rem] dark:border-t-DarkBG3 xl:flex">
          {/* Previous */}
          <div className="flex items-center justify-center gap-[.5rem] rounded-[.5rem] border border-Natural4 bg-white px-[.875rem] py-[.5rem] dark:border-DarkBG3 dark:bg-DarkBG2">
            <Image
              className="flex dark:hidden"
              src="/iconography/arrow-left.svg"
              alt="arrow left"
              width={20}
              height={20}
            />
            <Image
              className="hidden dark:flex"
              src="/iconography/arrow-left-white.svg"
              alt="arrow left"
              width={20}
              height={20}
            />
            <p className="text-[.875rem] font-bold leading-6 dark:text-Natural5">
              Previous
            </p>
          </div>
          {/* Page Numbers */}
          <div className="flex items-center gap-[.13rem] text-[.875rem] font-semibold leading-6 dark:text-Natural7">
            <p className="items-center rounded-[.5rem] bg-Primary p-[.75rem]">
              1
            </p>
            <p className="p-[.75rem]">2</p>
            <p className="p-[.75rem]">3</p>
          </div>
          {/* Next */}
          <div className="flex">
            <p className="text-[.875rem] font-bold leading-6 dark:text-Natural5">
              Next
            </p>
            <Image
              className="flex dark:hidden"
              src="/iconography/arrow-right.svg"
              alt="arrow right"
              width={20}
              height={20}
            />
            <Image
              className="hidden dark:flex"
              src="/iconography/arrow-right-white.svg"
              alt="arrow right"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSelection;
