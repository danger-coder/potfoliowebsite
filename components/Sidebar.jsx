"use client";
import { BsGoogle } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
// import React, { useState } from "react";

const Sidebar = () => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [work, setWork] = useState(false);
  const [blog, setBlog] = useState(false);
  const [contact, setContact] = useState(false);

  const handleNavigate = (id) => {
    if (id === "home") {
      setHome(!home);
      setAbout(false);
      setWork(false);
      setBlog(false);
      setContact(false);
    } else if (id === "about") {
      setAbout(!about);
      setHome(false);
      setWork(false);
      setContact(false);
      setBlog(false);
    } else if (id === "work") {
      setWork(!work);
      setAbout(false);
      setHome(false);
      setBlog(false);
      setContact(false);
    } else if (id === "blog") {
      setBlog(!blog);
      setWork(false);
      setAbout(false);
      setHome(false);
      setContact(false);
    } else if (id === "contact") {
      setContact(!contact);
      setBlog(false);
      setWork(false);
      setAbout(false);
      setHome(false);
    }
  };

  return (
    <div className="w-[285px] bg-black h-screen pt-[56px] pl-[48px] fixed top-0 left-0">
      <h1 className="text-[35px] font-bold text-white cursor-pointer">Jack.</h1>
      <nav className="mt-[100px]">
        <ul className="flex flex-col gap-[20px] uppercase text-white list-none">
          <li onClick={() => handleNavigate("home")}>
            <Link
              href="/"
              className={
                home
                  ? "font-medium text-[25px] text-red-500"
                  : "font-medium text-[25px]"
              }
            >
              Home
            </Link>
          </li>
          <li onClick={() => handleNavigate("about")}>
            <Link
              href="about"
              className={
                about
                  ? "font-medium text-[25px] text-red-500"
                  : "font-medium text-[25px]"
              }
            >
              About
            </Link>
          </li>

          <li>
            <a href="" className="font-medium text-[25px]">
              Services
            </a>
          </li>

          <li onClick={() => handleNavigate("work")}>
            <Link
              href="/works"
              className={
                work
                  ? "font-medium text-[25px] text-red-500"
                  : "font-medium text-[25px]"
              }
            >
              Works
            </Link>
          </li>

          <li onClick={() => handleNavigate("blog")}>
            <Link
              href="/blogs"
              className={
                blog
                  ? "font-medium text-[25px] text-red-500"
                  : "font-medium text-[25px]"
              }
            >
              Blogs
            </Link>
          </li>

          <li onClick={() => handleNavigate("contact")}>
            <Link
              href="/contact"
              className={
                contact
                  ? "font-medium text-[25px] text-red-500"
                  : "font-medium text-[25px]"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-start flex-col gap-[12px] mt-[200px]">
        <div className="h-[45px] w-[45px] bg-[white] rounded-full  cursor-pointer flex items-center justify-center">
          <BsGoogle />
        </div>
        <div className="h-[45px] w-[45px] bg-[white] rounded-full cursor-pointer flex items-center justify-center">
          <CgWebsite />
        </div>
        <div className="h-[45px] w-[45px] bg-[white] rounded-full cursor-pointer flex items-center justify-center">
          <AiFillInstagram />
        </div>
      </div>
      <div className="pt-[20px] pr-[20px]">
        <p className="text-[16px] leading-[22px] text-white">
          Copyright ©2022 frontend dev. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
