import { Link } from 'react-router-dom';
import http from '../../../../helpers/http';
import { useEffect, useState } from 'react';
import LoadingIndicator from '../../../LoadingIndicator';

const SecondHomeSection = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(movies);

  const imgURL = process.env.REACT_APP_API_URL + '/assets/uploads/';

  const fetchMovies = async () => {
    const response = await http().get('/api/v1/movies/nowShowing');
    if (response.data.results) {
      setMovies(response.data.results);
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
      <div className="bg-gray-100 rounded-lg h-[550px] px-10 md:px-20 py-20">
        {/* Movie now showing */}
        <div className="container mx-auto">
          <div className="flex flex-row justify-between items-center">
            <div className="text-2xl font-semibold text-[#FA86BE]">Now Showing</div>
            <div className="text-medium font-semibold text-[#FA86BE]">
              <Link to="/list-movie">View All</Link>
            </div>
          </div>
          {isLoading && <LoadingIndicator />}
          <div className="flex gap-8 mt-8 px-8 overflow-x-auto place-content-between">
            {movies.map((movie) => (
              <div className="relative group flex-shrink-0" key={movie.id}>
                <div className="flex flex-col p-8 border-2 items-center rounded-lg border-[#FA86BE] text-center hover:bg-white hover:border-[#A275E3] w-full">
                  <div>
                    <img
                      className="w-40 h-60 rounded-md"
                      src={imgURL + movie.picture}
                      alt={movie.title}
                      title={movie.title}
                    />
                  </div>
                  <div className="top-2/4 hidden group-hover:flex flex-col gap-2">
                    <div className="text-2x1 font-semibold w-[130px] mt-2">{movie.title}</div>
                    <div className="flex flex-row">
                      <div className="text-sm w-[130px]">
                        {movie.movieGenre.map((genre) => (
                          <span key={genre.genres.name}>{genre.genres.name}, </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      to={`/movie-details/${movie.id}`}
                      className="bg-[#A275E3] hover:bg-[#FA86BE] py-2 px-4 text-medium text-white rounded-md font-medium w-[130px]"
                    >
                      Details
                    </Link>
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

export default SecondHomeSection;
