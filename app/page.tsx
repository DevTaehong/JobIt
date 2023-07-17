
export default function Home() {
  return (
    <>
      <div>
        <nav>
          {/* <Navbar /> */}
        </nav>
        <main className="w-full">
          {/* Heading */}
          <section>
            <h1 className="pl-[5rem] pt-[7.5rem] font-[Manrope] text-2xl font-bold leading-10">Welcome to the Job Search Platform for Developers</h1>
            {/* Date */}
            <h2 className="pl-[5rem] pt-[.88rem] font-[Manrope] text-sm font-medium leading-8">Date</h2>

          </section>
          {/* Latest Job Posts */}
          <section className="mt-[2.19rem] pl-[5.25rem]">
            <span className="flex items-center justify-between lg:w-2/3">
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
          <section className="align-rigth">
            <span className="flex">
              <h3>Recomended For You</h3>
              <button>See All</button>
            </span>
            {/* Inline Job Cards */}
            <div>

            </div>
          </section>
          {/* Featured Compaines */}
          <section>
            <span>
              <h3>Featured Compaines</h3>
            </span>
            <div>

            </div>
          </section>
        </main>
      </div>
    </>
  );
}
