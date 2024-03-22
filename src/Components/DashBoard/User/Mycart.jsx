import React, { useRef, useState } from "react";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useReactToPrint } from "react-to-print";

const Mycart = () => {
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  let totalPrice = 0;
  for (const toy of cart) {
    totalPrice += toy.price;
  }
  const [Invoice, setInvoice] = useState([]);
  const [InvoicePrice, setInvoicePrice] = useState(0);
  const [PaymentComplete, setComplete] = useState(false);
  const printref = useRef();
  const handlePrint = useReactToPrint({
    content: () => printref.current,
  });

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
        setInvoice(cart);
        setInvoicePrice(totalPrice);
        fetch(`http://localhost:5000/paymentCart?email=${user.email}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              setComplete(true);
              Swal.fire("Paid!", "The product is on the way.", "success");
            }
          });
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
        console.log("clicked");
        fetch(`http://localhost:5000/cart/${item._id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
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
          <div className="flex justify-center flex-col md:flex-row py-5 md:py-10 gap-5 md:gap-20 items-center">
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
              <div className="md:m-5 w-[360px] md:w-full  border-4 p-6 rounded-xl hover:border-pink-600 hover:shadow-xl shadow-blue-300 duration-700 border-blue-500">
                <h1 className=" text-2xl text-center font-bold md:text-5xl text-pink-900 py-2">
                  Your cart Total
                </h1>
                <hr className="border-[1px] border-gray-300  " />
                <div className="flex items-center justify-between py-2">
                  <h1 className="md:text-2xl text-xl text-gray-500">
                    Sub Total :
                  </h1>
                  <h1>${totalPrice}</h1>
                </div>
                <div className="flex items-center justify-between py-2">
                  <h1 className="md:text-2xl text-xl text-gray-500">
                    Shipping Charges :
                  </h1>
                  <h1>$5</h1>
                </div>
                <hr className="border-[1px] border-gray-300  " />
                <div className="flex items-center justify-between py-1">
                  <h1 className="md:text-2xl text-xl text-gray-500">Total :</h1>
                  <h1>${totalPrice + 5}</h1>
                </div>

                <div className=" flex flex-col md:flex-row items-center py-4 gap-5 justify-end">
                  <button
                    onClick={handleChekout}
                    className="rounded-r-full rounded-l-full btn bg-pink-500 hover:bg-blue-400 text-white"
                  >
                    Check out
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          !PaymentComplete && (
            <div className="py-5 text-center">
              <h1 className="text-4xl text-pink-800">
                No Product in your cart 🥺
              </h1>
              <Link to={"/alltoy"}>
                <button className="btn text-white bg-indigo-600 hover:bg-pink-600 my-16">
                  Go to shop
                </button>
              </Link>
            </div>
          )
        )}
      </div>

      {PaymentComplete && (
        <div>
          <div
            ref={printref}
            className=" rounded-md py-5 bg-blue-100 mx-2 md:mx-36"
          >
            <div className="  text-center  rounded-md w-full text-4xl font-bold text-violet-700">
              Kiddo Toy Shop
            </div>
            <hr className="border-2 my-2 mx-28 border-gray-600" />
            <div className=" grid grid-cols-3 md:grid-cols-4 bg-blue-300 items-center px-3 md:px-20">
              <h1 className=" text-2xl md:text-4xl font-bold md:col-span-2 text-[#4749ce]">
                Invoice
              </h1>
              <div className=" text-xs md:text-lg text-end text-blue-800">
                <h1>📞 +88016XXXXXXX</h1>
                <h1>✉️ info@kiddo.com</h1>
                <a className="underline">🌐 www.kiddo.com</a>
              </div>
              <div className=" text-xs md:text-lg text-end text-blue-800">
                <h1 className=" text-white underline">Address</h1>
                <h1>123 Street</h1>
                <h1>city</h1>
                <h1>Country</h1>
              </div>
            </div>
            <div className="bg-white px-3 md:px-20 py-3 text-[16px] md:text-xl flex justify-between items-center text-black">
              <div>
                {" "}
                Billed to: {user?.displayName} <br />
                Email: {user?.email}
              </div>
              <div>Total Amount : ${InvoicePrice + 5}</div>
            </div>
            <div className="">
              <div className=" px-3 md:px-20 rounded-t-lg py-2 text-2xl font-semibold grid grid-cols-5 text-center bg-red-300">
                <h1 className=" ">Image</h1>
                <h1 className=" col-span-3 ">Product </h1>
                <h1>Price</h1>
              </div>
              {Invoice.map((item) => (
                <div
                  key={item._id}
                  className="  px-3 md:px-20 grid grid-cols-5 my-1 py-2 bg-gray-300"
                >
                  <img
                    src={item.image_link}
                    className="  mx-auto w-16 rounded-lg"
                    alt={item.toy_name}
                  />
                  <h1 className=" col-span-3 text-xl text-center">{item.toy_name}</h1>
                  <h1 className=" text-center text-xl font-bold">${item.price}</h1>
                </div>
              ))}
              <div className=" px-3 md:px-20 md:mx-16 mx-5 text-xl font-semibold text-end">
              <h1>Total Price : ${InvoicePrice}</h1>
              <h1>Shipment Cost: ${5}</h1>
              <h1>Total Payment Cost: ${InvoicePrice+5}</h1>

              </div>
            </div>
          </div>
          <div className=" flex justify-around py-5">
            <button
              onClick={handlePrint}
              className=" rounded-r-full rounded-l-full btn border-4 border-blue-600 hover:border-pink-600 text-blue-700 hover:text-pink-800"
            >
              Download receipt
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mycart;
