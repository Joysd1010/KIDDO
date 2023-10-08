import React, { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Provider/Authprovider";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Form = () => {
  
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const { email, password } = data;
    console.log(data)

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Logged in',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        
              
                const user = { name: googleUser.displayName, email: googleUser.email };
        fetch("https://serverco-de.vercel.app/user", {
          method: 'POST',
          headers: { "content-type": "application/json" },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              
             
                navigate(from, { replace: true });
              }});
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex flex-col gap-2 bg-blue-600 w-96 px-10 py-5 rounded-xl">
        <h1 className="text-3xl text-white mb-10 text-center">Login Here!!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <label htmlFor="mail" className="text-xl text-white">
            Enter Email id
          </label>
          <input
            type="email"
            id="mail"
            placeholder="Enter mail here"
            className="input input-bordered w-full max-w-xs"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <label htmlFor="pass" className="text-xl text-white">
            Enter password
          </label>
          <input
            type="password"
            id="pass"
            placeholder="Enter your password"
            className="input input-bordered w-full max-w-xs "
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <input
            type="submit"
            value="Login"
            className="input input-bordered w-full max-w-xs btn my-5 "
          />{" "}
        </form>
        <p className="text-xl text-white">{error}</p>
        <div className="flex flex-col w-full border-opacity-100">
          <div className="divider  text-white ">OR</div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className=" flex gap-2 px-16 py-2 rounded-xl items-center text-xl bg-blue-100 "
        >
          Continue with <FcGoogle size={25} />
        </button>
        <p className="text-white">
          Not Registered yet ?
          <Link to={"/reg"} className="underline text-blue-300">
            {" "}
            Signup
          </Link>{" "}
          now.
        </p>
      </div>
    </div>
  );
};

export default Form;
