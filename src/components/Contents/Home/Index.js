import FirstHomeSection from "./HomeComponents/FirstHomeSection";
import SecondHomeSection from "./HomeComponents/SecondHomeSection";

const Home = () => {
  return (
    <>
      <div className="px-32 py-16">
        <FirstHomeSection />
        <SecondHomeSection />
      </div>
    </>
  );
};

export default Home;
