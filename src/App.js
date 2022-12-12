import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ListMoviesPage from "./pages/ListMoviePage";
import NotFoundPage from "./pages/404";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import OrderPage from "./pages/OrderPage";
import PaymentPage from "./pages/PaymentPage";
import ProfilePage from "./pages/ProfilePage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import TicketPage from "./pages/TicketPage";
import ManageMoviePage from "./pages/ManageMoviePage";
import DashboardPage from "./pages/DashboardPage";
import ManageSchedulePage from "./pages/ManageSchedulePage";

import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/list-movie" element={<ListMoviesPage />} />
      <Route path="/movie-details/:id" element={<MovieDetailsPage />} />
      <Route path="/order-page" element={<OrderPage />} />
      <Route path="/payment-page" element={<PaymentPage />} />
      <Route
        path="/profile"
        element={
          <PrivateRoutes>
            <ProfilePage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/order-history"
        element={
          <PrivateRoutes>
            <OrderHistoryPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/ticket"
        element={
          <PrivateRoutes>
            <TicketPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/manage-movie"
        element={
          <PrivateRoutes>
            <ManageMoviePage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoutes>
            <DashboardPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/manage-schedule"
        element={
          <PrivateRoutes>
            <ManageSchedulePage />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}

export default App;
