import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { BiLocationPlus, BiLogoGmail} from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="  bg-[#E6E6FA]">
      <div className=" px-10 py-2 items-start grid grid-cols-3">
        {/* -------------------------------------Logo part of footer ------------------------------------ */}
        <div className=" w-96">
          <div className="flex items-center gap-3">
            <img
              className=" w-20"
              src="https://i.postimg.cc/NfzKswTG/KIDDO-logo.png"
              alt="logo"
            />{" "}
            <h1 className=" text-2xl font-semibold">KIDDO</h1>
          </div>
          <div>
          Where Imagination Meets Play. Discover Endless Adventures 
          </div>
          <div className=" py-5 flex gap-1 items-center">
            <BsFacebook className=" p-2 bg-blue-400 text-5xl rounded-xl text-white hover:text-blue-900 hover:bg-white duration-500 hover:translate-y-5 hover:rotate-45 hover:border-2 hover:border-blue-900 " />
            <BsInstagram className=" p-2 bg-blue-400 text-5xl rounded-xl text-white hover:text-blue-900 hover:bg-white duration-500 hover:translate-y-5  hover:rotate-45 hover:border-2 hover:border-blue-900 " />
            <BsTwitter className=" p-2 bg-blue-400 text-5xl rounded-xl text-white hover:text-blue-900 hover:bg-white duration-500 hover:translate-y-5  hover:rotate-45 hover:border-2 hover:border-blue-900 " />
            <BsLinkedin className=" p-2 bg-blue-400 text-5xl rounded-xl text-white hover:text-blue-900 hover:bg-white duration-500 hover:translate-y-5  hover:rotate-45 hover:border-2 hover:border-blue-900 " />
          </div>
        </div>
        {/* -------------------------------------Link part of footer ------------------------------------ */}
        <div className=" md: pt-5">
          <h1 className=" text-2xl font-semibold">Important Links</h1>
          <div className="text-base flex flex-col gap-3 underline">
            <NavLink className={`hover:translate-x-2 duration-300`} to={"/"}>Home </NavLink>
            <NavLink className={`hover:translate-x-2 duration-300`} to={"toy"}>Toys </NavLink>
            <NavLink className={`hover:translate-x-2 duration-300`} to={"contact"}>Contact Us </NavLink>
          </div>
        </div>
        {/* ----------------Contact us part of the footer------------------- */}
        <div className="flex flex-col gap-3 md:pt-5"> 
        <h1 className=" text-2xl font-semibold">GET IN TOUCH</h1>
          <div className=" flex items-center gap-2"><BiLogoGmail  size={25}/>info@kiddo.com</div>
          <div className=" flex items-center gap-2"><BiLocationPlus  size={25}/>123 Street, City, Country</div>
          <div className=" flex items-center gap-2"><BsFillTelephoneFill size={25}/>123-456-7890</div>
        
        </div>
      </div>
      <h1 className=" text-center text-sm py-2 text-white bg-[#454343]">
        © 2023 made by Joy Sutradhar ❤️
      </h1>
    </div>
  );
};

export default Footer;
