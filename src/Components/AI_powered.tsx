import React from "react";
import img1 from "../images/1.jpg";
import img2 from "../images/photo-2.jpg";
import img3 from "../images/photo-3.jpg";
import img4 from "../images/photo-4jpg.jpg";
import img5 from "../images/photo-2.jpg";
import arm1 from "../images/instagram.svg";
import arm2 from "../images/framer.svg";
import arm3 from "../images/microsoft.svg";
import arm4 from "../images/huawei.svg";
import arm5 from "../images/walmart.svg";

const AI_powered = () => {
  return (
    <div className="flex flex-col relative justify-center items-center py-20 gap-6">
      <div className="absolute top-70 -z-10 left-1/2 -translate-1/2 size-130  bg-green-300 blur-[100px] opacity-30"></div>
      <div className="flex gap-4">
        <div className="flex -space-x-3 items-center">
          <img
            className="size-8 rounded-full border border-white object-cover"
            src={img5}
            alt=""
          />
          <img
            className="size-8 rounded-full border border-white object-cover"
            src={img4}
            alt=""
          />
          <img
            className="size-8 rounded-full border border-white object-cover"
            src={img3}
            alt=""
          />
          <img
            className="size-8 rounded-full border border-white object-cover"
            src={img2}
            alt=""
          />
          <img
            className="size-8 rounded-full border border-white object-cover"
            src={img1}
            alt=""
          />
        </div>
        <div className="flex flex-col ">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star text-transparent fill-green-600"
              aria-hidden="true"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star text-transparent fill-green-600"
              aria-hidden="true"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star text-transparent fill-green-600"
              aria-hidden="true"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star text-transparent fill-green-600"
              aria-hidden="true"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star text-transparent fill-green-600"
              aria-hidden="true"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
          </div>
          <div>
            <p className="primaryTest text-gray-700">Used by 10,000+ users</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[60px] w-210 font-bold leading-20">
          Land your dream job with{" "}
          <span className="text-green-600">AI-powered</span> resumes.
        </p>
      </div>
      <div>
        <p className="text-[16px] w-100 text-center">
          Create, edit and download professional resumes with AI-powered
          assistance.
        </p>
      </div>
      <div className="flex gap-4">
        <button className="bg-green-500 cursor-pointer hover:bg-green-600 flex gap-2 primaryTest justify-center items-center text-white ring-offset-2 ring-1 ring-green-400  px-8 py-3 rounded-full transition-all">
          <p>Get started</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right ml-1 size-4"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
        <button className="primaryTest flex cursor-pointer gap-2 justify-center items-center text-gray-700 border border-gray-400 hover:bg-white  px-8 py-3 rounded-full transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-video size-5"
            aria-hidden="true"
          >
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
            <rect x="2" y="6" width="14" height="12" rx="2"></rect>
          </svg>
          <p>Try demo</p>
        </button>
      </div>
      <div className="py-10 flex flex-col gap-10 justify-center items-center">
        <div className="text-gray-700 primaryTest">Trusting by leading brands, including</div>
        <div className="flex gap-20">
            <img className="h-6" src={arm1} alt="" />
            <img className="h-6" src={arm2} alt="" />
            <img className="h-6" src={arm3} alt="" />
            <img className="h-6" src={arm4} alt="" />
            <img className="h-6" src={arm5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AI_powered;
