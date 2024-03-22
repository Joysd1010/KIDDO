import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { AuthContext } from "../../Provider/AuthProvider";
import useProduct from "../../hooks/useProduct";
import useCart from "../..//hooks/useCart";
import { GiSplitCross } from "react-icons/gi";
import { ImMenu } from "react-icons/im";
import useWish from "../../hooks/useWish";
import useAdmin from "../../hooks/useAdmin";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const navigate = useNavigate();
  const navigateToDetail = (_id) => {
    navigate(`/detail/${_id}`);
  };
  const logged = useAdmin();
  const [search, setSearch] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [underline1, setUnderline1] = useState(false);
  const [underline2, setUnderline2] = useState(false);
  const [underline3, setUnderline3] = useState(false);
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
  const handleUnderline3 = () => {
    setUnderline3(true);
  };
  const handleUnderlineremove3 = () => {
    setUnderline3(false);
  };
  const handlefocus = () => {
    setSearch(true);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setSearch(false);
    }, 200);
  };
  const [ALLToy] = useProduct();
  const [data, setData] = useState([]);
  const filter = (event) => {
    setData(
      ALLToy.filter((object) =>
        object.toy_name.toLowerCase().includes(event.target.value)
      )
    );
    setSearch(true);
  };
  const [menu, setMenu] = useState(true);
  const handleMenuOpen = () => {
    setMenu(false);
  };
  const handleMenuClose = () => {
    setMenu(true);
  };

  // ALLToy.map((toy,i)=>console.log(toy.toy_name,i))
  return (
    <div className=" text-[#1F2937] fixed z-20 w-screen bg-white px-3 md:px-10 py-1 ">
      {/* -----------------------Navbar--------------------------- */}

      <div className="flex items-center justify-between">
        {/* -------------------logo-------------------------------- */}
        <div className="flex gap-1 items-center">
          <img
            className="w-20 md:w-24"
            src="https://i.postimg.cc/NfzKswTG/KIDDO-logo.png"
            alt=""
          />
          <NavLink
            to={"/"}
            className="text-gray-600 text-lg md:text-2xl font-bold"
          >
            KIDDO
          </NavLink>

          {/* ----------------------Search Bar--------------------- */}
          <div>
            <div className="md:ml-5 ml-3 rounded-r-full rounded-l-full bg-[#F379A7] hover:bg-[#55D1E6]  flex items-center ">
              <input
                className=" border-2 bg-white border-[#F379A7] hover:border-[#55D1E6]  w-28 md:w-full  pl-3 md:pr-16 py-2 rounded-l-full outline-none"
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
              {search &&
                data.slice(0, 10).map((toy) => (
                  <div
                    onClick={() => {
                      navigateToDetail(toy._id);
                    }}
                    key={toy._id}
                    className=" hover:scale-105 duration-500 px-1 md:px-5 flex gap-3 p-2 border-2 border-[#F379A7] bg-white md:ml-5 ml-1 rounded-2xl"
                  >
                    <img className=" w-6 md:rounded-md" src={toy.image_link} />{" "}
                    <h1 className=" font-medium">{toy.toy_name}</h1>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div
          className={`flex md:static absolute  md:flex-row flex-col justify-between items-start md:items-center gap-2 md:gap-4 ${
            !menu
              ? "top-20 right-1 md:px-0 px-5 bg-white py-2 duration-700 "
              : "top-20 -right-40 duration-700"
          }`}
        >
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
              className={`md:block hidden border-blue-900 w-0 ${
                underline && "w-[50px]"
              } mx-auto border-2 duration-500`}
            />
          </NavLink>

          <NavLink
            onMouseEnter={handleUnderline1}
            onMouseLeave={handleUnderlineremove1}
            to={"alltoy"}
            className={({ isActive }) =>
              isActive
                ? " font-bold text-base md:text-xl px-5 py-2 text-blue-600  ease-out duration-700"
                : " font-bold text-base md:text-xl px-5  duration-300"
            }
          >
            <p>Toys</p>{" "}
            <hr
              className={`md:block hidden border-blue-900 w-0 ${
                underline1 && "w-[40px]"
              } mx-auto border-2 duration-500`}
            />
          </NavLink>

          <NavLink
            onMouseEnter={handleUnderline2}
            onMouseLeave={handleUnderlineremove2}
            to={"contact"}
            className={({ isActive }) =>
              isActive
                ? " font-bold text-base md:text-xl px-5 py-2 text-blue-600   ease-out duration-700"
                : " font-bold text-base md:text-xl px-5  duration-300"
            }
          >
            <p>Contact Us</p>{" "}
            <hr
              className={`md:block hidden border-blue-900 w-0 ${
                underline2 && "w-[90px]"
              } mx-auto border-2 duration-500`}
            />
          </NavLink>

          <div className="flex items-center gap-3">
            {logged ? (
              <NavLink
                onMouseEnter={handleUnderline3}
                onMouseLeave={handleUnderlineremove3}
                to={"Admin"}
                className={({ isActive }) =>
                  isActive
                    ? " font-bold text-base md:text-xl px-5 py-2 text-blue-600   ease-out duration-700"
                    : " font-bold text-base md:text-xl px-5  duration-300"
                }
              >
                <p>Admin Panel</p>{" "}
                <hr
                  className={` border-blue-900 w-0 ${
                    underline3 && "w-[90px]"
                  } mx-auto border-2 duration-500`}
                />
              </NavLink>
            ) : (
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? " font-bold text-base md:text-xl px-5 py-2 rounded-md text-blue-400  duration-300 "
                    : " font-bold text-base md:text-xl px-5  duration-300 "
                }
              >
                <PiShoppingCartSimpleThin size={30} />{" "}
                {cart.length > 0 && (
                  <p className=" text-xs bottom-9 left-4 text-center p-[1px] text-white rounded-full relative bg-pink-600">
                    {cart?.length}
                  </p>
                )}
              </NavLink>
            )}
          </div>

          {user?.photoURL ? (
            <img
              src={user.photoURL}
              className=" w-16 rounded-full p-2 border-2 border-r-slate-800 border-l-slate-800"
            />
          ) : (
            <FaUserAlt className="md:ml-0 ml-5 " />
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
        <div className=" md:hidden ml-5">
          {menu ? (
            <div className="   rounded-lg">
              <ImMenu onClick={handleMenuOpen} size={25} />
            </div>
          ) : (
            <div className=" rotate-90 duration-300  rounded-lg">
              <GiSplitCross onClick={handleMenuClose} size={25} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
