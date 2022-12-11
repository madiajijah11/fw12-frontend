import { Link } from "react-router-dom";
import Logo from "../assets/images/mexl_cinema-1-edit.png";

const Navbar = () => {
  return (
    <>
      <nav className="relative bg-white">
        <div className="lg:px-32 md:px-16 sm:px-8">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <div className="hidden sm:flex justify-start pl-3">
              <Link to="/">
                <span className="sr-only">MexL Cinema</span>
                <img
                  className="h-12 w-auto"
                  src={Logo}
                  alt="MexL Cinema"
                  title="MexL Cinema"
                />
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
              {/* Button */}
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
