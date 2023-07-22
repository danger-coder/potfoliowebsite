import React from "react";

const page = () => {
  return (
    <div className="pl-[115px] pt-[100px] pb-[40px]">
      <div>
        <h2 className="text-[#141313] text-[18px] leading-[24px] italic font-semibold mb-[16px]">
          Work
        </h2>
        <h1 className="text-[#141313] text-[48px] leading-[56px] uppercase font-bold">
          REcent project
        </h1>
      </div>

      <div className="grid grid-cols-2 mt-[48px] gap-x-[80px] gap-y-[50px]">
        <div className="flex gap-[18px]">
          <div>
            <h2 className="text-[#141313] text-[18px] leading-[24px] italic font-semibold mb-[16px]">
              UX case Study
            </h2>
            <h1 className="text-[#141313] text-[40px] leading-[40px] font-bold w-[200px] mb-[24px]">
              Bally Website Research
            </h1>
            <img src="/assets/bigarrow.png" alt="" />
          </div>
          <div>
            <img src="/assets/proj1.png" alt="" />
          </div>
        </div>
        <div className="flex gap-[18px]">
          <div>
            <h2 className="text-[#141313] text-[18px] leading-[24px] italic font-semibold mb-[16px]">
              UX case Study
            </h2>
            <h1 className="text-[#141313] text-[40px] leading-[40px] font-bold w-[200px] mb-[24px]">
              Bally Website Research
            </h1>
            <img src="/assets/bigarrow.png" alt="" />
          </div>
          <div>
            <img src="/assets/proj2.png" alt="" />
          </div>
        </div>
        <div className="flex gap-[18px]">
          <div>
            <h2 className="text-[#141313] text-[18px] leading-[24px] italic font-semibold mb-[16px]">
              UX case Study
            </h2>
            <h1 className="text-[#141313] text-[40px] leading-[40px] font-bold w-[200px] mb-[24px]">
              Bally Website Research
            </h1>
            <img src="/assets/bigarrow.png" alt="" />
          </div>
          <div>
            <img src="/assets/proj3.png" alt="" />
          </div>
        </div>
        <div className="flex gap-[18px]">
          <div>
            <h2 className="text-[#141313] text-[18px] leading-[24px] italic font-semibold mb-[16px]">
              UX case Study
            </h2>
            <h1 className="text-[#141313] text-[40px] leading-[40px] font-bold w-[200px] mb-[24px]">
              Bally Website Research
            </h1>
            <img src="/assets/bigarrow.png" alt="" />
          </div>
          <div>
            <img src="/assets/proj4.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[40px]">
        <div className="h-[40px] w-[150px] flex items-center gap-[10px] bg-[black] pl-[14px] cursor-pointer mt-[38px]">
          <p className="text-white ">Load more </p>
          <img src="/assets/north_east.png" alt="" />
        </div>
      </div>
      <div className="testimonial mt-[90px] pt-[80px]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-[18px] leading-[24px] italic font-semibold mb-[16px]">
            Testimonial
          </h2>
          <h1 className="text-white text-[48px] leading-[56px] uppercase font-bold">
            What they says
          </h1>
        </div>
        <div className="mt-[30px] flex px-[50px] items-center gap-[100px] border-b-[1px]">
          <div>
            <img src="/assets/testimonial.png" alt="" />
          </div>
          <div>
            <p className="text-white text-[32px] leading-[40px] font-semibold italic w-[545px] mb-[30px]">
              “ File storage made easy – including powerful features you won’t
              find anywhere else. Whether you’re.”
            </p>
            <div>
              <h2 className="text-white text-[24px] font-semibold mb-[4px]">
                -Larry Diamongs
              </h2>
              <p className="text-white text-[16px] font-medium">
                Chief Executive Officer, Besnik
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
