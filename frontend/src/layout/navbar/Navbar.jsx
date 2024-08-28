import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaHeart } from "react-icons/fa";
import { CgUser } from "react-icons/cg";


export default function Navbar() {

  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({isActive}) => (isActive ? 'text-subMain' : hover);
  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 lg:grid gap-6 grid-cols-7 justify-between items-center">
          <div className="col-1-span-1 lg:block hidden">
            <Link to="/">
              <p className="w-full H-10 object-contain text-subMain">
                K E N M O V I E
              </p>
            </Link>
          </div>

          {/* Search */}
          <div className="col-span-3">
            <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
              <button
                type="submit"
                className="bg-subMain w-10 flex-colo h-10 rounded text-white"
              >
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search Movie"
                className="font-medium placeholder:text-border tex-sm w-11/12 h-10 bg-transparent border-none px-2 text-black"
              />
            </form>
          </div>

          {/* menus */}
          <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-between items-center">
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
            <NavLink to="/favorite" className={`${Hover} relative`}>
              <FaHeart className="w-6 h-6" />
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                2
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
