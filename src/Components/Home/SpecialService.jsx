import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
const SpecialService = () => {
  return (
    <div className="px-20">
      <div>
        <h1 className="text-center font-bold text-3xl text-blue-600">
          Our Exceptional Services
        </h1>
      </div>
      <hr className="border-2 border-gray-600 w-1/3 mx-auto my-2" />
      <div>
        <div className=" border-2 border-pink-200">
          <CiDeliveryTruck />
          <h1 className="text-center font-bold text-3xl text-blue-600">Free Delivery</h1>
          <p></p>
        </div>
        
      </div>
    </div>
  );
};

export default SpecialService;
