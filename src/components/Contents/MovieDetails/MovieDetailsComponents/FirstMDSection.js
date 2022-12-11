const FirstMovieDetailsSection = ({ movie }) => {
  const { title, picture, genre, releaseDate, duration, director, cast, synopsis } =
    movie;
  const imgURL = process.env.REACT_APP_API_URL + "/assets/uploads/";

  const time = duration.split(":");
  //remove 0 in front of hour and minute
  const hour = time[0].replace(/^0+/, "");
  const minute = time[1].replace(/^0+/, "");

  const date = new Date(releaseDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <div className="flex flex-row mb-20">
        <div className="h-full">
          <div className="p-10 border w-full h-full border-[#FA86BE] rounded-lg">
            <img
              className="w-[332px] h-[458px] rounded-lg"
              src={imgURL + picture}
              alt={title}
              title={title}
            />
          </div>
        </div>
        <div className="ml-8 w-2/3 flex flex-col gap-6">
          <div className="text-4xl font-bold">{title}</div>
          <div className="text-lg font-normal">{genre}</div>
          <div className="flex flex-row gap-x-16">
            <div className="grid grid-rows-2 gap-5">
              <div>
                <div className="font-normal text-sm text-gray-400">
                  Release Date
                </div>
                <div>{date}</div>
              </div>
              <div>
                <div className="font-normal text-sm text-gray-400">
                  Duration
                </div>
                <div>
                  {minute === ""
                    ? `${hour} hour`
                    : `${hour} hour ${minute} minute`}
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-5">
              <div>
                <div className="font-normal text-sm text-gray-400">
                  Director
                </div>
                <div>{director}</div>
              </div>
              <div>
                <div className="font-normal text-sm text-gray-400">Casts</div>
                <div>{cast}</div>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className="font-semibold text-xl mb-2">Synopsis</div>
            <div className="text-justify font-normal text-base leading-8">
              {synopsis}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstMovieDetailsSection;
