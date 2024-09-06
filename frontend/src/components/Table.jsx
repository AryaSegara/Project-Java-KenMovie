/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

const Rows = ({ m, i, fetchMovie }) => {
  const [category, setCategory] = useState([]);
  // const [movie, setMovie] = useState([]);

  // const navigate = useNavigate();
  // const redirectUrl = "/dashboard";

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/categories`)
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm(
      `Apakah Anda yakin ingin menghapus Movie Ini ?`
    );
    if (confirm) {
      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/movie/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers :{
          Authorization : "Bearer " + JSON.parse(localStorage.getItem("user"))
        }  
      })
        // .then((response) => response.json())
        .then((response) => {
          if (response.ok) {
            fetchMovie();
          }
        });
    }
  };

  // console.log(m)

  return (
    <tr key={i}>
      <td className={`${Text}`}>
        <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
          <img
            src={m.image}
            alt={m.name}
            className="w-full h-full object-cover"
          />
        </div>
      </td>
      <td className={`${Text} truncate`}>{m.name}</td>
      <td className={`${Text}`}>{m.idCategories?.name}</td>
      <td className={`${Text}`}>{m.language}</td>
      <td className={`${Text}`}>{m.year}</td>
      <td className={`${Text}`}>{m.durasi}</td>
      <td className={`${Text} float-right font-medium flex-rows gap-2`}>
        {/* <div className="flex items-center gap-3"> */}
        <Link
          to={`/editmovie/${m.id}`}
          className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2"
        >
          Edit <FiEdit className="text-green-500" />
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleDelete(m.id)}
            className="bg-subMain text-white rounded flex-colo w-6 h-6"
          >
            <MdDelete className="text-green-500" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default function Table({ data, fetchMovie }) {
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            <th scope="col" className={`${Head}`}>
              Image
            </th>
            <th scope="col" className={`${Head}`}>
              Name
            </th>
            <th scope="col" className={`${Head}`}>
              Category
            </th>
            <th scope="col" className={`${Head}`}>
              Language
            </th>
            <th scope="col" className={`${Head}`}>
              Year
            </th>
            <th scope="col" className={`${Head}`}>
              Hours
            </th>
            <th scope="col" className={`${Head} text-end`}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((m, i) => (
            <Rows key={i} m={m} i={i} fetchMovie={fetchMovie} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
