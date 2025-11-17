import React from "react";
import logo from "../images/logo.svg";
const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="flex gap-2 justify-center items-center bg-linear-to-r from-[#ABFF7E] py-2 to-[#FDFEFF]">
        <button className="font-semibold px-3 py-1 text-[14px] rounded-lg text-white bg-green-600">
          New
        </button>
        <span className="text-green-800 font-semibold text-[14px]">
          AI Feature Added
        </span>
      </div>
      <div className="flex justify-around py-4 items-center">
        <div>
          <img className="h-11"  src={logo} alt="" />
        </div>
        <div className="flex gap-8 *:transition-all ">
          <a href="#" className="hover:text-green-600 primaryTest">
            Home
          </a>
          <a href="#features" className="hover:text-green-600 primaryTest">
            Features
          </a>
          <a href="#testimonials" className="hover:text-green-600 primaryTest">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-green-600 primaryTest">
            Contact
          </a>
        </div>
        <div className="flex gap-2">
         <button className="px-6 py-2 cursor-pointer bg-green-500 transition-all hover:bg-green-700 rounded-full text-white primaryTest">Get started</button>
         <button className="px-6 py-2 cursor-pointer hover:bg-gray-50  transition-all border border-black rounded-full primaryTest">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
