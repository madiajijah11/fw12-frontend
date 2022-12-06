import { Link } from "react-router-dom";

const NowShowingMovies = [
  {
    id: 1,
    title: "Spider-Man: Homecoming",
    picture: require("../../../../assets/images/Rectangle-119.png"),
    genre: "Action, Adventure, Sci-Fi",
  },
  {
    id: 2,
    title: "Lion King",
    picture: require("../../../../assets/images/Rectangle-119-1.png"),
    genre: "Animation, Adventure, Drama",
  },
  {
    id: 3,
    title: "John Wick: Chapter 3 - Parabellum",
    picture: require("../../../../assets/images/Rectangle-119-2.png"),
    genre: "Action, Crime, Thriller",
  },
  {
    id: 4,
    title: "Spider-Man: Homecoming",
    picture: require("../../../../assets/images/Rectangle-119.png"),
    genre: "Action, Adventure, Sci-Fi",
  },
  {
    id: 5,
    title: "Lion King",
    picture: require("../../../../assets/images/Rectangle-119-1.png"),
    genre: "Animation, Adventure, Drama",
  },
];

const SecondHomeSection = () => {
  return (
    <>
      <div className="bg-gray-100 h-[550px] px-20 py-20">
        {/* Movie now showing */}
        <div className="container mx-auto">
          <div className="flex flex-row justify-between items-center">
            <div className="text-2xl font-semibold">Now Showing</div>
            <div className="text-medium font-semibold">
              <Link to="#">View All</Link>
            </div>
          </div>
          <div className="flex gap-8 mt-8 px-8 overflow-x-auto">
            {NowShowingMovies.map((item) => (
              <div className="relative group" key={item.id}>
                <div className="flex flex-col p-8 border-2 items-center rounded-lg border-sky-400 text-center hover:bg-white">
                  <img src={item.picture} alt={item.title} title={item.title} />
                  <div className="top-2/4 hidden group-hover:flex flex-col gap-2">
                    <div className="text-2x1 font-semibold w-[130px] mt-2">
                      {item.title}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-sm w-[130px]">{item.genre}</div>
                    </div>
                    <button className="bg-sky-600 hover:bg-sky-700 py-2 px-4 text-medium text-white rounded-md font-medium w-[130px]">
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

export default SecondHomeSection;
