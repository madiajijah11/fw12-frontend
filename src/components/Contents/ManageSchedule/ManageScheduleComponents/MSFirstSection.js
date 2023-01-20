import SampleImage from '../../../../assets/images/Rectangle-119.png';

const Premier = [
  {
    id: 1,
    name: 'ebv.id',
    logo: require('../../../../assets/images/Vector.png')
  },
  {
    id: 2,
    name: 'hiflix',
    logo: require('../../../../assets/images/Vector-1.png')
  },
  {
    id: 3,
    name: 'cineone21',
    logo: require('../../../../assets/images/Vector-2.png')
  }
];

const MSFirstSection = () => {
  return (
    <>
      <div className="px-32 py-16 bg-gray-100 rounded-t-lg">
        <div className="text-2xl font-semibold mb-5">Form Movie</div>
        <div className="flex flex-col bg-[#9AEBED] px-20 py-16 rounded-lg">
          <div className="flex  w-full h-full gap-8 ">
            <div className="flex flex-col p-8 border-2 items-center rounded-lg border-[#FA86BE] text-center hover:bg-white h-full flex-shrink-0">
              <img className="w-40 h-60 rounded-md" src={SampleImage} alt="Img" title="Img" />
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <label className="font-normal text-base" htmlFor="movie">
                  Movie
                </label>
                <select
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  type="text"
                  name="movie"
                  id="movie"
                >
                  <option>Select Movie</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-normal text-base" htmlFor="price">
                  Price
                </label>
                <input
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  type="text"
                  name="price"
                  id="price"
                  placeholder="10"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-normal text-base" htmlFor="premier">
                  Premier
                </label>
                <div>
                  <div className="grid grid-flow-col gap-2">
                    {Premier.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-center rounded-md hover:shadow-lg shadow-black w-full h-full p-1 bg-white"
                      >
                        <img src={item.logo} alt={item.name} title={item.name} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <label className="font-normal text-base" htmlFor="location">
                  Location
                </label>
                <select
                  className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                  type="text"
                  name="location"
                  id="location"
                >
                  <option>Select Location</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <label className="font-normal text-base" htmlFor="startDate">
                    Date Start
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                    type="date"
                    name="startDate"
                    id="startDate"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-normal text-base" htmlFor="endDate">
                    Date End
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                    type="date"
                    name="endDate"
                    id="endDate"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-normal text-base" htmlFor="time">
                  Time
                </label>
                <div className="grid grid-cols-4 gap-2">
                  <input
                    className="w-full px-4 py-2 border border-[#FA86BE] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A275E3] focus:border-transparent"
                    type="text"
                    placeholder="+"
                  />
                  <div className="font-normal text-sm bg-white w-full h-10 flex justify-center items-center rounded-md">
                    08:30am
                  </div>
                  <div className="font-normal text-sm bg-white w-full h-10 flex justify-center items-center rounded-md">
                    10:30pm
                  </div>
                  <div className="font-normal text-sm bg-white w-full h-10 flex justify-center items-center rounded-md">
                    12:00pm
                  </div>
                  <div className="font-normal text-sm bg-white w-full h-10 flex justify-center items-center rounded-md">
                    04:30pm
                  </div>
                  <div className="font-normal text-sm bg-white w-full h-10 flex justify-center items-center rounded-md">
                    07:00pm
                  </div>
                  <div className="font-normal text-sm bg-white w-full h-10 flex justify-center items-center rounded-md">
                    08:30pm
                  </div>
                  <div className="font-normal text-sm bg-white w-full h-10 flex justify-center items-center rounded-md">
                    08:30pm
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-5 mt-10">
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

export default MSFirstSection;
