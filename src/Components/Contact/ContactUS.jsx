import React from "react";
import { GrMail, GrMapLocation, GrPhone } from "react-icons/gr";

const ContactUS = () => {
  return (
    <div className=" bg-white pt-28">
      <div>
        <h1 className="text-center font-bold text-3xl text-blue-600">
          Get in touch with us
        </h1>
      </div>
      <hr className="border-2 border-gray-600 w-2/3 md:w-1/3 mx-auto mt-2" />

      <div className="px-20 py-8 grid-cols-1 md:grid-cols-3 grid gap-16">
        <div className="flex hover:scale-110 duration-500 flex-col items-center gap-2 shadow-blue-500  shadow-lg rounded-xl p-5">
          <GrMapLocation size={50} />
          <h1 className=" text-pink-900 text-4xl font-[900]">Address</h1>
          <h2 className="text-pink-600">123 Street, City, Country</h2>
        </div>
        <div className="flex hover:scale-110 duration-500 ease-in flex-col items-center gap-2 shadow-blue-500 shadow-lg drop-shadow-lg rounded-xl p-5">
          <GrPhone size={50} />
          <h1 className=" text-pink-900 text-4xl font-[900]">Phone</h1>
          <h2 className="text-pink-600">+123-456-7890</h2>
          <h2 className="text-pink-600">+123-785-3625</h2>
        </div>
        <div className="flex flex-col hover:scale-110 duration-500 items-center gap-2 shadow-blue-500 shadow-lg drop-shadow-lg rounded-xl p-5">
          <GrMail size={50} />
          <h1 className=" text-pink-900 text-4xl font-[900]">Mail</h1>
          <h2 className="text-pink-600">info@kiddo.com</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
