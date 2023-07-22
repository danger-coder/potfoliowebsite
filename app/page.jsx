"use client";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { useEffect } from "react";

import { Button, Modal } from "antd";
import { useState } from "react";

// console.log(data);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [data, setData] = useState({
    name: "Jack jones",
    email: "test@example.com",
    contact: "+9788416532131",
    adress: "",
  });

  localStorage.setItem("name", data.name);

  const [name, setName] = useState(null);
  useEffect(() => {
    let name = localStorage.getItem("name");
    console.log(name);
    setName(name);
  }, [name]);
  console.log(name);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <main className="h-screen  w-full flex items-center justify-center pl-[155px]">
      {/* <h1 onClick={showModal}>change</h1> */}
      <Modal
        width={1000}
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        value={data.name}
      >
        <input
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
          className="border "
        />
        <input
          type="text"
          placeholder="Enter your address"
          className="border "
        />
        <input type="text" placeholder="Enter your email" className="border " />
        <input
          type="text"
          placeholder="Enter your contact number"
          className="border "
        />
      </Modal>
      <div className="flex items-center justify-between gap-[30px]">
        <div>
          <div className="relative">
            <h2 className="text-[102px] text-[#141313] w-[545px] leading-[110px] font-bold">
              <span className="font-normal"> My Name</span> <br></br>{" "}
              <span className="font-normal">IS</span> {data.name}...
            </h2>
            <img
              src="/assets/Vector.png"
              alt=""
              className="absolute  top-[-10px] left-[-30px] z-[-1]"
            />
          </div>
          <p className="text-[#141313] text-[32px]   tracking-[-0.96px] mt-[24px]">
            <span className="italic mr-[5px] font-bold">Product Designer</span>
            based in <span className="italic font-bold">London</span>
          </p>
          <div className="h-[40px] w-[200px] flex items-center gap-[5px] bg-[black] pl-[14px] cursor-pointer mt-[38px]">
            <p className="text-white ">Let's talk with me </p>
            <img src="/assets/north_east.png" alt="" />
          </div>
          <div className=" flex items-center gap-[30px] mt-[45px]">
            <div className="flex items-center gap-[10px]">
              <img src="/assets/phone.png" alt="" />
              <p className="text-[18px] italic text-[#141313] leading-[24px] font-bold">
                {data.contact}
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/assets/email.png" alt="" />
              <p className="text-[18px] italic text-[#141313] leading-[24px] font-bold">
                {data.email}
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="/assets/Img.png" alt="" />
        </div>
        <div className="flex items-center flex-col gap-[20px] ml-[100px]">
          <div className="h-[50px] w-[50px]  border-[2px] rounded-full flex items-center justify-center ">
            <AiOutlineInstagram />
          </div>
          <div className="h-[50px] w-[50px]  border-[2px] rounded-full flex items-center justify-center ">
            <BiLogoFacebook />
          </div>
          <div className="h-[50px] w-[50px]  border-[2px] rounded-full flex items-center justify-center ">
            <AiFillLinkedin />
          </div>
          <div className="h-[200px] w-[2px] bg-[#141313]"></div>
        </div>
      </div>
    </main>
  );
}
