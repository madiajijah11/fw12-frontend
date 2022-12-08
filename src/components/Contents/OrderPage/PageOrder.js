import { Link } from "react-router-dom";
import Cinema from "../../../assets/images/Vector-1.png";

const PageOrder = () => {
  return (
    <div className="lg:px-32 py-16 md:px-16 sm:px-8 px-0">
      <div className="flex flex-row bg-gray-100 p-20 rounded-lg gap-10">
        <div className="w-full">
          <div className="flex flex-col gap-5 mb-8">
            <div className="text-2xl font-bold">Movie Selected</div>
            <div className="bg-white flex flex-row rounded-md p-10">
              <div className="font-semibold text-2xl flex-1">
                Spider-Man: Homecoming
              </div>
              <div className="border-[#FB2576] border-2 hover:border-[#3F0071] rounded-md ">
                <Link
                  to="/movie-list"
                  className="text-[#FB2576] inline-block align-middle py-2 px-4 font-bold text-sm hover:text-[#3F0071]"
                >
                  Change Movie
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-2xl font-bold">Choose Your Seat</div>
            <div className="bg-white rounded-md">
              <div className="flex flex-col items-center py-10 gap-5">
                <div className="font-bold text-base">Theatre Screen</div>
                <hr className="w-full border-b-2 " />
                <div>
                  <div className="flex flex-row">
                    <div className="grid grid-cols-8 gap-2">
                      <div className="h-6 w-6 rounded-sm">A</div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-300"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm">B</div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-300"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-300"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm">C</div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-[#FB2576]"></div>
                      <div className="h-6 w-6 rounded-sm bg-[#FB2576]"></div>
                      <div className="h-6 w-6 rounded-sm bg-[#FB2576]"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm">D</div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-300"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm">E</div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-300"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm">F</div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm">G</div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-300"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                      <div className="h-6 w-6 rounded-sm"></div>
                      <div className="h-6 w-6 rounded-sm">1</div>
                      <div className="h-6 w-6 rounded-sm">2</div>
                      <div className="h-6 w-6 rounded-sm">3</div>
                      <div className="h-6 w-6 rounded-sm">4</div>
                      <div className="h-6 w-6 rounded-sm">5</div>
                      <div className="h-6 w-6 rounded-sm">6</div>
                      <div className="h-6 w-6 rounded-sm">7</div>
                    </div>
                    <div className="grid grid-cols-8 gap-2">
                      <div className="w-6 h-6 rounded-sm"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-300"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-300"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-300"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-300"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-300"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm bg-gray-100"></div>
                      <div className="w-6 h-6 rounded-sm"></div>
                      <div className="w-6 h-6 rounded-sm">8</div>
                      <div className="w-6 h-6 rounded-sm">9</div>
                      <div className="w-6 h-6 rounded-sm">10</div>
                      <div className="w-6 h-6 rounded-sm">11</div>
                      <div className="w-6 h-6 rounded-sm">12</div>
                      <div className="w-6 h-6 rounded-sm">13</div>
                      <div className="w-6 h-6 rounded-sm">14</div>
                    </div>
                  </div>
                </div>
                <div className="font-bold text-base">Seating Key</div>
                <div className="flex gap-10">
                  <div className="flex gap-2">
                    <div>
                      <div className="h-6 w-6 rounded-sm bg-gray-100"></div>
                    </div>
                    <div>Available</div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <div className="h-6 w-6 rounded-sm bg-[#FB2576]"></div>
                    </div>
                    <div>Selected</div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <div className="h-6 w-6 rounded-sm bg-gray-300"></div>
                    </div>
                    <div>Sold</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <Link
                to="/movie-list"
                className="border-[#FB2576] border px-4 py-2 rounded-md text-[#FB2576] hover:bg-[#3F0071] hover:border-[#3F0071] hover:text-white font-bold text-base"
              >
                Change your movie
              </Link>
              <Link
                to="#"
                className="bg-[#3F0071] text-white px-4 py-2 rounded-md hover:bg-transparent hover:border-[#FB2576] hover:border hover:text-[#FB2576] font-bold text-base"
              >
                Checkout now
              </Link>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col gap-5">
          <div className="text-2xl font-bold">Order Info</div>
          <div className="bg-white rounded-lg flex flex-col px-10 gap-4">
            <img
              className="mt-10 w-32 self-center"
              src={Cinema}
              alt="cineone21"
            />
            <div className="font-semibold text-2xl text-center">
              CineOne21 Cinema
            </div>
            <div className="grid gap-4">
              <div className="flex justify-between">
                <div className="text-base font-normal text-gray-400">
                  Movie Selected
                </div>
                <div className="font-semibold">Spider-Man: Homecoming</div>
              </div>
              <div className="flex justify-between">
                <div className="text-base font-normal text-gray-400">
                  Tuesday, 07 July 2020
                </div>
                <div className="font-semibold">02:00</div>
              </div>
              <div className="flex justify-between">
                <div className="text-base font-normal text-gray-400">
                  One ticket price
                </div>
                <div className="font-semibold">$10</div>
              </div>
              <div className="flex justify-between">
                <div className="text-base font-normal text-gray-400">
                  Seat choosed
                </div>
                <div className="font-semibold">C4, C5, C6</div>
              </div>
            </div>
            <hr className="w-full border-b-2" />
            <div className="mb-10 flex justify-between w-full">
              <div className="font-semibold text-lg">Total Payment</div>
              <div className="text-[#FB2576] font-bold text-2xl">$30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOrder;
