import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className=" absolute md:top-36 md:left-1/3 text-gray-600 text-4xl font-bold p-2 rounded-lg hover:text-blue-400 duration-500">
        <h1>OOPs The Page Not Found</h1>
      </div>
      <img
        className=" w-full h-screen"
        src="https://i.postimg.cc/DZxvtdpB/ezgif-com-optimize-2.gif"
      />
      <NavLink to={"/"}>
        <button className="absolute left-[620px] top-56 btn text-white btn-info">
          Lets GO BACK
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
