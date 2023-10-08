import { useForm } from "react-hook-form";
import useAuth from "./../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import GoggleLogin from "../Googlelogin/Google";
import { useState } from "react";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { createUser, updateUserProfile, setReload } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/login";

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        const role = "user";
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL);

        const user = {
          name: data.name,
          role: role,
          email: data.email,
        };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Added to database",
                showConfirmButton: false,
                timer: 1500,
              });

              navigate(from, { replace: true });
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className=" pt-16 mx-20 px-10">
      <div className="grid grid-cols-2 items-center ">
        <div>
          <img src="https://i.postimg.cc/MTyTTzQn/ezgif-com-optimize-1.gif" />
        </div>
        <div className="">
          <h1 className="mt-10 mb-3 text-3xl font-semibold text-center">
            Please Register
          </h1>
          <hr className="w-1/2 mx-auto border-gray-500 border-2" />
          <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className=" grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold label-text">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl font-semibold label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div></div>
            <div className=" grid grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-semibold label-text">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl font-semibold label-text">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  id="confirm_pass"
                  placeholder="Enter your confirm password"
                  className="w-full max-w-xs input input-bordered "
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-600">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>{" "}
            </div>{" "}
            <label className="label text-center">
              <a href="#" className="label-text-alt link link-hover ">
                Forgot password?
              </a>
            </label>
            <p>{error && <span>{error}</span>}</p>
            <div className=" form-control">
              <input
                className="btn btn-info"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>

          <p className=" py-1 text-center text-xl">
            <small>
              Already have an account{" "}
              <Link to="/login" className="font-semibold text-blue-700 ">
                Login
              </Link>
            </small>
          </p>

          <div className=" mx-8 pb-10">
            <GoggleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
