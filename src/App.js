import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ListMovies from "./pages/ListMovie";
import NotFoundPage from "./pages/404";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/list-movie" element={<ListMovies />} />
      <Route path="/movie-details/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
