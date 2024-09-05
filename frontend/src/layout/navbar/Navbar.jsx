import { Link, NavLink } from "react-router-dom";
import { CgUser } from "react-icons/cg";

export default function Navbar() {
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 gap-6 grid-cols-7 justify-between items-center flex">
          <div className="col-1-span-1 lg:block hidden">
            <Link to="/">
              <p className="w-full H-10 object-contain text-subMain">
                K E N M O V I E
              </p>
            </Link>
          </div>

          {/* menus */}
          <div className="font-medium text-sm xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-between items-center">
            <NavLink to="/movie" className={Hover}>
              Movies
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              About
            </NavLink>
            <NavLink to="/contact" className={Hover}>
              Contact
            </NavLink>
            <NavLink to="/login" className={Hover}>
              <CgUser className="w-8 h-8" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
