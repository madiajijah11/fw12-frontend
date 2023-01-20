import FirstMovieDetailsSection from './MovieDetailsComponents/FirstMDSection';
import SecondMovieDetailSection from './MovieDetailsComponents/SecondMDSection';
import { useEffect } from 'react';

const DetailMovie = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="px-32 py-16">
        <FirstMovieDetailsSection />
        <SecondMovieDetailSection />
      </div>
    </>
  );
};

export default DetailMovie;
