import Logo from "../assets/images/mexl_cinema-1-edit-removebg.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react";

const sponsor = [
  {
    id: 1,
    name: "ebv.id",
    logo: require("../assets/images/Vector.png"),
  },
  {
    id: 2,
    name: "CineOne21",
    logo: require("../assets/images/Vector-1.png"),
  },
  {
    id: 3,
    name: "hiflix",
    logo: require("../assets/images/Vector-2.png"),
  },
];

const Footer = () => {
  return (
    <>
      <footer className="px-32">
        <div className="flex flex-row gap-8">
          <div className="w-1/3">
            <figure>
              <img
                className="w-auto h-auto"
                src={Logo}
                alt="Logo"
                title="MexL Cinema"
              />
            </figure>
            <div className="text-medium">
              Still waiting in line for tickets? <br />
              MexL Cinema is here to help you!
            </div>
          </div>
          <div className="grid grid-cols-3 w-full">
            <div>
              {/* Explore */}
              <div className="font-bold">Explore</div>
              <div className="text-medium">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Movie List</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              {/* Our sponsor */}
              <div className="font-bold">Our sponsor</div>
              <div className="text-medium">
                {sponsor.map((item) => (
                  <ul key={item.id}>
                    <li>
                      <Link to="#">
                        <img
                          src={item.logo}
                          alt={item.name}
                          title={item.name}
                        />
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div>
              {/* Follow us */}
              <div className="font-bold">Follow us</div>
              <div className="text-medium">
                <ul>
                  <li>
                    <Link to="#">
                      <Icon icon="ph:instagram-logo" /> Instagram
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <Icon icon="ri:facebook-box-fill" /> Facebook
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <Icon icon="ant-design:twitter-square-filled" /> Twitter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Copyright */}
          <div className="text-center py-4">
            <p className="text-md">
              © 2021 - {new Date().getFullYear()} MexL Cinema. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
