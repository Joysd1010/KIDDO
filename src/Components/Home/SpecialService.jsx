import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCoin } from "react-icons/bs";
import { Ri24HoursFill } from "react-icons/ri";
const SpecialService = () => {
  return (
    <div className="px-20 py-20">
      <div>
        <h1 className="text-center font-bold text-3xl text-blue-600">
          Our Exceptional Services
        </h1>
      </div>
      <hr className="border-2 border-gray-600  w-1/3 mx-auto my-2" />
      <div className=" py-5 grid grid-cols-3 gap-5">
        <div className=" border-2 px-3 text-pink-400 rounded-md hover:text-pink-700 hover:border-pink-600 border-pink-200">
          <CiDeliveryTruck  className="mx-auto my-3" size={60}/>
          <h1 className="text-center font-bold text-3xl text-gray-600">Free Delivery</h1>
          <p className="text-center font-bold text-xl text-gray-600">Enjoy hassle-free shopping with free delivery to your doorstep, because smiles should come without extra charges!</p>
        </div>
        <div className=" border-2 px-3 text-pink-400 rounded-md hover:text-pink-700 hover:border-pink-600 border-pink-200">
          <Ri24HoursFill  className="mx-auto my-3" size={60}/>
          <h1 className="text-center font-bold text-3xl text-gray-600">24/7 Customer Support</h1>
          <p className="text-center font-bold text-xl text-gray-600 py-2">We're here for you around the clock! Our dedicated support team is ready to assist you anytime, ensuring your shopping experience is as smooth as playtime.</p>
        </div>
        <div className=" border-2 px-3 text-pink-400 rounded-md hover:text-pink-700 hover:border-pink-600 border-pink-200">
          <BsCoin  className="mx-auto my-3" size={50}/>
          <h1 className="text-center font-bold text-3xl text-gray-600">Money Return Policy</h1>
          <p className="text-center font-bold text-xl text-gray-600">Shop with confidence at KIDDO! Our money-back guarantee ensures that you're always satisfied with your purchase. Your happiness is our priority</p>
        </div>
        
      </div>
    </div>
  );
};

export default SpecialService;
