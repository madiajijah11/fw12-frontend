import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../../../LoadingIndicator";

const FirstMovieDetailsSection = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/movies/" + id
      );
      if (!response.data.data) {
        setIsLoading(true);
      }
      setMovie(response.data.data);
      setIsLoading(false);
    };
    fetchMovie();
  }, [id]);

  const imgURL = process.env.REACT_APP_API_URL + "/assets/uploads/";

  const convertDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const convertTime = (time) => {
    const timeArray = time.split(":");
    const hour = timeArray[0].replace(/^0+/, "");
    const minute = timeArray[1].replace(/^0+/, "");
    return minute === "" ? `${hour} hour` : `${hour} hour ${minute} minute`;
  };

  // convert cast to array
  const castArray = movie?.cast?.split(",");
  // just show 3 cast
  const castArray3 = castArray?.slice(0, 3);

  return (
    <>
      <div className="flex flex-row mb-20">
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
            <div className="h-full">
              <div className="p-10 border w-full h-full border-[#FA86BE] rounded-lg">
                <img
                  className="w-[332px] h-[458px] rounded-lg"
                  src={imgURL + movie?.picture}
                  alt={movie?.title}
                  title={movie?.title}
                />
              </div>
            </div>
            <div className="ml-8 w-2/3 flex flex-col gap-6">
              <div className="text-4xl font-bold">{movie?.title}</div>
              <div className="text-lg font-normal">{movie?.genre}</div>
              <div className="flex flex-row gap-x-16">
                <div className="grid grid-rows-2 gap-5">
                  <div>
                    <div className="font-normal text-sm text-gray-400">
                      Release Date
                    </div>
                    <div>{convertDate(movie?.releaseDate)}</div>
                  </div>
                  <div>
                    <div className="font-normal text-sm text-gray-400">
                      Duration
                    </div>
                    <div>{convertTime(movie?.duration)}</div>
                  </div>
                </div>
                <div className="grid grid-rows-2 gap-5">
                  <div>
                    <div className="font-normal text-sm text-gray-400">
                      Director
                    </div>
                    <div>{movie?.director}</div>
                  </div>
                  <div>
                    <div className="font-normal text-sm text-gray-400">
                      Casts
                    </div>
                    {/* give ... at the end of mapping */}
                    <div className="flex flex-row gap-1">
                      {castArray3?.map((cast, index) => {
                        return index === castArray3.length - 1 ? (
                          <div key={index}>
                            {cast}
                            <span className="text-gray-400">...</span>
                          </div>
                        ) : (
                          <div key={index}>{cast},</div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <div className="font-semibold text-xl mb-2">Synopsis</div>
                <div className="text-justify font-normal text-base leading-8">
                  {movie?.synopsis}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FirstMovieDetailsSection;
