import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import GoggleLogin from "../Googlelogin/Google";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const { email, password } = data;
    console.log(data);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="">
      {/* <Helmet>
          <title>Sumner Sports camp | Login</title>
        </Helmet> */}
      <div className=" py-10 px-10 mx-20 ">
        <div className="grid grid-cols-2 gap-36">
          <div>
            <img
              className=" w-full"
              src="https://i.postimg.cc/Bbq3LpC0/ezgif-com-optimize.gif"
            />
          </div>
          <div className="flex flex-col gap-2 px-10 py-5 border-2 border-blue-500 w-96 rounded-xl">
            <h1 className="text-3xl text-center text-gray-600 ">
             Please Login Here!!
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <label htmlFor="mail" className="text-xl text-white">
                Enter Email id
              </label>
              <input
                type="email"
                id="mail"
                placeholder="Enter mail here"
                className="w-full max-w-xs shadow-lg duration-700 hover:shadow-[#5572e6] shadow-[#dd7474] border-blue-600 input input-bordered"
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
                className="w-full max-w-xs shadow-lg duration-700 hover:shadow-[#5572e6] shadow-[#dd7474] border-blue-600 input input-bordered "
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
              <input

                type="submit"
                value="Login"
                className="w-full max-w-xs my-5 duration-1000 shadow-lg hover:shadow-[#5572e6] shadow-[#dd7474] bg-[#F379A7] hover:bg-blue-400 input input-bordered btn"
              />{" "}
            </form>
            <p className="text-xl text-white">{error}</p>
            <GoggleLogin></GoggleLogin>
            <p className="text-gray-600">
              Not Registered yet ?
              <Link to={"/signup"} className="text-[#55D1E6] underline">
                {" "}
                Signup
              </Link>{" "}
              now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
