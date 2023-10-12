import React from "react";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Mycart = () => {
  const [cart, refetch] = useCart();
  let totalPrice = 0;
  for (const toy of cart) {
    totalPrice += toy.price;
  }
  const handleChekout = () => {
    Swal.fire({
      title: "Are you sure Proceed to Pay?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#ff006e",
      confirmButtonText: "Yes, Proceed to Pay",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Paid!", "The product is on the way.", "success");
      }
    });
  };

  const handleDelete = (item) => {
    
    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#ff006e",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('clicked')
        fetch(`http://localhost:5000/cart/${item._id}`, {
          method: "DELETE",headers: {
            "content-type": "application/json",
          }
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "The product is deleted from cart.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div className="pt-28">
      <div className="px-20">
        <div>
          <h1 className="text-center font-bold text-3xl text-blue-600">
            My Shopping Cart
          </h1>
          <hr className="border-2 border-gray-600 w-1/3 mx-auto my-2" />
        </div>
        {cart.length > 0 ? (
          <div className="flex justify-center py-10 gap-20 items-center">
            <div>
              <div className="w-full overflow-x-auto bg-blue-100 rounded-lg">
                <table className="table w-full">
                  <thead>
                    <tr className="text-xl">
                      <th> </th>
                      <th>Product</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {cart.map((item) => (
                      <tr key={item._id}>
                        <td>
                          <div className="avatar">
                            <div className="w-12 h-12 mask mask-squircle">
                              <img
                                src={item.image_link}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="text-lg">{item.toy_name}</td>
                        <td className="">${item.price}</td>
                        <td className="flex items-center gap-3">
                          <button
                            onClick={() => handleDelete(item)}
                            className="text-pink-800 btn btn-ghost"
                          >
                            <FaTrashAlt></FaTrashAlt>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <div className="m-5 border-4 p-6 rounded-xl hover:border-pink-600 hover:shadow-xl shadow-blue-300 duration-700 border-blue-500">
                <h1 className=" text-5xl text-pink-900 py-2">
                  Your cart Total
                </h1>
                <hr className="border-[1px] border-gray-300  " />
                <div className="flex items-center justify-between py-2">
                  <h1 className="text-2xl text-gray-500">Sub Total :</h1>
                  <h1>${totalPrice}</h1>
                </div>
                <div className="flex items-center justify-between py-2">
                  <h1 className="text-2xl text-gray-500">Shipping Charges :</h1>
                  <h1>$5</h1>
                </div>
                <hr className="border-[1px] border-gray-300  " />
                <div className="flex items-center justify-between py-1">
                  <h1 className="text-2xl text-gray-500">Total :</h1>
                  <h1>${totalPrice + 5}</h1>
                </div>

                <div className=" flex items-center py-4 gap-5 justify-end">
                  <button
                    onClick={handleChekout}
                    className="rounded-r-full rounded-l-full btn bg-pink-500 hover:bg-blue-400 text-white"
                  >
                    Check out
                  </button>
                  <button className=" rounded-r-full rounded-l-full btn border-4 border-blue-600 hover:border-pink-600 text-blue-700 hover:text-pink-800">
                    Download receipt
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-5 text-center">
            <h1 className="text-4xl text-pink-800">
                No Product in your cart 🥺
            </h1>
            <Link to={'/alltoy'}><button className="btn text-white bg-indigo-600 hover:bg-pink-600 my-16">Go to shop</button>
          </Link></div>
        )}
      </div>
    </div>
  );
};

export default Mycart;
