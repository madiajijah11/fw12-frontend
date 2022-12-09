import { Link } from "react-router-dom";

const Signin = () => {
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
            <div className="text-5xl font-bold">Sign In</div>
            <div className="font-thin text-gray-700">
              Sign in with your data that you entered during your registration
            </div>
            <form className="flex flex-col items-center w-full gap-4">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-md font-medium leading-10"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Write your email"
                  name="email"
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
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
                  type="password"
                  name="password"
                  placeholder="Write your password"
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-[#FA86BE] hover:bg-[#A275E3] py-2 px-4 text-medium text-white w-full rounded-md font-medium"
              >
                Sign In
              </button>
            </form>
            <div className="text-center">
              <div>
                Forgot your password?{" "}
                <Link
                  to="/forgot-password"
                  className="decoration-[#FA86BE] underline underline-offset-2 font-medium text-[#FA86BE]"
                >
                  Reset Now
                </Link>
              </div>
              <div>
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="decoration-[#FA86BE] underline underline-offset-2 font-medium text-[#FA86BE]"
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
