import { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

import Logo from "../../assets/website/logo.png";
import DarkMode from "./DarkMode";

export const Navlinks = [
  {
    id: 1,
    name: "SERVICES",
    link: "/#services",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 3,
    name: "JOIN",
    link: "/#join",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="relative z-10 w-full duration-300 shadow-md dark:bg-black dark:text-white ">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="items-center hidden gap-3 font-semibold text-gray-500 sm:flex dark:text-gray-400 group">
            <div className="text-2xl duration-200 text-primary animate-pulse group-hover:scale-105">
              FiGaMaSc
            </div>
          </div>
          <div>
            <img
              src={Logo}
              alt=""
              className="absolute top-0 left-0 w-16 m-2 sm:w-24 sm:left-1/2 sm:-translate-x-1/2 sm:m-0 "
            />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="inline-block text-lg font-semibold duration-300 hover:text-primary "
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* DarkMode feature implement */}
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 py-4 md:hidden">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="transition-all cursor-pointer "
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="transition-all cursor-pointer"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      {/* <ResponsiveMenu showMenu={showMenu} /> */}
    </div>
  );
};

export default Navbar;
