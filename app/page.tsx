
export default function Home() {
  return (
    <>
      <div>
        <nav>
          {/* <Navbar /> */}
        </nav>
        <main className="w-auto">
          {/* Heading */}
          <section>
            <h1 className="pl-[5rem] pt-[7.5rem] font-[Manrope] text-2xl font-bold leading-10">Welcome to the Job Search Platform for Developers</h1>
            {/* Date */}
            <h2 className="pl-[5rem] pt-[.88rem] font-[Manrope] text-sm font-medium leading-8">Date</h2>
          </section>
          <div className="flex">
            {/* Latest Job Posts */}
            <section className="mt-[2.19rem] w-2/3 pl-[5.25rem]">
              <span className="flex items-center justify-between">
                <h3 className="font-[Manrope] text-[1.375rem] font-bold leading-8">Latest Job Posts</h3>
                <button className="flex items-center gap-2 border px-[.62rem] py-[.44rem] text-xs font-medium	 leading-6">See All</button>
              </span>
              <div className="mr-10 mt-[1.88rem] flex-row">
                <div className="flex">
                  {/* Card One */}
                  <div className="mr-10"> Card One</div>
                  {/* Card Two */}
                  <div className="">Card Two</div>
                </div>
                <div className="mt-10 flex">
                  {/* Card Three */}
                  <div className="mr-10">Card Three</div>
                  {/* Card Four */}
                  <div className="">Card Four</div>
                </div>
              </div>
            </section>
            {/* Recomended For You */}
            <section className="mt-[2.19rem] w-1/3 pl-[2.5rem] pr-[4.75rem]">
              <span className="flex justify-between">
                <h3 className="font-[Manrope] text-[1.375rem] font-bold leading-8">Recomended For You</h3>
                <button className="flex items-center gap-2 border px-[.62rem] py-[.44rem] text-xs font-medium	 leading-6">See All</button>
              </span>
              {/* Inline Job Cards */}
              <div>
              </div>
            </section>
          </div>
          {/* Featured Compaines */}
          <section className="ml-[5.25rem] mt-10">
            <span>
              <h3 className="font-[Manrope] text-2xl font-bold leading-10">Featured Compaines</h3>
            </span>
            <div className="mt-[1.25rem] flex gap-[2.25rem]">
              <div>
                Feature
              </div>
              <div>
                Feature
              </div>
              <div>
                Feature
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
