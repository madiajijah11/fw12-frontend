import { Link } from "react-router-dom";
import ProfileImage from "../../../assets/images/profile.png";

const Profile = () => {
  return (
    <>
      <div className="lg:px-32 py-16 md:px-16 sm:px-8 px-0">
        <div className="flex flex-row bg-gray-100 p-20 rounded-lg gap-10">
          <div className="bg-white rounded-lg p-10 w-1/4 h-full">
            <div className="grid gap-2">
              <div className="font-normal text-base">INFO</div>
              <img
                className="place-self-center"
                src={ProfileImage}
                alt="user"
                width="136"
                height="136"
              />
              <div className="font-semibold text-xl text-center">
                Jonas El Rodriguez
              </div>
              <div className="font-normal text-base text-center">
                Moviegoers
              </div>
              <hr />
              <Link
                to="/"
                className="rounded-md bg-[#FA86BE] text-center px-4 py-2 text-white font-bold"
              >
                Logout
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col gap-10">
            <div className="bg-white rounded-lg px-8 py-4 flex items-center">
              <div className="mr-10 font-normal text-lg decoration-[#FA86BE] underline underline-offset-8 decoration-4">
                Account Setting
              </div>
              <div>
                <Link to="/order-history" className="font-normal text-lg">
                  Order History
                </Link>
              </div>
            </div>
            <div className="px-8 py-10 flex flex-col bg-white rounded-lg gap-4">
              <div className="font-normal text-base">Details Information</div>
              <hr />
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="FirstName">First Name</label>
                    <input
                      className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                      type="text"
                      name="firstName"
                      placeholder="jonas"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="LastName">Last Name</label>
                    <input
                      className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                      type="text"
                      name="lastName"
                      placeholder="El Rodriguez"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="Email">Email</label>
                    <input
                      className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                      type="email"
                      name="email"
                      placeholder="jonasrodrigu123@gmail.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <div className="flex border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent">
                      <input
                        className="rounded-md rounded-r-none border-r-[#FA86BE] px-4 border-r py-2 w-16"
                        type="text"
                        placeholder="+62"
                      />
                      <input
                        className="rounded-md rounded-l-none px-4 py-2 border-l-[#FA86BE] border-l w-full"
                        type="text"
                        placeholder="81445687121"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#FA86BE] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#A275E3]">
                Update Changes
              </button>
            </div>
            <div className="px-8 py-10 flex flex-col bg-white rounded-lg gap-4">
              <div>Account and Privacy</div>
              <hr />
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="NewPassword">New Password</label>
                  <input
                    className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                    type="password"
                    name="password"
                    placeholder="Write your password"
                  />
                  <em className="fa-regular fa-eye"></em>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="ConfirmPassword">Confirm Password</label>
                  <input
                    className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                  />
                  <em className="fa-regular fa-eye"></em>
                </div>
              </div>
            </div>
            <div>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#FA86BE] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#A275E3]">
                Update Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
