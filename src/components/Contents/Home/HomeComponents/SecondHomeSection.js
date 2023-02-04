import { Link } from 'react-router-dom';
import http from '../../../../helpers/http';
// import LoadingIndicator from '../../../LoadingIndicator';
import { useQuery } from '@tanstack/react-query';
import { Skeleton, SkeletonText } from '@chakra-ui/react';

const SecondHomeSection = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['nowShowing'],
    queryFn: () =>
      http()
        .get('/api/v1/movies/nowShowing')
        .then(res => res.data.results)
  });

  return (
    <>
      <div className='bg-gray-100 rounded-lg h-[550px] px-10 md:px-20 py-20'>
        {/* Movie now showing */}
        <div className='container mx-auto'>
          <div className='flex flex-row justify-between items-center'>
            <div className='text-2xl font-semibold text-[#FA86BE]'>Now Showing</div>
            <div className='text-medium font-semibold text-[#FA86BE]'>
              <Link to='/list-movie'>View All</Link>
            </div>
          </div>
          {error && (
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
            {isLoading && (
              <>
                <div className='relative group flex-shrink-0'>
                  <div className='flex flex-col p-8 border-2 items-center rounded-lg border-[#FA86BE] text-center hover:bg-white hover:border-[#A275E3] w-full'>
                    <Skeleton>
                      <img className='w-40 h-60 rounded-md' src={null} alt={null} title={null} />
                    </Skeleton>
                    <div className='top-2/4 hidden group-hover:flex flex-col gap-2'>
                      <div className='text-2x1 font-semibold w-[130px] mt-2'>
                        <SkeletonText noOfLines={1} spacing='4' />
                      </div>
                      <div className='flex flex-row'>
                        <div className='text-sm w-[130px]'>
                          <SkeletonText noOfLines={1} spacing='4' />
                          <SkeletonText noOfLines={1} spacing='4' />
                          <SkeletonText noOfLines={1} spacing='4' />
                        </div>
                      </div>
                      <SkeletonText noOfLines={1} spacing='4' />
                    </div>
                  </div>
                </div>
                <div className='relative group flex-shrink-0'>
                  <div className='flex flex-col p-8 border-2 items-center rounded-lg border-[#FA86BE] text-center hover:bg-white hover:border-[#A275E3] w-full'>
                    <Skeleton>
                      <img className='w-40 h-60 rounded-md' src={null} alt={null} title={null} />
                    </Skeleton>
                    <div className='top-2/4 hidden group-hover:flex flex-col gap-2'>
                      <div className='text-2x1 font-semibold w-[130px] mt-2'>
                        <SkeletonText noOfLines={1} spacing='4' />
                      </div>
                      <div className='flex flex-row'>
                        <div className='text-sm w-[130px]'>
                          <SkeletonText noOfLines={1} spacing='4' />
                          <SkeletonText noOfLines={1} spacing='4' />
                          <SkeletonText noOfLines={1} spacing='4' />
                        </div>
                      </div>
                      <SkeletonText noOfLines={1} spacing='4' />
                    </div>
                  </div>
                </div>
                <div className='relative group flex-shrink-0'>
                  <div className='flex flex-col p-8 border-2 items-center rounded-lg border-[#FA86BE] text-center hover:bg-white hover:border-[#A275E3] w-full'>
                    <Skeleton>
                      <img className='w-40 h-60 rounded-md' src={null} alt={null} title={null} />
                    </Skeleton>
                    <div className='top-2/4 hidden group-hover:flex flex-col gap-2'>
                      <div className='text-2x1 font-semibold w-[130px] mt-2'>
                        <SkeletonText noOfLines={1} spacing='4' />
                      </div>
                      <div className='flex flex-row'>
                        <div className='text-sm w-[130px]'>
                          <SkeletonText noOfLines={1} spacing='4' />
                          <SkeletonText noOfLines={1} spacing='4' />
                          <SkeletonText noOfLines={1} spacing='4' />
                        </div>
                      </div>
                      <SkeletonText noOfLines={1} spacing='4' />
                    </div>
                  </div>
                </div>
                <div className='relative group flex-shrink-0'>
                  <div className='flex flex-col p-8 border-2 items-center rounded-lg border-[#FA86BE] text-center hover:bg-white hover:border-[#A275E3] w-full'>
                    <Skeleton>
                      <img className='w-40 h-60 rounded-md' src={null} alt={null} title={null} />
                    </Skeleton>
                    <div className='top-2/4 hidden group-hover:flex flex-col gap-2'>
                      <div className='text-2x1 font-semibold w-[130px] mt-2'>
                        <SkeletonText noOfLines={1} spacing='4' />
                      </div>
                      <div className='flex flex-row'>
                        <div className='text-sm w-[130px]'>
                          <SkeletonText noOfLines={1} spacing='4' />
                          <SkeletonText noOfLines={1} spacing='4' />
                          <SkeletonText noOfLines={1} spacing='4' />
                        </div>
                      </div>
                      <SkeletonText noOfLines={1} spacing='4' />
                    </div>
                  </div>
                </div>
                <div className='relative group flex-shrink-0'>
                  <div className='flex flex-col p-8 border-2 items-center rounded-lg border-[#FA86BE] text-center hover:bg-white hover:border-[#A275E3] w-full'>
                    <Skeleton>
                      <img className='w-40 h-60 rounded-md' src={null} alt={null} title={null} />
                    </Skeleton>
                    <div className='top-2/4 hidden group-hover:flex flex-col gap-2'>
                      <div className='text-2x1 font-semibold w-[130px] mt-2'>
                        <SkeletonText noOfLines={1} spacing='4' />
                      </div>
                      <div className='flex flex-row'>
                        <div className='text-sm w-[130px]'>
                          <SkeletonText noOfLines={1} spacing='4' />
                          <SkeletonText noOfLines={1} spacing='4' />
                          <SkeletonText noOfLines={1} spacing='4' />
                        </div>
                      </div>
                      <SkeletonText noOfLines={1} spacing='4' />
                    </div>
                  </div>
                </div>
              </>
            )}
            {data?.map(movie => (
              <div className='relative group flex-shrink-0' key={movie.id}>
                <div className='flex flex-col p-8 border-2 items-center rounded-lg border-[#FA86BE] text-center hover:bg-white hover:border-[#A275E3] w-full'>
                  <div>
                    <img
                      className='w-40 h-60 rounded-md'
                      src={movie.picture}
                      alt={movie.title}
                      title={movie.title}
                    />
                  </div>
                  <div className='top-2/4 hidden group-hover:flex flex-col gap-2'>
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
                      className='bg-[#A275E3] hover:bg-[#FA86BE] py-2 px-4 text-medium text-white rounded-md font-medium w-[130px]'>
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
