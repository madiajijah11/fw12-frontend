import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { register } from "../redux/actions/authAction";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.auth);

  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register({ ...value, cb: () => navigate("/") }));
  };

  return (
    <>
      <div className="grid sm:grid-cols-[2fr,1.3fr] h-screen">
        <div className="hidden sm:block bg-[url('../images/background.png')] bg-cover bg-center bg-no-repeat w-full h-full relative">
          <div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#FA86BE] opacity-80">
              <div className="flex items-center justify-center h-full w-11/12">
                <div className="text-center">
                  <h1 className="text-7xl text-white font-bold">MexL Cinema</h1>
                  <p className="text-5xl text-white font-thin">
                    The best place to buy movies tickets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-8 my-8">
          <div className="w-2/3 grid gap-7">
            <div className="text-5xl font-bold">Sign Up</div>
            <div className="font-thin text-gray-700">
              Fill your additional details
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center w-full gap-4"
            >
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block text-md font-medium leading-10"
                >
                  First Name
                </label>
                <input
                  value={value.firstName}
                  onChange={(event) =>
                    setValue({ ...value, firstName: event.target.value })
                  }
                  type="text"
                  placeholder="Write your first name"
                  name="firstName"
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="block text-md font-medium leading-10"
                >
                  Last Name
                </label>
                <input
                  value={value.lastName}
                  onChange={(event) =>
                    setValue({ ...value, lastName: event.target.value })
                  }
                  type="text"
                  placeholder="Write your last name"
                  name="lastName"
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="phoneNumber"
                  className="block text-md font-medium leading-10"
                >
                  Phone Number
                </label>
                <input
                  value={value.phoneNumber}
                  onChange={(event) =>
                    setValue({ ...value, phoneNumber: event.target.value })
                  }
                  type="tel"
                  placeholder="Write your phone number"
                  name="phoneNumber"
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-md font-medium leading-10"
                >
                  Email
                </label>
                <input
                  value={value.email}
                  onChange={(event) =>
                    setValue({ ...value, email: event.target.value })
                  }
                  type="email"
                  placeholder="Write your email"
                  name="email"
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block text-md font-medium leading-10"
                >
                  Password
                </label>
                <input
                  value={value.password}
                  onChange={(event) =>
                    setValue({ ...value, password: event.target.value })
                  }
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#FA86BE] hover:bg-[#A275E3] py-2 px-4 text-medium text-white w-full rounded-md font-medium"
                disabled={loading}
              >
                Sign Up
              </button>
            </form>
            {error && (
              <div className="text-center border border-[#FA86BE] text-red-500 font-medium p-2 rounded-md">
                {error}
              </div>
            )}
            <div className="text-center">
              <div>
                Already have account?{" "}
                <Link
                  to="/signin"
                  className="decoration-[#FA86BE] underline underline-offset-2 font-medium text-[#FA86BE]"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
