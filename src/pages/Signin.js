import { Link } from "react-router-dom";
import Background from "../assets/images/background.png";

const Signin = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div
          className="bg-cover bg-center bg-no-repeat w-full h-full relative"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div>
            <div className="absolute top-0 left-0 w-full h-full bg-sky-600 opacity-80">
              <div className="flex items-center justify-center h-full">
                <div className="text-center z-20">
                  <h1 className="z-10 text-5xl text-white font-bold">
                    MexL Cinema
                  </h1>
                  <p className="z-10 text-2xl text-white font-medium">
                    The best place to watch movies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-8 my-8">
          <div className="gap-7">
            <div className="text-5xl">Sign In</div>
            <div className="text-base">
              Sign in with your data that you entered during your registration
            </div>
            <form className="flex flex-col items-center w-full gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-sky-600 hover:bg-sky-700 py-2 px-4 text-medium text-white w-full"
              >
                Sign In
              </button>
            </form>
            <div className="text-center">
              <div>
                Forgot your password?{" "}
                <Link
                  to="#"
                  className="decoration-blue-700 underline underline-offset-2"
                >
                  Reset Now
                </Link>
              </div>
              <div>
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="decoration-blue-700 underline underline-offset-2"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
