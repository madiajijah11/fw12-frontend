import { Link } from 'react-router-dom';
import http from '../../../../helpers/http';
import LoadingIndicator from '../../../LoadingIndicator';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const ThirdHomeSection = () => {
  const [month, setMonth] = useState(null);

  const { data: dataMonths } = useQuery({
    queryKey: ['months'],
    queryFn: () =>
      http()
        .get('/api/v1/months')
        .then(res => res.data.results)
  });

  const {
    data: dataMovies,
    isLoading: isLoadingMovies,
    error: errorMovies,
    refetch
  } = useQuery({
    queryKey: ['upcoming'],
    queryFn: async () => {
      if (month) {
        const res = await http().get(`/api/v1/movies/upcoming?month=${month}`);
        return res.data.results;
      } else {
        const res1 = await http().get('/api/v1/movies/upcoming');
        return res1.data.results;
      }
    }
  });

  return (
    <>
      <div className='px-10 md:px-20 pt-20'>
        {/* Movie Up Coming */}
        <div className='container mx-auto'>
          <div className='flex flex-row justify-between items-center'>
            <div className='text-2xl font-semibold'>Up Coming</div>
            <div className='text-medium font-semibold'>
              <Link to='/list-movie'>View All</Link>
            </div>
          </div>
          {/* Show Months */}
          <div className='flex flex-row mt-10 overflow-x-auto place-content-between mb-10'>
            {dataMonths?.map(month => (
              <button
                key={month.id}
                className='btn border-2 w-[100px] border-[#FA86BE] rounded-md flex justify-center items-center p-2 my-5 mx-5 hover:bg-[#FA86BE] text-[#FA86BE] hover:text-white font-bold hover:shadow-md hover:shadow-[#A275E3]'
                onClick={() => {
                  setMonth(month.id);
                  refetch();
                }}>
                {month.name}
              </button>
            ))}
          </div>
          {isLoadingMovies && <LoadingIndicator />}
          {errorMovies && (
            <div className='alert alert-error shadow-lg'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='stroke-current flex-shrink-0 h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <span>Internal Server Error.</span>
              </div>
            </div>
          )}
          <div className='flex gap-8 mt-8 px-8 overflow-x-auto place-content-between'>
            {dataMovies?.map(movie => (
              <div className='relative flex-shrink-0' key={movie.id}>
                <div className='flex flex-col p-8 border-2 items-center rounded-lg border-[#FA86BE] text-center hover:bg-white w-full h-full'>
                  <img
                    className='w-40 h-60 rounded-md'
                    src={movie.picture}
                    alt={movie.title}
                    title={movie.title}
                  />
                  <div className='flex flex-col gap-2 h-full justify-end'>
                    <div className='text-2x1 font-semibold w-[130px] mt-2'>{movie.title}</div>
                    <div className='flex flex-row'>
                      <div className='text-sm w-[130px]'>
                        {movie.movieGenre.map(genre => (
                          <span key={genre.genres.name}>{genre.genres.name}, </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      to={`/movie-details/${movie.id}`}
                      className='bg-[#FA86BE] hover:bg-[#A275E3] py-2 px-4 text-medium text-white rounded-md font-medium w-[130px]'>
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

export default ThirdHomeSection;
