import React from "react";

const page = () => {
  return (
    <div className="w-full pt-[100px] pl-[115px]">
      <div className="flex items-center justify-center flex-col w-[1200px]">
        <h2 className="text-[#141313] text-[18px] leading-[24px] italic font-semibold mb-[16px]">
          Blog
        </h2>
        <h1 className="text-[48px] text-[#141313] leading-[56px] uppercase font-bold">
          READ my blog
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-[50px] mt-[48px]">
        <div>
          <div className="h-[260px] w-full overflow-hidden">
            <img
              src="/assets/blog1.png"
              className="h-[100%] w-full object-cover hover:scale-110 transiton duration-300 ease-in-out"
              alt=""
            />
          </div>
          <h2 className="text-[#141313] mt-[20px] text-[18px] leading-[24px] font-semibold mb-[12px]">
            10 July, 2022
          </h2>
          <h1 className="text-[#191917] text-[24px] leading-[30px] font-bold w-[315px]">
            12 unique example of portfolio websites
          </h1>
        </div>
        <div>
          <div className="h-[260px] w-full overflow-hidden">
            <img
              src="/assets/blog2.png"
              className="h-[100%] w-full object-cover hover:scale-110 transiton duration-300 ease-in-out"
              alt=""
            />
          </div>
          <h2 className="text-[#141313] mt-[20px] text-[18px] leading-[24px] font-semibold mb-[12px]">
            10 July, 2022
          </h2>
          <h1 className="text-[#191917] text-[24px] leading-[30px] font-bold w-[315px]">
            12 unique example of portfolio websites
          </h1>
        </div>
        <div>
          <div className="h-[260px] w-full overflow-hidden">
            <img
              src="/assets/blog3.png"
              className="h-[100%] w-full object-cover hover:scale-110 transiton duration-300 ease-in-out"
              alt=""
            />
          </div>
          <h2 className="text-[#141313] mt-[20px] text-[18px] leading-[24px] font-semibold mb-[12px]">
            10 July, 2022
          </h2>
          <h1 className="text-[#191917] text-[24px] leading-[30px] font-bold w-[315px]">
            12 unique example of portfolio websites
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[40px]">
        <div className="h-[40px] w-[150px] flex items-center gap-[10px] bg-[black] pl-[14px] cursor-pointer mt-[38px]">
          <p className="text-white ">Load more </p>
          <img src="/assets/north_east.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default page;
