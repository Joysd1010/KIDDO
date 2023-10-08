import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { AuthContext } from "../../Provider/AuthProvider";
// import useCart from "../hooks/useCart";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  //   const [cart]=useCart();
  const [search, setSearch] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [underline1, setUnderline1] = useState(false);
  const [underline2, setUnderline2] = useState(false);
  const handleUnderline = () => {
    setUnderline(true);
  };
  const handleUnderlineremove = () => {
    setUnderline(false);
  };
  const handleUnderline1 = () => {
    setUnderline1(true);
  };
  const handleUnderlineremove1 = () => {
    setUnderline1(false);
  };
  const handleUnderline2 = () => {
    setUnderline2(true);
  };
  const handleUnderlineremove2 = () => {
    setUnderline2(false);
  };
const handlefocus=()=>{
    setSearch(true)
}
const handleBlur=()=>{
    setSearch(false)
}
  const [ALLToy, setToy] = useState([]);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toy")
      .then((res) => res.json())
      .then((info) => {
        setToy(info);
        // setData(info);
      });
  }, []);

  const filter = (event) => {
    setData(
      ALLToy.filter((object) =>
        object.toy_name.toLowerCase().includes(event.target.value)
      )
    );
  };
//   ALLToy.map((toy,i)=>console.log(toy.toy_name,i))
  return (
    <div className=" bg-white px-10 py-2 ">
      {/* -----------------------Navbar--------------------------- */}

      <div className="flex items-center justify-between">
        {/* -------------------logo-------------------------------- */}
        <div className="flex gap-1 items-center">
          <img
            className="w-24"
            src="https://i.postimg.cc/NfzKswTG/KIDDO-logo.png"
            alt=""
          />
          <NavLink to={"/"} className="text-gray-600 text-2xl font-bold">
            KIDDO
          </NavLink>
        </div>
        <div className=" flex  items-center gap-2">
          {/* ----------------------Search Bar--------------------- */}
          <div>
            <div className=" rounded-r-full rounded-l-full bg-[#F379A7] hover:bg-[#55D1E6]  flex items-center ">
              <input
                className=" border-2 border-[#F379A7] hover:border-[#55D1E6]    pl-3 pr-16 py-2 rounded-l-full outline-none"
                onChange={filter}
                onBlur={handleBlur}
                onFocus={handlefocus}
                type="text"
                placeholder="Search Toys"
              />
              <button className="">
                <GoSearch
                  color="white"
                  fontSize={20}
                  size={25}
                  className=" mx-3"
                />
              </button>
            </div>
            <div className=" duration-300 absolute">
              {search&&data.slice(0, 8).map((toy) => (
                <div className=" px-5 flex gap-3 p-2 border-2 border-[#F379A7] bg-white ml-1 rounded-2xl" key={toy._id}>
                  <img className=" w-6" src={toy.image_link} />{" "}
                  <h1 className=" font-medium">{toy.toy_name}</h1>
                </div>
              ))}
            </div>
          </div>

          <NavLink
            onMouseEnter={handleUnderline}
            onMouseLeave={handleUnderlineremove}
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? " font-bold text-base md:text-xl text-blue-600 px-5 py-2   duration-300"
                : " font-bold text-base md:text-xl px-5  duration-300"
            }
          >
            <p>Home</p>{" "}
            <hr
              className={` border-blue-900 w-0 ${
                underline && "w-[50px]"
              } mx-auto border-2 duration-500`}
            />
          </NavLink>
          <NavLink
            onMouseEnter={handleUnderline1}
            onMouseLeave={handleUnderlineremove1}
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? " font-bold text-base md:text-xl px-5 py-2 text-blue-600  duration-300"
                : " font-bold text-base md:text-xl px-5  duration-300"
            }
          >
            <p>Toys</p>{" "}
            <hr
              className={` border-blue-900 w-0 ${
                underline1 && "w-[40px]"
              } mx-auto border-2 duration-500`}
            />
          </NavLink>
          <NavLink
            onMouseEnter={handleUnderline2}
            onMouseLeave={handleUnderlineremove2}
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? " font-bold text-base md:text-xl px-5 py-2 text-blue-600  duration-300"
                : " font-bold text-base md:text-xl px-5  duration-300"
            }
          >
            <p>Contact Us</p>{" "}
            <hr
              className={` border-blue-900 w-0 ${
                underline2 && "w-[90px]"
              } mx-auto border-2 duration-500`}
            />
          </NavLink>
        </div>
        <div className="flex justify-between items-center gap-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? " font-bold text-base md:text-xl px-5 py-2 rounded-md text-blue-400  duration-300 tooltip tooltip-open tooltip-primary"
                : " font-bold text-base md:text-xl px-5  duration-300 tooltip  tooltip-open tooltip-info"
            }
            data-tip={0}
            // data-tip={`+${cart?.length||0}`}
          >
            <PiShoppingCartSimpleThin size={30} />
          </NavLink>
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              className=" w-16 rounded-full p-2 border-2 border-r-slate-800 border-l-slate-800"
            />
          ) : (
            <FaUserAlt />
          )}

          {!user ? (
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-base md:text-xl px-5 text-blue-600 py-2 duration-300"
                  : " font-bold text-base md:text-xl px-5  duration-300"
              }
            >
              Login
            </NavLink>
          ) : (
            <div
              onClick={logOut}
              className="text-gray-600 font-bold text-base md:text-xl px-5  hover:bg-white hover:text-blue-800 hover:-translate-y-3 rounded-xl py-2 duration-500"
            >
              {" "}
              Sign Out
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
