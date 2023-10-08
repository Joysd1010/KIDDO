import React, { useState } from "react";
import useProduct from "../hooks/useProduct";
import NewItemCard from "./NewItemCard";

const NewItems = () => {
  const [products] = useProduct();
  const sortedToysDescending = products.sort((a, b) => {
    const dateA = new Date(a.entry_date);
    const dateB = new Date(b.entry_date);
    return dateB - dateA;
  });
 

  return (
    <div className=" py-2 bg-blue-200 px-16">
      <div>
        <h1 className="text-center font-bold text-3xl text-blue-600">
          Newest Arrival !!!
        </h1>
        <hr className="border-2 border-gray-600 w-1/3 mx-auto my-2" />
      </div>
      <dir
        
        className="grid grid-cols-4 gap-8"
      >
        {sortedToysDescending.slice(0, 4).map((toy) => (
          <NewItemCard key={toy._id}  toy={toy} />
        ))}
      </dir>
    </div>
  );
};

export default NewItems;
