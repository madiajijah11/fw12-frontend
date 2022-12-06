import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="bg-[url('../images/background.png')] bg-cover bg-center bg-no-repeat w-full h-full relative">
          <div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#FB2576] opacity-80">
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
            <form className="flex flex-col items-center w-full gap-4">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block text-md font-medium leading-10"
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Write your first name"
                  name="firstName"
                  className="w-full px-4 py-2 border border-[#FB2576] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3F0071] focus:border-transparent"
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
                  type="text"
                  placeholder="Write your last name"
                  name="lastName"
                  className="w-full px-4 py-2 border border-[#FB2576] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3F0071] focus:border-transparent"
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
                  type="text"
                  placeholder="Write your phone number"
                  name="phoneNumber"
                  className="w-full px-4 py-2 border border-[#FB2576] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3F0071] focus:border-transparent"
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
                  type="email"
                  placeholder="Write your email"
                  name="email"
                  className="w-full px-4 py-2 border border-[#FB2576] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3F0071] focus:border-transparent"
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
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-[#FB2576] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3F0071] focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="bg-[#FB2576] hover:bg-[#3F0071] py-2 px-4 text-medium text-white w-full rounded-md font-medium"
              >
                Sign Up
              </button>
            </form>
            <div className="text-center">
              <div>
                Already have account?{" "}
                <Link
                  to="/signin"
                  className="decoration-[#FB2576] underline underline-offset-2 font-medium text-[#FB2576]"
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
