import { useState } from "react";


type typeFeatures = [
  {
    title: string;
    description: string;
    svg: string;
    n: string;
  },
  {
    title: string;
    description: string;
    svg: string;
    n: string;
  },
  {
    title: string;
    description: string;
    svg: string;
    n: string;
  }
];

const Simple_Process = () => {
  const features: typeFeatures = [
    {
      title: "Real-Time Analytics",
      description:
        "Get instant insights into your finances with live dashboards.",
      svg: "./src/images/key.png",
      n: "bg-violet-100",
    },
    {
      title: "Bank-Grade Security",
      description:
        "End-to-end encryption, 2FA, compliance with GDPR standards.",
      svg: "./src/images/pen.png",
      n: "bg-green-100",
    },
    {
      title: "Customizable Reports",
      description:
        "Export professional, audit-ready financial reports for tax or internal review.",
      svg: "./src/images/download.png",
      n: "bg-orange-100",
    },
  ];
  const [active, setActive] = useState<number>(0);
  return (
    <div
      id="features"
      className="flex flex-col gap-4 justify-center items-center"
    >
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
          <p className="text-4xl font-medium text-[#314158]">
            Build your resume
          </p>
          <p className="text-[16px] w-180 text-center text-[#62748e]">
            Our streamlined process helps you create a professional resume in
            minutes with intelligent AI-powered tools and features.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center pr-40">
        <div>
          <img
            className="h-[668px] w-full"
            src="./src/images/group-image-1.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setActive(index);
              }}
              onMouseLeave={() => {
                setActive(0);
              }}
              className={`p-6 group flex flex-col gap-4 rounded-xl  ${
                active === index ? `${item.n}` : "bg-white"
              }`}
            >
              <div className="flex gap-4">
                <img className="object-cover" src={item.svg} alt="" />
                <h3 className="text-base font-semibold text-slate-700">
                  {item.title}
                </h3>
              </div>
              <div>
                <p className="text-sm text-slate-600 max-w-100 pl-10">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Simple_Process;
