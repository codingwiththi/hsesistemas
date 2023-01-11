import Link from "next/link";

export default function IndicacaoPremiada({ open, setOpen }) {
  return (
    <>
      {/* <!-- Announcement Banner --> */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800  to-blue-500">
        <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
            <div className="text-center md:text-left">
              <p className="text-xs text-white/[.8] uppercase tracking-wider">
                Indicação Premiada
              </p>
              <p className="mt-1 text-white font-medium">
                Indique nosso produto e ganha premios incríveis
              </p>
            </div>
            {/* <!-- End Col --> */}

            <div className="mt-3 text-center md:text-left md:flex md:justify-end md:items-center">
              <Link
                href="/indicacao-premiada"
                className="relative rounded px-5 py-2.5 overflow-hidden group bg-purple-800  hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-purple-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">Saiba mais</span>
              </Link>
              <button
                type="button"
                className="inline-flex rounded-md p-1.5 ml-2 text-white/[.8] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Dismiss</span>
                <svg
                  className="h-3 w-3"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End Announcement Banner --> */}
    </>
  );
}
