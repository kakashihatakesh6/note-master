
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CgSpinner } from "react-icons/cg";



const Login = ({ setIsLoginVisible }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const data = { email, password };
      let apiUrl = `${process.env.REACT_APP_PUBLIC_HOST}/api/auth/login`;

      let res = await axios.post(apiUrl, data);
      let response = await res.data;
      console.log(response);

      if (response.success === true) {
        localStorage.setItem("auth-token", response.authtoken);
        toast.success("You are successfully logged in!", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setIsLoading(false)

        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        setIsLoading(false)
        toast.error("response.error", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      setEmail("");
      setPassword("");

    } catch (error) {
      setIsLoading(false)
      toast.error("Please Enter The Valid Credentials", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }





  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <>

      <div className="flex flex-col min-w-full justify-center items-center px-8 py-12 lg:px-8 ">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />


        <h2 className='text-3xl font-bold mb-6'>Get started with Note Master</h2>

        <p>Email: <span className="font-semibold">admin@gmail.com</span> ||
          Password: <span className="font-semibold">admin</span></p>

        <div className="mt-5 flex flex-col w-full md:px-16">
          <form className="space-y-6 px-1 md:px-8 py-4" method="POST" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to={"#"}
                    className="font-semibold text-orange-600 hover:text-orange-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center items-center rounded-md bg-orange-600 px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading && <CgSpinner size={24} className="font-bold animate-spin mr-3"/>} Sign in
              </button>
            </div>
          </form>

          <p className="mt-2 text-center text-lg text-gray-500">
            Not a member?
            <span
              onClick={() => { setIsLoginVisible(false) }}
              className="font-semibold cursor-pointer leading-6 text-orange-600 hover:text-orange-500"
            >
              {" "}
              Create a account
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
