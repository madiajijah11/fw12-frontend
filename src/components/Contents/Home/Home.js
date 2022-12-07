import FirstHomeSection from "./HomeComponents/FirstHomeSection";
import SecondHomeSection from "./HomeComponents/SecondHomeSection";
import ThirdHomeSection from "./HomeComponents/ThirdHomeSection";

const Home = () => {
  return (
    <>
      <div className="lg:px-32 py-16 md:px-16 sm:px-8 px-0">
        <FirstHomeSection />
        <SecondHomeSection />
        <ThirdHomeSection />
      </div>
    </>
  );
};

export default Home;
