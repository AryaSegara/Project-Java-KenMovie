import { FaRegListAlt } from "react-icons/fa";
import SideBar from "../SideBar";
import { HiViewGridAdd } from "react-icons/hi";
import Table from "../../components/Table";
// import { Movie } from "../../data/MovieData";
import { useState } from "react";
import { useEffect } from "react";

export default function Dashboard() {
    const [movie,setMovie] = useState([])

    useEffect(() =>{
      fetch("http://localhost:8080/api/movie")
      .then((response) => response.json())
      .then((data) => setMovie(data));
    },[])
  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      title: "Total Movie",
      total: 90,
    },
    {
      bg: "bg-blue-600",
      icon: HiViewGridAdd,
      title: "Total Categories",
      total: 8,
    },
  ];

  if (localStorage.getItem("user") === null) {
    window.location.href = "/login";
  } else {
    return (
      <SideBar>
        <h2 className="text-xl font-bold">Dashboard</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {DashboardData.map((d, index) => (
            <div
              key={index}
              className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2"
            >
              <div
                className={`col-span-1 rounded-full w-12 h-12 flex-colo ${d.bg}`}
              >
                <d.icon />
              </div>
              <div className="col-span-3">
                <h2>{d.title}</h2>
                <p className="mt-2 font-bold">{d.total}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="tex-md font-medium italic my-6 text-border">
          Recent Movie
        </h3>
        <Table data={movie} />
      </SideBar>
    );
  }
}
