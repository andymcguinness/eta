"use client";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Link from 'next/link';

export default function Hero() {
  const codeString = `// Merge two arrays, and sort them

function merge(nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
      for (let j = 0; j < n; j++) {
          if (j === i - m) {
              nums1[i] = nums2[j];
          }
      }
  }
  
  nums1.sort((a, b) => {
      return a - b;
  });
};`

  return (
    <div className="relative overflow-hidden min-h-dvh">
      <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
        <div className="bg-linear-to-r from-violet-300/50 to-purple-100 blur-3xl w-100 h-400 rotate-[-60deg] transform -translate-x-40 dark:from-violet-900/50 dark:to-purple-900"></div>
        <div className="bg-linear-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[1440px] h-400 rounded-fulls origin-top-left -rotate-12 -translate-x-60 dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
      </div>

      <div className="max-w-[85rem] mx-auto py-10 sm:py-0 px-4 sm:px-6 lg:px-8 z-10 relative min-h-dvh">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center h-dvh">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Hi there, I&apos;m <span className="text-blue-600">Andy</span>!</h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">Full-stack developer and full-time dreamer, based in the San Francisco Bay Area. Click below to learn more!</p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#about">
                About Andy
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </Link>
            </div>
          </div>

          <div className="relative ms-4">

            <div>
              <div className="rounded-t-sm bg-gray-100 p-2">
                <span className="inline-block h-4 w-4 rounded-full bg-gray-300 mr-1"></span>
                <span className="inline-block h-4 w-4 rounded-full bg-gray-300 mr-1"></span>
                <span className="inline-block h-4 w-4 rounded-full bg-gray-300"></span>
              </div>

              <div className="browser-content h-[50vh] bg-[#282a36]">
                <SyntaxHighlighter language="javascript" style={atomOneDark} showLineNumbers={true}>
                  {codeString}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}