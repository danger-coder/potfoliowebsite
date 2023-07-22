import React from "react";

const page = () => {
  return (
    <div className="pl-[115px] flex items-center justify-center h-screen w-[70vw]">
      <div className="flex gap-[60px]">
        <div>
          <h2 className="text-[#141313] text-[18px] leading-[24px] font-semibold italic mb-[16px]">
            Contact
          </h2>
          <h1 className="text-[#141313] text-[48px] leading-[56px] uppercase font-bold mb-[30px]">
            REAct out me
          </h1>

          <p className="text-[#141313] text-[16px] elading-[24px] font-normal mb-[94px]">
            249 king Sir, 05th Floor, Ultra House Building, Melboune, VIC 3000,
            London.
          </p>
          <div className="mb-[100px]">
            <p className="text-[#141313] text-[32px] leading-[40px] font-bold">
              +77 022 444 05 05
            </p>
            <p className="text-[#141313] text-[32px] leading-[40px] font-bold">
              text@gmail.com
            </p>
          </div>
          <div className="grid grid-cols-4 gap-[10px]">
            <p className="text-[#141313] text-[16px] uppercase font-medium">
              Facebook
            </p>
            <p className="text-[#141313] text-[16px] uppercase font-medium">
              Twitter
            </p>
            <p className="text-[#141313] text-[16px] uppercase font-medium">
              {" "}
              Instagram
            </p>
            <p className="text-[#141313] text-[16px] uppercase font-medium">
              Linkedin
            </p>
          </div>
        </div>
        <div className="form">
          <form action="" className="py-[65px] px-[85px]">
            <h1 className="text-[40px] leading-[48px] uppercase font-bold text-white mb-[35px]">
              Any project?
            </h1>
            <div className="flex items-center gap-[45px]">
              <input
                type="text"
                placeholder="NAME"
                className="bg-transparent border-b-[1px] pb-[8px] outline-none placeholder:text-white text-[16px] font-medium"
              />
              <input
                type="text"
                placeholder="EMAIL"
                className="bg-transparent border-b-[1px] pb-[8px] outline-none placeholder:text-white text-[16px] font-medium"
              />
            </div>
            <div className="mt-[45px]">
              <textarea
                name=""
                id=""
                placeholder="MESSAGE"
                className="bg-transparent border-b-[1px] pb-[8px] outline-none placeholder:text-white text-[16px] font-medium"
              ></textarea>
            </div>
            <div className="flex items-center justify-start mt-[0px]">
              <button className="h-[40px] w-[150px] flex items-center gap-[10px] bg-[black] pl-[14px] cursor-pointer mt-[38px]">
                <p className="text-white ">Submit now </p>
                <img src="/assets/north_east.png" alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
