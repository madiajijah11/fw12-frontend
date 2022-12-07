import MovieList from "../components/Contents/MovieList/MovieList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ListMovies = () => {
  return (
    <>
      <div>
        <Navbar />
        <MovieList />
        <Footer />
      </div>
    </>
  );
};

export default ListMovies;
