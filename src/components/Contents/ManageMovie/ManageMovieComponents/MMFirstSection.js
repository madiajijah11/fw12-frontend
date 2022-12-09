import SampleImage from "../../../../assets/images/Rectangle-119.png";

const MMFirstSection = () => {
  return (
    <>
      <div className="px-32 py-16 bg-gray-100 rounded-t-lg">
        <div className="flex flex-col ">
          <div className="text-2xl font-semibold">Form Movie</div>
          <div className="flex px-20 pt-16 pb-10 w-full h-full gap-8">
            <div className="flex flex-col p-8 border-2 items-center rounded-lg border-[#FA86BE] text-center hover:bg-white h-full flex-shrink-0">
              <img
                className="w-40 h-60 rounded-md"
                src={SampleImage}
                alt="Img"
                title="Img"
              />
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <label className="font-normal text-base" htmlFor="title">
                  Title
                </label>
                <input
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  type="text"
                  name="title"
                  id="title"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-normal text-base" htmlFor="genre">
                  Director
                </label>
                <input
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  type="text"
                  name="genre"
                  id="genre"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-normal text-base" htmlFor="releaseDate">
                  Release Date
                </label>
                <input
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  type="date"
                  name="releaseDate"
                  id="releaseDate"
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <label className="font-normal text-base" htmlFor="category">
                  Category
                </label>
                <input
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  type="text"
                  name="category"
                  id="category"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-normal text-base" htmlFor="casts">
                  Casts
                </label>
                <input
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  type="text"
                  name="casts"
                  id="casts"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <label className="font-normal text-base" htmlFor="duration">
                    Duration Hour
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                    type="number"
                    name="duration"
                    id="duration"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-normal text-base" htmlFor="duration">
                    Duration Minute
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                    type="number"
                    name="duration"
                    id="duration"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid px-20 gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-normal text-base" htmlFor="synopsis">
                Synopsis
              </label>
              <textarea
                className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                name="synopsis"
                id="synopsis"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="border-[#FA86BE] border px-8 py-2 rounded-md text-[#FA86BE] hover:bg-[#A275E3] hover:border-[#A275E3] hover:text-white font-bold text-base"
                type="reset"
              >
                Reset
              </button>
              <button className="bg-[#A275E3] text-white px-8 py-2 rounded-md hover:bg-transparent hover:border-[#FA86BE] hover:border hover:text-[#FA86BE] font-bold text-base">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MMFirstSection;
