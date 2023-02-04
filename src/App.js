import { Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import LoggedInRoute from './components/LoggedInRoute';
import PageLoadingIndicator from './components/PageLoadingIndicator';
import NotFoundPage from './pages/404';
import NotLoggedInRoute from './components/NotLoggedInRoute';
import OrderSuccess from './pages/OrderSuccess';

const Homepage = lazy(() => import('./pages/Homepage'));
const Signin = lazy(() => import('./pages/Signin'));
const Signup = lazy(() => import('./pages/Signup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const ListMoviesPage = lazy(() => import('./pages/ListMoviePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const OrderHistoryPage = lazy(() => import('./pages/OrderHistoryPage'));
const TicketPage = lazy(() => import('./pages/TicketPage'));
const ManageMoviePage = lazy(() => import('./pages/ManageMoviePage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ManageSchedulePage = lazy(() => import('./pages/ManageSchedulePage'));

function App () {
  return (
    <Routes>
      <Route path='/order-success' element={<OrderSuccess />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route
        index
        path='/'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <Homepage />
          </Suspense>
        }
      />
      <Route
        path='/signin'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <NotLoggedInRoute>
              <Signin />
            </NotLoggedInRoute>
          </Suspense>
        }
      />
      <Route
        path='/signup'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <NotLoggedInRoute>
              <Signup />
            </NotLoggedInRoute>
          </Suspense>
        }
      />
      <Route
        path='/forgot-password'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <NotLoggedInRoute>
              <ForgotPassword />
            </NotLoggedInRoute>
          </Suspense>
        }
      />
      <Route
        path='/reset-password'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <NotLoggedInRoute>
              <ResetPassword />
            </NotLoggedInRoute>
          </Suspense>
        }
      />
      <Route
        path='/list-movie'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <ListMoviesPage />
          </Suspense>
        }
      />
      <Route
        path='/movie-details/:id'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <MovieDetailsPage />
          </Suspense>
        }
      />
      <Route
        path='/order-page'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <LoggedInRoute>
              <OrderPage />
            </LoggedInRoute>
          </Suspense>
        }
      />
      <Route
        path='/payment-page'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <LoggedInRoute>
              <PaymentPage />
            </LoggedInRoute>
          </Suspense>
        }
      />
      <Route
        path='/profile'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <LoggedInRoute>
              <ProfilePage />
            </LoggedInRoute>
          </Suspense>
        }
      />
      <Route
        path='/order-history'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <LoggedInRoute>
              <OrderHistoryPage />
            </LoggedInRoute>
          </Suspense>
        }
      />
      <Route
        path='/ticket'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <LoggedInRoute>
              <TicketPage />
            </LoggedInRoute>
          </Suspense>
        }
      />
      <Route
        path='/admin/manage-movie'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <LoggedInRoute>
              <ManageMoviePage />
            </LoggedInRoute>
          </Suspense>
        }
      />
      <Route
        path='/admin/dashboard'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <LoggedInRoute>
              <DashboardPage />
            </LoggedInRoute>
          </Suspense>
        }
      />
      <Route
        path='/admin/manage-schedule'
        element={
          <Suspense fallback={<PageLoadingIndicator />}>
            <LoggedInRoute>
              <ManageSchedulePage />
            </LoggedInRoute>
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
