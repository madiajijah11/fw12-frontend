import { Link } from "react-router-dom";
import ProfileImage from "../../../assets/images/profile.png";
import Cinema from "../../../assets/images/Vector-1.png";
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { logout } from "../../../redux/reducers/authReducer";

const HistoryOrder = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const decoded = token ? jwt_decode(token) : null;
  const imgURL = process.env.REACT_APP_API_URL + "/assets/uploads/";

  const [value, setValue] = useState({
    firstName: decoded.firstName,
    lastName: decoded.lastName,
    phoneNumber: decoded.phoneNumber,
    email: decoded.email,
  });

  return (
    <>
      <div className="lg:px-32 py-16 md:px-16 sm:px-8 px-0">
        <div className="flex flex-row bg-gray-100 p-20 rounded-lg gap-10">
          <div className="bg-white rounded-lg p-10 w-1/4 h-full">
            <div className="grid gap-2">
              <div className="font-normal text-base">INFO</div>
              <img
                className="place-self-center"
                src={decoded.picture ? decoded.picture : imgURL + "user.jpg"}
                alt="user"
                width="136"
                height="136"
              />
              <div className="font-semibold text-xl text-center">
                {decoded.firstName} {decoded.lastName}
              </div>
              <div className="font-normal text-base text-center">
                Moviegoers
              </div>
              <hr />
              <button
                onSubmit={() => {
                  dispatch(logout());
                }}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#FA86BE] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#A275E3]"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col gap-10">
            <div className="bg-white rounded-lg px-8 py-4 flex items-center">
              <Link to="/profile" className="mr-10 font-normal text-lg">
                Account Setting
              </Link>
              <div>
                <div className="font-normal text-lg  decoration-[#FA86BE] underline underline-offset-8 decoration-4">
                  Order History
                </div>
              </div>
            </div>
            <div className="px-8 py-10 flex flex-col bg-white rounded-lg gap-4">
              <div className="grid gap-4">
                <div className="flex justify-between">
                  <div>
                    <div>Tuesday, 07 July 2020 - 04:30pm</div>
                    <div className="font-semibold text-2xl">
                      Spider-Man: Homecoming
                    </div>
                  </div>
                  <div>
                    <img src={Cinema} alt="cineone21" />
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="bg-green-500 px-6 py-2 rounded-md font-semibold text-white">
                      <div>Ticket in active</div>
                    </div>
                  </div>
                  <Link to="#">See Details</Link>
                </div>
              </div>
            </div>
            <div className="px-8 py-10 flex flex-col bg-white rounded-lg gap-4">
              <div className="grid gap-4">
                <div className="flex justify-between">
                  <div>
                    <div>Tuesday, 07 July 2020 - 04:30pm</div>
                    <div className="font-semibold text-2xl">
                      Spider-Man: Homecoming
                    </div>
                  </div>
                  <div>
                    <img src={Cinema} alt="cineone21" />
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="bg-green-500 px-6 py-2 rounded-md font-semibold text-white">
                      <div>Ticket in active</div>
                    </div>
                  </div>
                  <Link to="#">See Details</Link>
                </div>
              </div>
            </div>
            <div className="px-8 py-10 flex flex-col bg-white rounded-lg gap-4">
              <div className="grid gap-4">
                <div className="flex justify-between">
                  <div>
                    <div>Tuesday, 07 July 2020 - 04:30pm</div>
                    <div className="font-semibold text-2xl">
                      Spider-Man: Homecoming
                    </div>
                  </div>
                  <div>
                    <img src={Cinema} alt="cineone21" />
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="bg-green-500 px-6 py-2 rounded-md font-semibold text-white">
                      <div>Ticket in active</div>
                    </div>
                  </div>
                  <Link to="#">See Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryOrder;
