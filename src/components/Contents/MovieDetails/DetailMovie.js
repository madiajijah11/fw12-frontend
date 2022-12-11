import { useLocation } from "react-router-dom";
import FirstMovieDetailsSection from "./MovieDetailsComponents/FirstMDSection";
import SecondMovieDetailSection from "./MovieDetailsComponents/SecondMDSection";

const DetailMovie = () => {
  const { state } = useLocation();
  return (
    <>
      <div className="px-32 py-16">
        <FirstMovieDetailsSection movie={state} />
        <SecondMovieDetailSection />
      </div>
    </>
  );
};

export default DetailMovie;
