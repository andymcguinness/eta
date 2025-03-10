import Link from "next/link";
import Footer from "./footer";

export default function Projects() {
  return (
    <div className="max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-24 mx-auto min-h-dvh" id="projects">
      <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex mb-20">
        <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
          <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">My Projects</h2>
          <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">These are some of my favorite projects I've built. The technologies used are listed, and you can check out both the project and the code! More code can always be found on my Github.</p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-top items-top rounded-t-xl">
            <img src="/imaginaryproducts.png" height="52" className="rounded-t-xl" />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
              OpenAI, Next.js, TailwindCSS, Framer Motion
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              Imaginary Products
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              An AI-powered imaginary product generator. Having fun with hallucinations.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="https://imaginaryproducts.com">
              View Project
            </a>
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="https://github.com/andymcguinness/imaginaryproducts">
              View Code
            </a>
          </div>
        </div>
        {/* End Card */}

        {/* Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-top items-top rounded-t-xl overflow-hidden">
            <img src="/codetunes.png" className="inline-flex rounded-t-xl align-top" />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
              Next.js, TailwindCSS, Framer Motion
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              CodeTunes
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              Music for your flow state. Building a long-thought-about product.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="https://code-tunes.vercel.app/">
              View Project
            </a>
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="https://github.com/andymcguinness/codetunes">
              View Code
            </a>
          </div>
        </div>
        {/* End Card */}

        {/* Card */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="h-52 flex flex-col justify-top items-top rounded-t-xl overflow-hidden">
            <img src="/thesideprojectguy.png" className="inline-flex rounded-t-xl align-top" />
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-500">
              OpenAI, Next.js, TailwindCSS
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
              The Side Project Guy
            </h3>
            <p className="mt-3 text-gray-500 dark:text-neutral-500">
              A home for all my side projects. I post projects I've completed and ideas I may not get to.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="https://thesideprojectguy.com/">
              View Project
            </a>
            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="https://github.com/andymcguinness/thesideprojectguy">
              View Code
            </a>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Grid */}

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  )
}