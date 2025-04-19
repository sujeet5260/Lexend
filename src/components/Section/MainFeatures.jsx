import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import { PiPlayCircle } from "react-icons/pi";
import { BsJournalBookmark } from "react-icons/bs";
import { LuFolderTree } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";

export default function MainFeatures() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 [&>*]:my-10 ">
      {/* Main Features Header */}
      <div className="text-center mb-12">
        <p className="text-green-700 font-black mb-4">Main features</p>

        <h1 className="Graphik text-3xl text-black md:text-[1.900rem] lg:text-[2.40rem] xl:text-5xl  ">
          A CRM tools help you keep{" "}
          <span className="xl:block">
            track of <span className="lg:block xl:inline"> leads</span>
          </span>
        </h1>

        <p className="text-base text-gray-600 max-w-3xl mx-auto  mt-4 md:mt-5">
          Join the thousands of satisfied users and take your business to the
          next level.{" "}
          <span className="xl:block">Trusted by over 2,500 startups.</span>
        </p>
      </div>

      {/* -----------------------------  Dash-board-Box-2 ----------------------------- */}

      <div className="[&>*]:mt-16">
        {/* ------- card-1 ----------- */}
        <div className="grid md:grid-cols-2 gap-6 items-center md:gap-12 lg:gap-30 ">
          {/* Left Column: Dashboard Preview */}
          <div className="overflow-hidden rounded-2xl shadow-sm lg:w-100  xl:w-120 ">
            <img
              className=" bg-cover "
              src="https://lexend-nextjs.vercel.app/assets/images/template/home-four-feature-01.png"
              alt=""
            />
          </div>

          {/* Right Column: Feature Description */}
          <div className="flex flex-col items-start">
            <div className=" hidden lg:flex w-12 h-12 bg-[#12715B] rounded-lg  items-center justify-center mb-6">
              <BsCloudDownload className="text-white size-6" />
            </div>

            <h2 className=" Graphik text-[1.35rem] font-black sm:text-3xl xl:text-4xl ">
              Ensuring timely{" "}
              <span className="md:block lg:inline">delivery and</span> maximum{" "}
              <span className="sm:block md:inline ">efficiency</span>
            </h2>

            <p className="text-[1.050rem] text-gray-600 mt-2 mb-8 md:pr-7 lg:pr-14 lg:mt-4 xl:pr-9">
              We offers advanced project management features such as Gantt
              charts, task dependencies, and resource allocation
            </p>

            <a
              href="#"
              className="flex items-center  text-green-700 font-black hover:text-green-800 transition-colors"
            >
              Let's find out
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* ---------- card-2 -------- */}
        <div className="flex  flex-col-reverse md:grid md:grid-cols-2  gap-6 items-center md:gap-12 lg:gap-30 ">
          {/* Left Column: Dashboard Preview */}
          <div className="flex flex-col items-start">
            <div className=" hidden lg:flex w-12 h-12 bg-[#12715B] rounded-lg  items-center justify-center mb-6">
             
              <BsJournalBookmark  className="text-white size-6" />
            </div>

            <h2 className=" Graphik text-[1.40rem] pr-10 font-black sm:text-3xl xl:text-4xl ">
              No more digging endless reports and spreadsheets
            </h2>

            <p className="text-[1rem]   text-gray-600 mt-2 mb-8 md:pr-7 lg:pr-14 lg:mt-4 xl:pr-9">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>

            <a
              href="#"
              className="flex items-center  text-green-700 font-black hover:text-green-800 transition-colors"
            >
              Let's find out
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Right Column: Feature Description */}
          <div className="overflow-hidden rounded-2xl shadow-sm lg:w-100  xl:w-120 ">
            <img
              className=" bg-cover "
              src="https://lexend-nextjs.vercel.app/assets/images/template/home-four-feature-02.png"
              alt=""
            />
          </div>
        </div>

        {/* ---------- card-3 -------- */}

        <div className="grid md:grid-cols-2 gap-6 items-center md:gap-12 lg:gap-30 ">
          {/* Left Column: Dashboard Preview */}
          <div className="overflow-hidden rounded-2xl shadow-sm lg:w-100  xl:w-120 ">
            <img
              className=" bg-cover "
              src="https://lexend-nextjs.vercel.app/assets/images/template/home-four-feature-03.png"
              alt=""
            />
          </div>

          {/* Right Column: Feature Description */}
          <div className="flex flex-col items-start">
            <div className=" hidden lg:flex w-12 h-12 bg-[#12715B] rounded-lg  items-center justify-center mb-6">
              
              <LuFolderTree className="text-white size-6"/>
            </div>

            <h2 className=" Graphik text-[1.39rem]  font-black sm:pr-7 sm:text-3xl xl:text-4xl ">
              Share files, and communicate with your team in real-time
            </h2>

            <p className="text-[1rem] text-gray-600 mt-2 mb-8 md:pr-7 lg:pr-14 lg:mt-4 xl:pr-9">
              You can easily assign tasks, share files, and communicate with
              your team in real-time, no matter where they are located.
            </p>

            <a
              href="#"
              className="flex items-center  text-green-700 font-black hover:text-green-800 transition-colors"
            >
              Let's find out
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* --------- Card-4 ----------- */}

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 items-center md:gap-12 lg:gap-30 ">
          {/* Left Column: Dashboard Preview */}
          <div className="flex flex-col items-start">
            <div className=" hidden lg:flex w-12 h-12 bg-[#12715B] rounded-lg  items-center justify-center mb-6">
            
              <IoDiamondOutline className="text-white size-6" />
            </div>

            <h2 className=" Graphik text-[1.39rem] font-black sm:text-3xl md:pr-7 xl:text-4xl ">
              Collaboration is made seamless with Lexend
            </h2>

            <p className="text-[1.050rem] text-gray-600 mt-2 mb-8 md:pr-7 lg:pr-14 lg:mt-4 xl:pr-9">
              Get real-time access to approvals, comments and version tracking.
              Smart features like variables and conditional logic help you
              eliminate Tool errors.
            </p>

            <a
              href="#"
              className="flex items-center  text-green-700 font-black hover:text-green-800 transition-colors"
            >
              Let's find out
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Right Column: Feature Description */}
          <div className="overflow-hidden rounded-2xl shadow-sm lg:w-100  xl:w-120 ">
            <img
              className=" bg-cover "
              src="https://lexend-nextjs.vercel.app/assets/images/template/home-four-feature-04.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* -------- Trial-Card --------- */}

      <div className=" bg-[#F5EEE9] p-8 flex flex-col items-center  rounded-2xl lg:py-15  ">
        <h1 className="font-black Graphik text-3xl  text-center lg:text-4xl ">
          Start your 30-days free trail.
        </h1>
        <h1 className="text-gray-600 text-center mt-4 ">
          Join over 2,500+ startups already growing with Lexend.
        </h1>
        <button className="font-black bg-white w-65 shadow-md h-12 rounded-lg mt-4 relative flex items-center justify-center gap-2 sm:w-135 sm:mt-6 lg:w-160">
          {" "}
          <PiPlayCircle className="size-6" />
          View demo
        </button>
        <button className="font-black bg-[#12715b] text-white w-65 shadow-md h-12 rounded-lg mt-4 relative flex items-center justify-center gap-2 sm:w-135 lg:w-160">
          Start free trail
        </button>
      </div>
    </div>
  );
}
