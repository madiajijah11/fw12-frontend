import Banner from "../../../../assets/images/homepage.png";

const FirstHomeSection = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row mb-10 md:mb-0 justify-between items-center">
        <div className="w-1/2 text-center">
          <div className="text-3xl md:text-5xl font-semibold leading-relaxed text-[#FB2576]">
            Find your favorite movie
          </div>
          <div className="text-2xl font-extralight">
            Watch your favorite movie with your family and friends
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src={Banner} alt="Banner" title="Banner" />
        </div>
      </div>
    </>
  );
};

export default FirstHomeSection;
