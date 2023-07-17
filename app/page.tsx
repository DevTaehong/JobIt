
export default function Home() {
  return (
    <>
      <div>
        <nav>
          {/* <Navbar /> */}
        </nav>
        <main className="w-full flex-col">
          {/* Heading */}
          <div className="flex w-full flex-col">
            <h1 className="pl-[5rem] pt-[7.5rem] font-[Manrope] text-2xl font-bold leading-10">Welcome to the Job Search Platform for Developers</h1>
            {/* Date */}
            <h2 className="pl-[5rem] pt-[.88rem] font-[Manrope] text-sm font-medium leading-8">Date</h2>

          </div>
          {/* Latest Job Posts */}
          <div className="mt-[2.19rem] flex flex-col pl-[5.25rem]">
            <span className="flex items-center justify-between lg:w-2/3">
              <h3 className="gap-2 px-[.62rem] py-[.44rem] font-[Manrope] text-[1.375rem] font-bold leading-8">Latest Job Posts</h3>
              <button className="flex ">See All</button>
            </span>
            <div>
              {/* Card One */}
              <div> Card One</div>
              {/* Card Two */}
              <div>Card Two</div>
              {/* Card Three */}
              <div>Card Three</div>
              {/* Card Four */}
              <div>Card Four</div>
            </div>
          </div>
          {/* Recomended For You */}
          <div>
            <span>
              <h3>Recomended For You</h3>
              <button>See All</button>
            </span>
            {/* Inline Job Cards */}
            <div>

            </div>
          </div>
          {/* Featured Compaines */}
          <div>
            <span>
              <h3>Featured Compaines</h3>
            </span>
            <div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
}
