import { Link } from "react-router-dom";
import Logo from "../assets/images/mexl_cinema-1-edit.png";

const Navbar = () => {
  return (
    <>
      <nav className="relative bg-white">
        <div className="px-32">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <div className="flex justify-start pl-3">
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
              <Link to="#" className="text-base font-medium">
                Movie List
              </Link>
            </nav>
            <div className="items-center justify-end md:flex md:flex-1 lg:w-0 pr-3">
              {/* Button */}
              <Link
                to="/signin"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700"
              >
                Sign in
              </Link>
              <Link
                to="#"
                className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700"
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
