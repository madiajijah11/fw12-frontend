import Banner from "../../../../assets/images/homepage.png";

const FirstHomeSection = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/2 text-center">
          <div className="text-5xl font-semibold leading-relaxed text-sky-300">
            Find your favorite movie
          </div>
          <div className="text-2xl font-extralight">
            Watch your favorite movie with your family and friends
          </div>
        </div>
        <div className="w-1/2">
          <img src={Banner} alt="banner" title="Banner" />
        </div>
      </div>
    </>
  );
};

export default FirstHomeSection;