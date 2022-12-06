import FirstHomeSection from "./HomeComponents/FirstHomeSection";
import SecondHomeSection from "./HomeComponents/SecondHomeSection";
import ThirdHomeSection from "./HomeComponents/ThirdHomeSection";

const Home = () => {
  return (
    <>
      <div className="px-32 py-16">
        <FirstHomeSection />
        <SecondHomeSection />
        <ThirdHomeSection />
      </div>
    </>
  );
};

export default Home;
