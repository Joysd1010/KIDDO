import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";


const Banner = () => {
  
const [text] = useTypewriter({
  words: [
    "Discover Joy at KIDDO Toyshop: Where Playtime Comes to Life!",
    "Toys, Smiles, and Imagination: Welcome to KIDDO's Wonderland!",
    "Elevate Playtime with KIDDO's Enchanting Toy Collection!",
    "Find the Perfect Playmate at KIDDO Toyshop Today!",
    "Creating Memories, One Toy at a Time – Only at KIDDO!",
    "Where Dreams Take Flight: KIDDO Toyshop – Your Child's Happy Place!",
    "Explore Endless Fun with KIDDO's Curated Toy Selection!",
    "Shop, Play, Repeat: Your Ultimate Toy Destination – KIDDO!",
    "Ignite Your Child's Imagination with KIDDO's Magical Toys!",
    "Quality Toys, Happy Kids – Experience it at KIDDO Toyshop!"
],
  loop: {}, 
  typeSpeed: 120,
  deleteSpeed: 100,
 }) 

  return (
    <div className=" grid grid-cols-2 pt-16 items-center px-20 bg-[#FFB6C5]">
      <div>
        <img className=" w-[350px]" src="https://i.postimg.cc/43nbYpYM/child-model.png" />
      </div>
      <div>
      <h1 className="text-5xl font-bold text-indigo-500">KIDDO where Imagination meets Play<br></br> <br /> <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-800'> {text}</span>
            <span><Cursor  cursorStyle="."/></span></h1>
      </div>
    </div>
  );
};

export default Banner;
