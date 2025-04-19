import React from "react";
import { Check } from "lucide-react";
import { MdOutlineLayers } from "react-icons/md";

const Pricing = () => {
  return (
    <div className="  bg-[#0E5A49]  xl:rounded-2xl ">
      <div className="bg-[#0E5A49] max-w-6xl mx-auto px-4  py-10 font-sans xl:px-0  ">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-white font-bold">pricing.</p>
          <h1 className="text-3xl font-bold my-4 text-white xl:text-5xl">
            Simple, scalable pricing.
          </h1>
          <p className="text-base text-gray-400">
            No extra charges. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-col-3 sm:grid-cols-2  xl:grid-cols-3   gap-6 xl:gap-40">
          {/* Essentials Card */}
          <div className="bg-[#F6EEE9] border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow sm:w-74 md:w-90 lg:w-120 xl:w-97">
            <div className="mb-6 text-center  flex flex-col items-center   ">
            <div className=" flex justify-center items-center bg-white rounded-full size-12 m-5 shadow-xl"><MdOutlineLayers size={25} className="text-green-800" /></div>
            <h2 className="text-green-800 font-bold  mb-4 text-xl">Basic plan</h2>

              <h3 className=" font-bold text-gray-900 mb-4">
                <span className="text-5xl font-bold ">$49</span>/mo
              </h3>
              <p className="text-gray-600">Billed annually.</p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
              <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600 ">
                Up to 10 individual users
                </span>
              </li>
              <li className="flex items-start">
              <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600">Basic reporting and analytics</span>
              </li>
              <li className="flex items-start">
              <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600">Project Management</span>
              </li>
              <li className="flex items-start">
              <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600">20GB individual data each user</span>
              </li>
              <li className="flex items-start">
                <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600">
                  Basic chat and email support
                </span>
              </li>
            </ul>
            <div className="my-5 w-full h-[1px] bg-gray-400"></div>

            <button className="w-full  bg-[#13715B] hover:bg-[#0E614D] text-white py-3 rounded-lg  font-medium transition-colors">
              Start a free trial
            </button>
          </div>

          {/* Popular Business Card */}
          <div className="bg-[#F6EEE9] border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow sm:w-74 md:w-90 lg:w-120 xl:w-97">
            <div className="mb-6 text-center  flex flex-col items-center   ">
            <div className=" flex justify-center items-center bg-white rounded-full size-12 m-5 shadow-xl"><MdOutlineLayers size={25} className="text-green-800" /></div>
            <h2 className="text-green-800 font-bold  mb-4 text-xl">Basic plan</h2>

              <h3 className=" font-bold text-gray-900 mb-4">
                <span className="text-5xl font-bold ">$49</span>/mo
              </h3>
              <p className="text-gray-600">Billed annually.</p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
              <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600 ">
                Up to 10 individual users
                </span>
              </li>
              <li className="flex items-start">
              <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600">Basic reporting and analytics</span>
              </li>
              <li className="flex items-start">
              <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600">Project Management</span>
              </li>
              <li className="flex items-start">
              <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600">20GB individual data each user</span>
              </li>
              <li className="flex items-start">
                <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600">
                  Basic chat and email support
                </span>
              </li>
            </ul>
            <div className="my-5 w-full h-[1px] bg-gray-400"></div>

            <button className="w-full  bg-[#13715B] hover:bg-[#0E614D] text-white py-3 rounded-lg  font-medium transition-colors">
              Start a free trial
            </button>
          </div>

          {/* Enterprise Card */}
          <div className="bg-[#F6EEE9] border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow sm:w-74  sm:ml-40 md:w-90 md:ml-46 lg:w-120 lg:ml-60 xl:m-0 xl:w-97">
            <div className="mb-6 text-center  flex flex-col items-center   ">
            <div className=" flex justify-center items-center bg-white rounded-full size-12 m-5 shadow-xl"><MdOutlineLayers size={25} className="text-green-800" /></div>
            <h2 className="text-green-800 font-bold  mb-4 text-xl">Basic plan</h2>

              <h3 className=" font-bold text-gray-900 mb-4">
                <span className="text-5xl font-bold ">$49</span>/mo
              </h3>
              <p className="text-gray-600">Billed annually.</p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
              <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600 ">
                Up to 10 individual users
                </span>
              </li>
              <li className="flex items-start">
              <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600">Basic reporting and analytics</span>
              </li>
              <li className="flex items-start">
              <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600">Project Management</span>
              </li>
              <li className="flex items-start">
              <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600">20GB individual data each user</span>
              </li>
              <li className="flex items-start">
                <Check
                  className="bg-green-200 p-1 text-green-600 rounded-full mr-2 mt-1 flex-shrink-0"
                  size={25}
                />
                <span className="text-gray-600">
                  Basic chat and email support
                </span>
              </li>
            </ul>
            <div className="my-5 w-full h-[1px] bg-gray-400"></div>

            <button className="w-full  bg-[#13715B] hover:bg-[#0E614D] text-white py-3 rounded-lg  font-medium transition-colors">
              Start a free trial
            </button>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm">
          Prices exclude any applicable taxes.
        </div>
      </div>
    </div>
  );
};

export default Pricing;
