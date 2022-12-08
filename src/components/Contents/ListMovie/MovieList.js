import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingIndicator from "../../LoadingIndicator";

const months = [
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

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const imgURL = process.env.REACT_APP_API_URL + "/assets/uploads/";

  const fetchMovies = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "/movies?limit=8&page=1"
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
      <div className="px-32 py-16 bg-gray-100">
        <div className="flex flex-row justify-between items-center">
          <div className="text-2xl font-semibold">List Movie</div>
          <div className="flex flex-row justify-between items-center">
            <div className="mr-5">
              <select className="rounded-md p-2" name="sort" id="sort">
                <option value="">Title A-Z</option>
                <option value="">Title Z-A</option>
                <option value="releaseDate">Release Date ASC</option>
                <option value="releaseDate">Release Date DESC</option>
              </select>
            </div>
            <div>
              <input
                className="rounded-md p-2"
                type="text"
                placeholder="Search movie name..."
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row mt-10 overflow-x-auto place-content-between mb-10">
            {months.map((month, index) => (
              <button
                key={`month-${index}`}
                className="border-2 w-[100px] border-[#FB2576] rounded-md flex justify-center items-center p-2 my-5 mx-5 hover:bg-[#FB2576] text-[#FB2576] hover:text-white font-bold hover:shadow-md hover:shadow-[#3F0071]"
              >
                {month}
              </button>
            ))}
          </div>
        </div>
        <div className="px-20 py-20 bg-white rounded-md">
          {isLoading && <LoadingIndicator />}
          <div className="grid grid-cols-4 gap-10">
            {movies.map((movie) => (
              <div className="relative" key={movie.id}>
                <div className="flex flex-col p-8 border-2 items-center rounded-lg border-[#FB2576] text-center hover:bg-white w-full h-full">
                  <img
                    className="w-40 h-60 rounded-md"
                    src={imgURL + movie.picture}
                    alt={movie.title}
                    title={movie.title}
                  />
                  <div className="flex flex-col gap-2 h-full justify-end">
                    <div className="text-2x1 font-semibold w-[130px] mt-2">
                      {movie.title}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-sm w-[130px]">{movie.genre}</div>
                    </div>
                    <button
                      onClick={() => {
                        navigate(`/movie-details/${movie.id}`, {
                          state: movie,
                        });
                      }}
                      className="bg-[#FB2576] hover:bg-[#3F0071] py-2 px-4 text-medium text-white rounded-md font-medium w-[130px]"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Paginating */}
        <div className="flex flex-row justify-center mt-10 gap-4">
          <button className="bg-[#FB2576] hover:bg-[#3F0071] hover:shadow-md hover:shadow-[#3F0071] py-2 px-4 text-medium text-white rounded-md font-medium">
            1
          </button>
          <button className="bg-[#FB2576] hover:bg-[#3F0071] hover:shadow-md hover:shadow-[#3F0071] py-2 px-4 text-medium text-white rounded-md font-medium">
            2
          </button>
          <button className="bg-[#FB2576] hover:bg-[#3F0071] hover:shadow-md hover:shadow-[#3F0071] py-2 px-4 text-medium text-white rounded-md font-medium">
            3
          </button>
          <button className="bg-[#FB2576] hover:bg-[#3F0071] hover:shadow-md hover:shadow-[#3F0071] py-2 px-4 text-medium text-white rounded-md font-medium">
            4
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieList;
