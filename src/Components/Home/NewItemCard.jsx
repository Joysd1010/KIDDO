import React, { useState } from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import { HiArrowsExpand } from "react-icons/hi";
import { BsCart2, BsHeart } from "react-icons/bs";
import Rating from "react-rating";
import ReactStars from "react-rating";
import { Link } from "react-router-dom";

const NewItemCard = ({ toy }) => {
  const { rating, toy_name, price, image_link } = toy;

  const [active, setActive] = useState(false);
  const handleEnter = () => {
    setActive(true);
  };
  const handleLeave = () => {
    setActive(false);
  };

  const expandIconStyle = {
    transition: "transform 0.5s, opacity 0.5s",
    transform: active ? "translateY(-2rem)" : "translateY(0)",
    opacity: active ? 1 : 0,
  padding: "2px",
  backgroundColor: "#F279A6",
  color: "white",
  fontSize: "30px",
  borderRadius: "5px",
  cursor: "pointer", 
};
const cartIconStyle = {
    ...expandIconStyle, // Use the same styles as expandIconStyle
    transitionDelay: "150ms", // Apply a 300ms delay for the cart icon
  };

  const heartIconStyle = {
    ...expandIconStyle, // Use the same styles as expandIconStyle
    transitionDelay: "300ms", // Apply a 600ms delay for the heart icon
  };


  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="bg-white rounded-md overflow-hidden "
    >
      <div>
        <img className="w-full" src={image_link} />
      </div>
      <div className=" justify-center gap-2 flex">
        <Link to={'detail'}><HiArrowsExpand style={expandIconStyle} /></Link>
      
        <BsCart2 style={cartIconStyle} />
        <BsHeart style={heartIconStyle} />
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
