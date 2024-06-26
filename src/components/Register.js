
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Register = ({ setIsLoginVisible }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [dob, setDOB] = useState();
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const authtoken = localStorage.getItem("authtoken");
    if (authtoken) {
      navigate('/')
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password, dob, city, zipCode };
    console.log("form data =>", data)

    let apiUrl = `${process.env.REACT_APP_PUBLIC_HOST}/api/auth/createuser`;
    console.log(apiUrl)

    let res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let response = await res.json();

    console.log("res =>", response);

    if (response.success === true) {
      localStorage.setItem("auth-token", response.authtoken);
      toast.success("User has been created!", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);

    } else {
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
    setName("");
    setPassword("");
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "dob") {
      setDOB(e.target.value);
    } else if (e.target.name === "zipcode") {
      setZipCode(e.target.value);
    } else if (e.target.name === "cpassword") {
      setCPassword(e.target.value);
    } else if (e.target.name === "city") {
      setCity(e.target.value);
    }
  }

  return (
    <>
      <div className="flex min-h-screen flex-col justify-start items-center lg:px-8 md:mt-0 py-8">
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

        <div className="mt-2 w-full md:px-16">


          <form className="space-y-3 px-1 md:px-8" method="POST" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium leading-4 text-gray-900"
              >
                Your Name
              </label>
              <div className="mt-2">
                <input
                  value={name}
                  onChange={handleChange}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Enter your name"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium leading-4 text-gray-900"
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
                  placeholder="Email"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-row space-x-4">

              <div className="flex w-1/2 flex-col">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-lg font-medium leading-4 text-gray-900"
                  >
                    Password
                  </label>
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
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex w-1/2 flex-col">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-lg font-medium leading-4 text-gray-900"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    value={cpassword}
                    onChange={handleChange}
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Confirm Password"
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            </div>

            <div className="flex flex-row space-x-2">

              <div className="flex w-1/2 flex-col">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="dob"
                    className="block text-lg font-medium leading-4 text-gray-900"
                  >
                    Date of Birth
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    value={dob}
                    onChange={handleChange}
                    id="dob"
                    name="dob"
                    type="date"
                    autoComplete="current-password"
                    required

                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex w-1/2 flex-col">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="zipcode"
                    className="block text-lg font-medium leading-4 text-gray-900"
                  >
                    ZipCode
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    value={zipCode}
                    onChange={handleChange}
                    id="zipcode"
                    name="zipcode"
                    type="text"
                    autoComplete="current-password"
                    required
                    placeholder="Zipcode"
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="city"
                  className="block text-lg font-medium leading-4 text-gray-900"
                >
                  City
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={city}
                  onChange={handleChange}
                  id="city"
                  name="city"
                  type="string"
                  autoComplete="current-password"
                  required
                  placeholder="City"
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>





            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-lg text-gray-500">
            Already a member?
            <span
              onClick={() => { setIsLoginVisible(true) }}
              className="font-semibold cursor-pointer leading-6 text-orange-600 hover:text-orange-500"
            >
              {" "}
              Sign in
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
