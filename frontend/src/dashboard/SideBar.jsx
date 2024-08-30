/* eslint-disable react/prop-types */
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt, FaUsers } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { RiMovie2Fill } from "react-icons/ri";
import Layout from "../layout/Layout";
import { NavLink } from "react-router-dom";

export default function SideBar({children}) {
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
    {
      name: "Categories",
      link: "/categories",
      icon: HiViewGridAdd,
    },
    {
      name: "Users",
      link: "/users",
      icon: FaUsers,
    },
  ];

  const active = "bg-dryGray text-subMain ";
  const hover = "hover:text-white hover:bg-main";
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
          </div>
          <div className="col-span-6 rounded-md bg-dry border border-gray-800 p-6">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}
