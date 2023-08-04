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
              src="/iconography/arrow-left.svg"
              alt="chevron"
              width={20}
              height={20}
            />
          </div>
          <div className="flex text-[.875rem] font-semibold leading-6 text-Natural7 dark:text-Natural6">
            <p className="flex gap-[.2rem]">
              Page
              <p className="text-Natural8 dark:text-white">1</p>
              of 10
            </p>
          </div>
          <div>
            <Image
              src="/iconography/arrow-right.svg"
              alt="chevron"
              width={20}
              height={20}
            />
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden w-full items-center justify-between xl:flex">
          {/* Previous */}
          <div className="flex dark:text-white">
            <Image
              src="/iconography/arrow-left.svg"
              alt="chevron"
              width={20}
              height={20}
            />
            <p>Previous</p>
          </div>
          {/* Page Numbers */}
          <div className="flex">Page 1 of 10</div>
          {/* Next */}
          <div className="flex dark:text-white">
            <p>Next</p>
            <Image
              src="/iconography/arrow-right.svg"
              alt="chevron"
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
