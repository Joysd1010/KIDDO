import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className=" py-10 px-20">
      <div>
        <h1 className="text-center font-bold text-3xl text-blue-600">
          Mega Offers !!!
        </h1>
        <hr className="border-2 border-gray-600 w-1/3 mx-auto my-2" />
      </div>
      <div className=" flex items-center gap-10 py-16">
        <div className=" rounded-xl overflow-hidden">
            <img className=" hover:scale-110 duration-1000 ease-in-out"  src="https://htmldemo.net/kidol/kidol/assets/img/category/5.png"  />
            <h1 className=" relative bottom-64 right-3 text-right text-4xl font-bold text-pink-800">Puzzle Collection <br /> Flat 40% OFF <br /> <span className="px-3 my-1 text-xl rounded-xl py-1 text-white bg-pink-600"><Link to={'alltoy'}>Shop Now</Link></span></h1>
        </div>
        <div className=" rounded-xl overflow-hidden">
            <img  className=" hover:scale-110 duration-1000 ease-in-out" src="https://htmldemo.net/kidol/kidol/assets/img/category/4.png"  />
            <h1 className=" relative bottom-64 right-3 text-right text-4xl font-bold text-white">DoLL Collection <br /> Flat 30% OFF <br /> <span className="px-3 my-1 text-xl rounded-xl py-1 text-white bg-pink-600"><Link to={'alltoy'}>Shop Now</Link></span></h1>
        </div>
      </div>
    </div>
  );
};

export default Offer;
