import { Link } from "react-router-dom";

const MovieUpComing = [
  {
    id: 1,
    title: "Black Widow",
    picture: require("../../../../assets/images/Rectangle-139.png"),
    genre: "Action, Adventure, Sci-Fi",
  },
  {
    id: 2,
    title: "The Witches",
    picture: require("../../../../assets/images/Rectangle-139-1.png"),
    genre: "Adventure, Comedy, Family",
  },
  {
    id: 3,
    title: "Tenet",
    picture: require("../../../../assets/images/Rectangle-139-2.png"),
    genre: "Action, Sci-Fi, Thriller",
  },
  {
    id: 4,
    title: "Black Widow",
    picture: require("../../../../assets/images/Rectangle-139.png"),
    genre: "Action, Adventure, Sci-Fi",
  },
  {
    id: 5,
    title: "The Witches",
    picture: require("../../../../assets/images/Rectangle-139-1.png"),
    genre: "Adventure, Comedy, Family",
  },
];

const ThirdHomeSection = () => {
  return (
    <>
      <div className="px-20 pt-20">
        {/* Movie Up Coming */}
        <div className="container mx-auto">
          <div className="flex flex-row justify-between items-center">
            <div className="text-2xl font-semibold">Movie Up Coming</div>
            <div className="text-medium font-semibold">
              <Link to="#">View All</Link>
            </div>
          </div>
          <div className="flex gap-8 mt-8 px-8">
            {MovieUpComing.map((item) => (
              <div className="relative">
                <div className="flex flex-col p-8 border-2 items-center rounded-lg border-sky-400 text-center hover:bg-white w-full h-full">
                  <img src={item.picture} alt={item.title} title={item.title} />
                  <div className="flex flex-col gap-2 h-full justify-end">
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

export default ThirdHomeSection;
