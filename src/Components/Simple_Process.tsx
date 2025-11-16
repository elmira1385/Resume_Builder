import React from "react";

const Simple_Process = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="flex primaryTest items-center gap-2  text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-zap"
          aria-hidden="true"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
        </svg>
        <span>Simple Process</span>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-4xl font-medium text-[#314158]">Build your resume</p>
        <p className="text-[16px] w-180 text-center text-[#62748e]">Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features.</p>
      </div>
      </div>
      <div className="flex">
         
      </div>
    </div>
  );
};

export default Simple_Process;
