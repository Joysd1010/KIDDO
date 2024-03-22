
import { BsCheck } from "react-icons/bs";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Detailpage = () => {


  const admin=useAdmin()

    const {user}=useAuth()
    const navigate=useNavigate()

    const [,refetch]=useCart()
  const Toy = useLoaderData();
  const {
  
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
  } = Toy;

  const handleCart = () => {
    if (user) {
     
      const selectToy = {
      
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
            icon: 'error',
            title: 'Oops...',
            text: 'Please Sign in to add this item to Cart',            
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login')
            }
          });
    }
  };
  

 


  return (
    <div className="">
    <div className="grid grid-cols-1 md:grid-cols-2 pt-28">
      <div className=" px-10">
        <img src={image_link} />
      </div>
      <div className="bg-blue-50 w-full px-10 py-5">
        <div>
          <h1 className=" text-3xl font-semibold">{toy_name}</h1>
          <h1 className="text-4xl font-[900] py-3 text-pink-700 ">${price}</h1>
          <div className="flex gap-2 items-center py-2">
            <Rating
            className="text-xl"
            placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar color="e5e500" />}
            placeholderSymbol={<FaStar color="e5e500" />}
            fullSymbol={<FaStarHalf color="e5e500" />}
          />
          <h1>({rating} star Review by customers)</h1>
          </div>
          <hr className=" border-[1px] border-gray-400 "/>
          <div className=" grid grid-cols-3 py-4">
            <div className=" text-xl text-gray-700 flex gap-2 items-center font-[900]"><BsCheck color="#F279A6" size={35}/> Free Shipping</div>
            <div className=" text-xl text-gray-700 flex gap-2 items-center font-[900]"><BsCheck color="#F279A6" size={35}/> Support 24/7</div>
            <div className=" text-xl text-gray-700 flex gap-2 items-center font-[900]"><BsCheck color="#F279A6" size={35}/> Money Return</div>
          </div>
          <hr className=" border-[1px] border-gray-400 "/>
          <div className=" text-lg text-pink-500 py-5">
            {description}
          </div>
          <div className=" flex justify-start gap-5">
           {!admin&& <div onClick={handleCart} className=" btn rounded-2xl bg-pink-500  text-white hover:text-gray-900  hover:bg-blue-300">Add to Cart</div>}
            {/* <div onClick={handleWishlist} className=" btn rounded-2xl text-pink-900 hover:text-blue-500 border-[3px] border-pink-500 hover:border-blue-500">Add to Wishlist ❤️</div> */}
          </div>

          <h1 className=" py-3 flex items-center gap-2 text-lg font-semibold text-pink-700">Category : <span className=" flex items-center font-thin text-base text-pink-500">{category}</span></h1>
          <div className="flex items-center">
             <h1 className=" text-lg font-semibold text-pink-700">Materials : </h1><div className=" flex items-center text-base text-pink-500">{Array.isArray(materials)?materials.map((info,i)=><p key={i} className="px-2">{info}</p>):materials}</div>
          </div>
         
          
        </div>
      </div>
    </div></div>
  );
};

export default Detailpage;
