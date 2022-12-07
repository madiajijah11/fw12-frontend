import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingIndicator from "../../../LoadingIndicator";

// const MovieUpComing = [
//   {
//     id: 1,
//     title: "Black Widow",
//     picture: require("../../../../assets/images/Rectangle-139.png"),
//     genre: "Action, Adventure, Sci-Fi",
//   },
//   {
//     id: 2,
//     title: "The Witches",
//     picture: require("../../../../assets/images/Rectangle-139-1.png"),
//     genre: "Adventure, Comedy, Family",
//   },
//   {
//     id: 3,
//     title: "Tenet",
//     picture: require("../../../../assets/images/Rectangle-139-2.png"),
//     genre: "Action, Sci-Fi, Thriller",
//   },
//   {
//     id: 4,
//     title: "Black Widow",
//     picture: require("../../../../assets/images/Rectangle-139.png"),
//     genre: "Action, Adventure, Sci-Fi",
//   },
//   {
//     id: 5,
//     title: "The Witches",
//     picture: require("../../../../assets/images/Rectangle-139-1.png"),
//     genre: "Adventure, Comedy, Family",
//   },
// ];

const month = [
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
];

const ThirdHomeSection = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const imgURL = process.env.REACT_APP_API_URL + "/assets/uploads/";

  const fetchMovies = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_URL +
        "/movies/upcoming?sortBy=releaseDate&sort=DESC"
    );
    if (response.data.data) {
      setMovies(response.data.data);
      setIsLoading(false);
    } else {
      setMovies([]);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="px-20 pt-20">
        {/* Movie Up Coming */}
        <div className="container mx-auto">
          <div className="flex flex-row justify-between items-center">
            <div className="text-2xl font-semibold">Up Coming</div>
            <div className="text-medium font-semibold">
              <Link to="/list-movie">View All</Link>
            </div>
          </div>
          {/* Show Month */}
          <div className="flex flex-row mt-10 overflow-x-auto place-content-between mb-10">
            {month.map((item, index) => (
              <button
                key={`month-${index}`}
                className="border-2 w-[100px] border-[#FB2576] rounded-md flex justify-center items-center p-2 my-5 mx-5 hover:bg-[#FB2576] text-[#FB2576] hover:text-white font-bold hover:shadow-md hover:shadow-[#3F0071]"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-8 mt-8 px-8 overflow-x-auto place-content-between">
            {isLoading && <LoadingIndicator />}
            {movies.map((item) => (
              <div className="relative" key={item.id}>
                <div className="flex flex-col p-8 border-2 items-center rounded-lg border-[#FB2576] text-center hover:bg-white w-full h-full">
                  <img
                    className="w-40 h-60 rounded-md"
                    src={imgURL + item.picture}
                    alt={item.title}
                    title={item.title}
                  />
                  <div className="flex flex-col gap-2 h-full justify-end">
                    <div className="text-2x1 font-semibold w-[130px] mt-2">
                      {item.title}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-sm w-[130px]">{item.genre}</div>
                    </div>
                    <button className="bg-[#FB2576] hover:bg-[#3F0071] py-2 px-4 text-medium text-white rounded-md font-medium w-[130px]">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdHomeSection;
