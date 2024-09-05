//  /* eslint-disable no-undef */
import { useState } from "react";
import Table from "../../components/Table";
import SideBar from "../SideBar";
import { useEffect } from "react";

export default function MovieList() {

  const [movie,setMovie] = useState([])

  useEffect(() =>{
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/movie`)
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
          </div>

          <Table data={movie} />
        </div>
      </SideBar>
    );
  }
}
