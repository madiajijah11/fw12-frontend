import Logo from '../assets/images/mexl_cinema-1-edit.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../redux/reducers/authReducer';
import { getProfile } from '../redux/actions/profileAction';
import { useEffect } from 'react';

const Navbar = () => {
  const dispatch = useDispatch();
  const imgURL = process.env.REACT_APP_API_URL + '/assets/uploads/';
  const token = useSelector((state) => state?.auth?.token);
  const { userInfo } = useSelector((state) => state?.profile);

  useEffect(() => {
    if (token !== null) {
      dispatch(getProfile());
    }
  }, [dispatch, token]);

  return (
    <>
      <nav className="relative bg-white">
        <div className="lg:px-32 md:px-16 sm:px-8">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <div className="hidden sm:flex justify-start pl-3">
              <Link to="/">
                <span className="sr-only">MexL Cinema</span>
                <img className="h-12 w-auto" src={Logo} alt="MexL Cinema" title="MexL Cinema" />
              </Link>
            </div>
            {/* Menu */}
            <nav className="space-x-10 md:flex pl-6">
              <Link to="/" className="text-base font-medium">
                Homepage
              </Link>
              <Link to="/list-movie" className="text-base font-medium">
                Movie List
              </Link>
              <Link to="/admin/dashboard" className="text-base font-medium">
                Dashboard
              </Link>
              <Link to="/admin/manage-movie" className="text-base font-medium">
                Manage Movie
              </Link>
              <Link to="/admin/manage-schedule" className="text-base font-medium">
                Manage Schedule
              </Link>
            </nav>
            <div className="items-center justify-end md:flex md:flex-1 lg:w-0 pr-3">
              {token ? (
                <>
                  <div className="text-xs rounded-md border border-[#FA86BE] p-2 mr-2">
                    {userInfo?.firstName} {userInfo?.lastName}
                  </div>
                  <img
                    className="rounded-full w-12 h-12 mr-2"
                    src={userInfo?.picture ? userInfo?.picture : imgURL + 'user.jpg'}
                    alt="profile"
                    title="profile"
                  />
                  <Link
                    to="/profile"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#FA86BE] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#A275E3] mr-2"
                  >
                    Profile
                  </Link>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#FA86BE] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#A275E3]"
                    type="button"
                    onClick={() => dispatch(logout())}
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#FA86BE] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#A275E3]"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#FA86BE] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#A275E3]"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
