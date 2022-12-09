import MovieList from "../components/Contents/ListMovie/MovieList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ListMoviesPage = () => {
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

export default ListMoviesPage;
