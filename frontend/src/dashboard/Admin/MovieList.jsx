//  /* eslint-disable no-undef */
import { useState } from "react";
import Table from "../../components/Table";
// import { Movie } from "../../data/MovieData";
import SideBar from "../SideBar";
import { useEffect } from "react";

export default function MovieList() {

  const [movie,setMovie] = useState([])

  useEffect(() =>{
    fetch("http://localhost:8080/api/movie")
    .then((response) => response.json())
    .then((data) => setMovie(data));
  },[])

  if (localStorage.getItem("user") === null) {
    window.location.href = "/login";
  } else {
    return (
      <SideBar>
        <div className="flex flex-col gap-2">
          <div className="flex-btn gap-2">
            <h2 className="text-xl font-bold">Movie List</h2>
            {/* <button className="bg-main font-medium transitions hover:bg-subMain border-subMain text-white py-3 px-6 rounded">
            Delete All
          </button> */}
          </div>

          <Table data={movie} />
        </div>
      </SideBar>
    );
  }
}
