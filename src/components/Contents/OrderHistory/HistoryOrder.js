import { Link } from "react-router-dom";
import ProfileImage from "../../../assets/images/profile.png";
import Cinema from "../../../assets/images/Vector-1.png";

const HistoryOrder = () => {
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
                className="rounded-md bg-[#FB2576] text-center px-4 py-2 text-white font-bold"
              >
                Logout
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col gap-10">
            <div className="bg-white rounded-lg px-8 py-4 flex items-center">
              <Link to="#" className="mr-10 font-normal text-lg">
                Account Setting
              </Link>
              <div>
                <div className="font-normal text-lg  decoration-[#FB2576] underline underline-offset-8 decoration-4">
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
