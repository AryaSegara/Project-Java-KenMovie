/* eslint-disable react/prop-types */
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import Layout from "../layout/Layout";
import { NavLink } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function SideBar({ children }) {
  const navigate = useNavigate();
  const redirectUrl = "/login";

  const SiderLinks = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: BsFillGridFill,
    },
    {
      name: "Movies List",
      link: "/movielist",
      icon: FaListAlt,
    },
    {
      name: "Add Movie",
      link: "/addmovie",
      icon: RiMovie2Fill,
    },
    // {
    //   name: "Categories",
    //   link: "/categories",
    //   icon: HiViewGridAdd,
    // },
  ];

  const active = "bg-subMain text-white";
  const hover = "text-white hover:bg-subMain";
  const inActive =
    "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${active} ${inActive}` : ` ${inActive} ${hover}`;
  };
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2">
        <div className="xl:grid grid-cols-8 gap-8 items-start md:py-12 py-6">
          <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:md-0 mb-5">
            {SiderLinks.map((link, index) => (
              <NavLink to={link.link} key={index} className={getNavLinkClass}>
                <link.icon />
                <span>{link.name}</span>
              </NavLink>
            ))}
            <button
              onClick={() => {
                localStorage.removeItem("user");
                navigate(redirectUrl);
              }}
              className="flex gap-2 bg-main font-medium transitions hover:bg-subMain border-subMain text-white py-3 px-4 rounded"
            >
              <CgLogOut size={25} /> Logout
            </button>
          </div>

          <div className="col-span-6 rounded-md bg-dry border border-gray-800 p-6">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}
