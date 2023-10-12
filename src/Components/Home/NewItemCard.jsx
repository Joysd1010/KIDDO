import React, { useState } from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import { HiArrowsExpand } from "react-icons/hi";
import { BsCart2, BsHeart } from "react-icons/bs";
import Rating from "react-rating";

import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import useWish from "../hooks/useWish";

const NewItemCard = ({ toy }) => {
  const {user}=useAuth()
  const [cart,refetch]=useCart()
  const [wish,]=useWish()
  // const [,refetch]=useWish()
  const { _id,
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
    seller_id} = toy;

  const [active, setActive] = useState(true);
  // const handleEnter = () => {
  //   setActive(true);
  // };
  // const handleLeave = () => {
  //   setActive(false);
  // };

  // const expandIconStyle = {
  //   transition: "transform 0.5s, opacity 0.5s",
  //   transform: active ? "translateY(-4rem)" : "translateY(0)",
  //   opacity: active ? 1 : 0,
  //   padding: "2px",
  //   backgroundColor: "#ff007f",
  //   color: "white",
  //   fontSize: "30px",
  //   borderRadius: "5px",
  //   cursor: "pointer",
  // };
  // const cartIconStyle = {
  //   ...expandIconStyle,
  //   transitionDelay: "150ms",
  // };

  // const heartIconStyle = {
  //   ...expandIconStyle,
  //   transitionDelay: "300ms",
  // };
  const exist=cart.filter(item=>item.toy_id==toy_id)
  const wishExist=wish.filter(item=>item.toy_id==toy_id)
  console.log(wishExist.length)
 

  const handleCart = () => {
    if (user) {
      
     
        if (!exist.length==1) {
        
        const selectToy = {
          email: user.email,
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
      seller_id
        };
        fetch("http://localhost:5000/cart", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(selectToy),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
             refetch()
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Added to Cart",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        
      }
      else{
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'This Product is already in your Cart',            
        })
      }            
              }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Sign in to add this item to Cart',            
          })
    }
  };
  const handleWishlist = () => {
    if (user) {
    if (!wishExist.length==1) {
      const selectToy = {
        email: user.email,
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
    seller_id
      };
      fetch("http://localhost:5000/wish", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectToy),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
           refetch()
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Added to Wishlist",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong , Please try again 🥺',            
              })
        }
        });
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Sign in to add this item to Cart',            
      })
    }
     
   
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Sign in to add this item to your Wishlist 🥺',            
          })
    }
  };


  return (
    <div
      // onMouseEnter={handleEnter}
      // onMouseLeave={handleLeave}
      className="bg-white rounded-md overflow-hidden "
    >
      <div>
        <img className="w-full" src={image_link} />
      </div>
      <div className=" justify-center gap-5 flex">
        <BsCart2 onClick={handleCart} size={30} className=" hover:scale-105 duration-500 cursor-pointer"/>
        <Link to={`/detail/${_id}`}>
          <HiArrowsExpand  size={30} className=" hover:scale-105 duration-500 cursor-pointer"/>
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
