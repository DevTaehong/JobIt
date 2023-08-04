import Image from "next/image";

type Props = {};

const PageSelection = (props: Props) => {
  return (
    <>
      <div className="flex">
        {/* Mobile */}
        <div className="flex justify-between xl:hidden">
          <div>
            <Image
              src="/iconography/arrow-left.svg"
              alt="chevron"
              width={20}
              height={20}
            />
          </div>
          <div>
            <p>Page</p>
            <p>1 of 10</p>
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
        <div className="hidden justify-between xl:flex">
          {/* Previous */}
          <div className="flex">
            <Image
              src="/iconography/arrow-left.svg"
              alt="chevron"
              width={20}
              height={20}
            />
            <p>Previous</p>
          </div>
          {/* Page Numbers */}
          <div className="flex"></div>
          {/* Next */}
          <div className="flex">
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
