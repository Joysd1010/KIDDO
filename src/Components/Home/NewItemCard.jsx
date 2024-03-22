import React, { useState } from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import { HiArrowsExpand } from "react-icons/hi";
import { BsCart2, BsHeart } from "react-icons/bs";
import Rating from "react-rating";

import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const NewItemCard = ({ toy }) => {
  const admin = useAdmin();
  const { user } = useAuth();
  const [cart, refetch] = useCart();

  const {
    _id,
    rating,
    toy_id,
    toy_name,
    materials,
    description,
    price,
    quantity,
    image_link,
    category,
    seller_name,
    seller_id,
  } = toy;

 
  const navigate = useNavigate();
  const handleCart = () => {
    if (user) {
      const selectToy = {
        email: user.email,
        rating,
        toy_id,
        toy_name,
        materials,
        description,
        price,
        quantity,
        image_link,
        category,
        seller_name,
        seller_id,
      };
      fetch("https://kiddo-back-end.vercel.app/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectToy),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Added to Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Sign in to add this item to Cart",
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="bg-white rounded-md overflow-hidden ">
      <div>
        <img className="w-full" src={image_link} />
      </div>
      <div className=" justify-center gap-5 flex">
        {!admin && (
          <BsCart2
            onClick={handleCart}
            size={30}
            className=" hover:scale-105 duration-500 cursor-pointer"
          />
        )}
        <Link to={`/detail/${_id}`}>
          <HiArrowsExpand
            size={30}
            className=" hover:scale-105 duration-500 cursor-pointer"
          />
        </Link>

        {/* <BsHeart onClick={handleWishlist}   size={30} className=" hover:scale-105 duration-500 cursor-pointer"/> */}
      </div>

      <div className="flex flex-col gap-1 p-3">
        <Rating
          className="text-2xl"
          placeholderRating={rating}
          readonly
          emptySymbol={<FaRegStar color="E57C23" />}
          placeholderSymbol={<FaStar color="E57C23" />}
          fullSymbol={<FaStarHalf color="E57C23" />}
        />
        <h1>{toy_name}</h1>
        <p>Price : {price}$</p>
      </div>
    </div>
  );
};

export default NewItemCard;
