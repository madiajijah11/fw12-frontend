import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { chooseMovie } from '../../../../redux/reducers/transactionReducer';

const SecondMovieDetailSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [location, setLocation] = useState([]);
  const [city, setCity] = useState('');
  const [schedule, setSchedule] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCinema, setSelectedCinema] = useState('');

  useEffect(() => {
    getLocation();
  }, [id]);

  useEffect(() => {
    getSchedule(id, city, date);
  }, [id, city, date]);

  const getLocation = async () => {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + '/movies/' + id + '/schedules/city',
      {
        params: { date }
      }
    );
    setLocation(data.data);
    if (data.data.length) {
      setCity(data.data[0].name);
    }
  };

  const getSchedule = async (id, city, date) => {
    const { data } = await axios.get(
      process.env.REACT_APP_API_URL + '/movies/' + id + '/schedules',
      {
        params: { city, date }
      }
    );
    setSchedule(data.data);
  };

  const selectTime = (time, cinema) => {
    setSelectedTime(time);
    setSelectedCinema(cinema);
  };

  const book = () => {
    dispatch(
      chooseMovie({
        movieId: id,
        cinemaId: selectedCinema,
        bookingDate: date,
        bookingTime: selectedTime
      })
    );
    navigate('/order-page');
  };

  return (
    <>
      <div className="bg-gray-100 rounded-lg flex flex-col items-center py-16 gap-10">
        <div className="font-bold text-2xl">Showtimes and Tickets</div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              className="p-3 rounded-md w-[220px]"
              type="date"
              defaultValue={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <select
              className="p-3 rounded-md w-[220px]"
              name="location"
              id="location"
              onChange={(e) => setCity(e.target.value)}
            >
              {location?.map((city) => {
                return (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full h-full px-20">
          {schedule?.map((cinema) => {
            return (
              <div className="bg-white rounded-lg p-10" key={cinema.id}>
                <div className="grid grid-cols-2 mb-5">
                  <div className="flex flex-wrap justify-center w-full h-full content-center">
                    <img src={cinema.picture} alt="" />
                  </div>
                  <div>
                    <div className="font-semibold text-2xl">{cinema.name}</div>
                    <div className="font-light text-sm">
                      {cinema.address}, {cinema.city}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
                  {cinema.time.map((time) => {
                    return (
                      <div key={time} className="w-full h-full">
                        <button
                          className={`hover:bg-[#FA86BE] hover:text-white cursor-pointer text-base text-center rounded-md w-full h-full
                            ${
                              cinema.id === selectedCinema &&
                              time === selectedTime &&
                              'bg-[#A275E3] text-white font-bold'
                            }
                          `}
                          onClick={() => selectTime(time, cinema.id)}
                        >
                          {time}
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="grid grid-cols-2">
                  <div className="">Price</div>
                  <div className="text-right font-semibold">$10.00/seat</div>
                </div>
                <button
                  className={`w-full hover:bg-[#FA86BE] border border-[#A275E3] hover:text-white cursor-pointer text-base font-bold text-center rounded-md mt-5 py-2 ${
                    selectedCinema !== cinema.id && 'opacity-5'
                  }`}
                  disabled={selectedCinema !== cinema.id}
                  onClick={book}
                >
                  Book Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SecondMovieDetailSection;
