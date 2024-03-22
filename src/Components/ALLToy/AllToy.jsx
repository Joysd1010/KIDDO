import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useProduct from "../hooks/useProduct";
import NewItemCard from "../Home/NewItemCard";
import { GoSearch } from "react-icons/go";

function AllToy() {
  const [toys] = useProduct();
  const doll = toys.filter((toy) => toy.category == "doll");
  const teddy = toys.filter((toy) => toy.category == "teddy");
  const puzzle = toys.filter((toy) => toy.category == "puzzle");
  const showpiece = toys.filter((toy) => toy.category == "showpiece");
  
  return (
    <div className=" text-[#1F2937] bg-white pt-24 md:pt-28 rounded-lg shadow-lg">
      <Tabs>
        <TabList className="md:px-10 px-3 flex">
          <Tab
            className="flex-1 text-lg md:text-xl font-bold py-2 px-2 md:px-4 rounded-t-xl text-center hover:bg-gray-300 focus:outline-none  border-pink-600"
            selectedClassName="bg-blue-200 border-t-4 text-pink-950rounded-t-xl"
          >
            All toys
          </Tab>
          <Tab
            className="flex-1 text-lg md:text-xl font-bold py-2 px-2 md:px-4 rounded-t-xl text-center hover:bg-gray-300 focus:outline-none  border-pink-600"
            selectedClassName="bg-blue-200 border-t-4 text-pink-950rounded-t-xl"
          >
            Puzzels
          </Tab>
          <Tab
            className="flex-1 text-lg md:text-xl font-bold py-2 px-2 md:px-4 rounded-t-xl text-center hover:bg-gray-300 focus:outline-none  border-pink-600"
            selectedClassName="bg-blue-200 border-t-4 text-pink-950rounded-t-xl"
          >
            Dolls
          </Tab>
          <Tab
            className="flex-1 text-lg md:text-xl font-bold py-2 px-2 md:px-4 rounded-t-xl text-center hover:bg-gray-300 focus:outline-none  border-pink-600"
            selectedClassName="bg-blue-200 border-t-4 text-pink-950rounded-t-xl"
          >
            Showpices
          </Tab>
          <Tab
            className="flex-1 text-lg md:text-xl font-bold py-2 px-2 md:px-4 rounded-t-xl text-center hover:bg-gray-300 focus:outline-none  border-pink-600"
            selectedClassName="bg-blue-200 border-t-4 text-pink-950rounded-t-xl"
          >
            Teddy
          </Tab>
        </TabList>

        {/* Tab Content */}
        <div className=" ">
          <TabPanel>
            <div className=" px-10 md:px-20 py-5 bg-blue-200">
             
              <div className=" py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
                {toys.map((fun) => (
                  <NewItemCard key={fun._id} toy={fun} />
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" px-10 md:px-20 py-5 bg-blue-200">
              <div className="flex justify-between"></div>
              <div className=" py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
                {puzzle.map((fun) => (
                  <NewItemCard key={fun._id} toy={fun} />
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" px-10 md:px-20 py-5 bg-blue-200">
              <div className="flex justify-between"></div>
              <div className=" py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
                {doll.map((fun) => (
                  <NewItemCard key={fun._id} toy={fun} />
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" px-10 md:px-20 py-5 bg-blue-200">
              <div className="flex justify-between"></div>
              <div className=" py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
                {showpiece.map((fun) => (
                  <NewItemCard key={fun._id} toy={fun} />
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className=" px-10 md:px-20 py-5 bg-blue-200">
              <div className="flex justify-between"></div>
              <div className=" py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
                {teddy.map((fun) => (
                  <NewItemCard key={fun._id} toy={fun} />
                ))}
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}

export default AllToy;
