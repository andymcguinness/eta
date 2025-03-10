import Link from "next/link";

export default function NavBar() {
  return (
    < header className="sticky top-0 inset-x-0 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full" >
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 px-4 sm:px-6 lg:px-8 py-2">
        {/* Logo w/ Collapse Button */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <span className="text-blue-600 text-2xl font-bold">Andy</span><span className="text-2xl text-gray-600 pl-1"> McGuinness</span>
          {/* End Logo */}

        </div>
        {/* End Logo w/ Collapse Button */}

        {/* Collapse */}
        <div id="hs-header-scrollspy" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-header-scrollspy-collapse">
          <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div data-hs-scrollspy="#scrollspy" className="py-2 md:py-0 [--scrollspy-offset:220] md:[--scrollspy-offset:70] flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
              <Link className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700 active" href="#about">
                About
              </Link>

              <Link className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700 active" href="#projects">
                Projects
              </Link>
              
            </div>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header >
  )
}