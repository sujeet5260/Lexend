import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-[#F5EEE9]">
      <div className="uc-navbar container mx-auto bg-[#F5EEE9] min-h-[4rem] flex justify-between items-center px-4 lg:pt-3 xl:justify-around ">
      {/* Logo image  */}
      <div className="uc-navbar-left flex gap-16">
        <img
          src="https://lexend-nextjs.vercel.app/assets/images/common/logo-light.svg"
          alt=""
        />

        <div className="uc-navbar-nav hidden lg:flex items-center gap-6 [&>*]:flex [&>*]:items-center [&>*]:gap-1  [&>*]:font-semibold text-base xl:gap-10">
          <Link to=''>Features <IoIosArrowDown />
          </Link>
          <Link to=''>Products <IoIosArrowDown /></Link>
          <Link to=''>Resources <IoIosArrowDown /></Link>
          <Link to=''>Pricing </Link>
          <Link to=''>More</Link>
        </div>
      </div>
      {/* Hamburger-Menu */}
      <div className="uc-navbar-right lg:flex items-center gap-7 ">
        <RxHamburgerMenu size={23} className="font-bold lg:hidden" />
        <ul className=" hidden lg:flex">
          <Link className="font-semibold text-base">Request a demo</Link>
        </ul>
        <button
          type="button"
          className="hidden lg:flex text-base font-semibold bg-[#12715B] text-white rounded-lg py-3 px-3 leading-none cursor-pointer hover:bg-opacity-90"
        >
          Start free trial
        </button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
