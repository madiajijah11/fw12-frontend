import { Link, useNavigate } from 'react-router-dom';
import Cinema from '../../../assets/images/Vector-1.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { chooseSeat } from '../../../redux/reducers/transactionReducer';

const PageOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSeat, setSelectedSeat] = useState([]);

  const selectSeat = (seat) => {
    if (selectedSeat.includes(seat)) {
      setSelectedSeat([...selectedSeat.filter((item) => item !== seat)]);
    } else {
      setSelectedSeat([...selectedSeat, seat]);
    }
  };

  const checkout = () => {
    dispatch(chooseSeat({ seatNum: selectedSeat.join(', ') }));
    navigate('/payment-page');
  };
  return (
    <div className="lg:px-32 py-16 md:px-16 sm:px-8 px-0">
      <div className="flex flex-row bg-gray-100 p-20 rounded-lg gap-10">
        <div className="w-full">
          <div className="flex flex-col gap-5 mb-8">
            <div className="text-2xl font-bold">Movie Selected</div>
            <div className="bg-white flex flex-row rounded-md p-10">
              <div className="font-semibold text-2xl flex-1">Spider-Man: Homecoming</div>
              <div className="border-[#FA86BE] border-2 hover:border-[#A275E3] rounded-md ">
                <Link
                  to="/movie-list"
                  className="text-[#FA86BE] inline-block align-middle py-2 px-4 font-bold text-sm hover:text-[#A275E3]"
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
                    <div className="grid grid-rows-8 gap-2">
                      {['A', 'B', 'C', 'D', 'E', 'F', 'G', ' '].map((abc, index) => {
                        return (
                          <div className="grid grid-cols-8 gap-2" key={index}>
                            {['0', '1', '2', '3', '4', '5', '6', '7'].map((number, index) => {
                              if (number > 0) {
                                if (abc !== ' ') {
                                  const seatNumber = `${abc}${number}`;
                                  return (
                                    <button
                                      key={index}
                                      onClick={() => selectSeat(seatNumber)}
                                      className={`hover:bg-[#9AEBED] h-6 w-6 rounded-sm ${
                                        (selectedSeat.includes(seatNumber) && ' bg-[#FA86BE]') ||
                                        ' bg-gray-100'
                                      }`}
                                    ></button>
                                  );
                                } else {
                                  return (
                                    <div key={index} className="h-6 w-6 rounded-sm text-center">
                                      {number}
                                    </div>
                                  );
                                }
                              } else {
                                return (
                                  <div key={index} className="h-6 w-6 rounded-sm text-center">
                                    {abc}
                                  </div>
                                );
                              }
                            })}
                          </div>
                        );
                      })}
                    </div>
                    <div className="grid grid-rows-8 gap-2">
                      {['A', 'B', 'C', 'D', 'E', 'F', 'G', ' '].map((abc, index) => {
                        return (
                          <div className="grid grid-cols-8 gap-2" key={index}>
                            {['0', '8', '9', '10', '11', '12', '13', '14'].map((number, index) => {
                              if (number > 0) {
                                if (abc !== ' ') {
                                  const seatNumber = `${abc}${number}`;
                                  return (
                                    <button
                                      key={index}
                                      onClick={() => selectSeat(seatNumber)}
                                      className={`hover:bg-[#9AEBED] h-6 w-6 rounded-sm ${
                                        (selectedSeat.includes(seatNumber) && ' bg-[#FA86BE]') ||
                                        ' bg-gray-100'
                                      }`}
                                    ></button>
                                  );
                                } else {
                                  return (
                                    <div key={index} className="h-6 w-6 rounded-sm text-center">
                                      {number}
                                    </div>
                                  );
                                }
                              } else {
                                return (
                                  <div key={index} className="h-6 w-6 rounded-sm text-center"></div>
                                );
                              }
                            })}
                          </div>
                        );
                      })}
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
                      <div className="h-6 w-6 rounded-sm bg-[#FA86BE]"></div>
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
              <button
                onClick={() => navigate(-1)}
                className="border-[#FA86BE] border px-4 py-2 rounded-md text-[#FA86BE] hover:bg-[#A275E3] hover:border-[#A275E3] hover:text-white font-bold text-base"
              >
                Change your movie
              </button>
              <button
                onClick={checkout}
                className="bg-[#A275E3] text-white px-4 py-2 rounded-md hover:bg-transparent hover:border-[#FA86BE] hover:border hover:text-[#FA86BE] font-bold text-base"
              >
                Checkout now
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col gap-5">
          <div className="text-2xl font-bold">Order Info</div>
          <div className="bg-white rounded-lg flex flex-col px-10 gap-4">
            <img className="mt-10 w-32 self-center" src={Cinema} alt="cineone21" />
            <div className="font-semibold text-2xl text-center">CineOne21 Cinema</div>
            <div className="grid gap-4">
              <div className="flex justify-between">
                <div className="text-base font-normal text-gray-400">Movie Selected</div>
                <div className="font-semibold">Spider-Man: Homecoming</div>
              </div>
              <div className="flex justify-between">
                <div className="text-base font-normal text-gray-400">Tuesday, 07 July 2020</div>
                <div className="font-semibold">02:00</div>
              </div>
              <div className="flex justify-between">
                <div className="text-base font-normal text-gray-400">One ticket price</div>
                <div className="font-semibold">$10</div>
              </div>
              <div className="flex justify-between">
                <div className="text-base font-normal text-gray-400">Seat choosed</div>
                <div className="font-semibold">C4, C5, C6</div>
              </div>
            </div>
            <hr className="w-full border-b-2" />
            <div className="mb-10 flex justify-between w-full">
              <div className="font-semibold text-lg">Total Payment</div>
              <div className="text-[#FA86BE] font-bold text-2xl">$30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOrder;
