import React from "react";

const page = () => {
  return (
    <div className=" pt-[100px] w-full ">
      <div className="w-full pl-[115px]">
        <h3 className="text-[#141313] text-[18px] leading-[24px] font-semibold">
          Nice to meet you
        </h3>
        <h1 className="text-[#141313] text-[48px] leading-[56px] uppercase mt-[16px]">
          Welcome to..
        </h1>
      </div>
      <div className="flex pt-[47px] w-full pl-[115px]">
        <div className="basis-[30%] flex items-start flex-col">
          <img src="/assets/about.png" alt="" />
          <div className="flex flex-col items-center gap-[20px]">
            <h1 className="name mt-[24px]">Jack Jones</h1>
            <p className="text-[24px] text-[#141313]">
              <span className="font-bold italic">Product design</span> based in{" "}
              <span className="font-bold italic">londom</span>
            </p>
            <div className="flex items-center gap-[5px] cursor-pointer">
              <a
                href=""
                className="text-[#141313] text-[18px] font-medium leading-[24px] underline"
              >
                Download CV
              </a>
              <img src="/assets/balckarrow.png" alt="" />
            </div>
          </div>
        </div>
        <div className="basis-[70%] flex flex-col items-start ">
          <div className="grid grid-cols-2 gap-y-[30px] gap-x-[80px] border-b-[1px] pb-[20px] ">
            <div className="flex items-center ">
              <img src="/assets/phone.png" alt="" />
              <p className="text-[18px] italic text-[#141313] leading-[24px] font-bold">
                +97349234235323
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/assets/email.png" alt="" />
              <p className="text-[18px] italic text-[#141313] leading-[24px] font-bold">
                test@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/assets/phone.png" alt="" />
              <p className="text-[18px] italic text-[#141313] leading-[24px] font-bold">
                +97349234235323
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/assets/email.png" alt="" />
              <p className="text-[18px] italic text-[#141313] leading-[24px] font-bold">
                test@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-[30px] w-[60%] pt-[50px]">
            <div>
              <h1 className="text-[#141313] text-[18px] font-bold italic flex items-center gap-[10px] w-[220px]">
                <span className="name">10+</span> Years experience...
              </h1>
              <p className="text-[#141313] mt-[24px] text-[18px] leading-[24px] font-normal">
                Hello there! My name is Jacob Jones. I am a web designer &
                developer, and I'm very passionate and dedicated to my work.
              </p>
            </div>
            <div>
              <h1 className="text-[#141313] text-[18px] font-bold italic flex items-center gap-[10px] w-[220px]">
                <span className="name">14+</span> Clients Worldwide...
              </h1>
              <p className="text-[#141313] mt-[24px] text-[18px] leading-[24px] font-normal">
                With 10+ years experience as a professional a graphic designer,
                I have acquired the skills and knowledge necessary to make your
                project a success.
              </p>
            </div>
          </div>
          <div className="w-[660px] h-[144px] bg-[#141313] flex items-center justify-center p-[12px] mt-[64px]">
            <img src="/assets/quate.png" alt="" />
            <p className="text-white text-[20px] leading-[32px] italic font-semibold">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              sed sit ultrices et sed metus sollicitudin.”
            </p>
          </div>
        </div>
      </div>
      <div className="experience mt-[110px] pl-[115px] flex gap-[30px]">
        <div className="basis-[30%] pt-[100px]">
          <h2 className="text-[18px] leading-[24px] font-semibold mb-[16px] text-white italic">
            Experience
          </h2>
          <h1 className="text-[48px] leading-[46px] text-white uppercase font-bold">
            My Experience
          </h1>
          <p className="text-white text-[18px] leading-[28px] w-[430px] mt-[24px]">
            Hello there! My name is Jacob Jones. I am a web designer &
            developer, and I'm very passionate and dedicated to my work.
          </p>
          <div className="h-[40px] w-[250px] flex items-center justify-center gap-[5px] bg-[black] pl-[14px] cursor-pointer mt-[38px]">
            <p className="text-white ">Download my resume </p>
            <img src="/assets/north_east.png" alt="" />
          </div>
        </div>
        <div className="basis-[70%] pr-[400px] py-[100px] flex flex-col gap-[20px]">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-white text-[18px] leading-[24px] font-bold">
                -2018-present
              </p>
              <p className="text-white text-[18px] leading-[24px] font-bold">
                -Rolling Thunder
              </p>
            </div>
            <h1 className="text-white text-[32px] leading-[48px] uppercase font-bold">
              Lead UI/UX Designer
            </h1>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-white text-[18px] leading-[24px] font-bold">
                -2018-present
              </p>
              <p className="text-white text-[18px] leading-[24px] font-bold">
                -Locost Accessories
              </p>
            </div>
            <h1 className="text-white text-[32px] leading-[48px] uppercase font-bold">
              Senior UI/UX Designer
            </h1>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-white text-[18px] leading-[24px] font-bold">
                -2018-present
              </p>
              <p className="text-white text-[18px] leading-[24px] font-bold">
                -Sagebrush
              </p>
            </div>
            <h1 className="text-white text-[32px] leading-[48px] uppercase font-bold">
              Junior UI/UX Designer
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
