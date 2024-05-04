import Logo from "../../assets/website/logo.png";

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
  return (
    <>
      <nav className="w-full shadow-md">
        <div className="container ">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold duration-200 cursor-pointer text-primary animate-pulse hover:scale-105">
              FiGaMaSc
            </div>
            <div>
              <img
                src={Logo}
                alt="Mahinda College Scout Logo"
                className="m-2 w- sm:w-24"
              />
            </div>
            <div>
              <ul className="flex gap-8">
                {Navlinks.map(({ id, name, link }) => (
                  <li
                    key={id}
                    className="inline-block px-3 py-2 text-lg font-semibold duration-200 cursor-pointer hover:text-primary"
                  >
                    <a href={link}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
