import { ImUpload } from "react-icons/im";
import SideBar from "../SideBar";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {
  const [seletedCategory, setSelectedCategory] = useState([]);

  const [newMovie, setNewMovie] = useState({
    name: "",
    image: "",
    durasi: "",
    year: "",
    language: "",
    description: "",
    rate: 0,
    idKategori: "",
  });

  const navigate = useNavigate();
  const redirectUrl = "/dashboard";

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/categories`)
      .then((response) => response.json())
      .then((data) => setSelectedCategory(data));
  }, []);

  if (localStorage.getItem("user") === null) {
    window.location.href = "/login";
  } else {
    return (
      <SideBar>
        <div className="flex flex-col gap-6 ">
          <h2 className="text-xl font-bold">Create Movie</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(newMovie);
              // return;
              fetch(
                `${import.meta.env.VITE_API_BASE_URL}/api/movie?idKategori=` +
                  newMovie.idKategori,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(newMovie),
                }
              )
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                  if (data.id) {
                    alert("Movie created successfully");
                    navigate(redirectUrl);
                  } else {
                    alert("Failed to create movie");
                  }
                });
            }}
            className="w-full flex-col gap-6 space-y-6"
          >
            <div className="w-full grid md:grid-cols-2 gap-6">
              <div className="w-full text-sm">
                <label className="text-border font-semibold">Movie Name</label>
                <input
                  required
                  id="name"
                  name="name"
                  value={newMovie.name}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, name: e.target.value })
                  }
                  type="text"
                  placeholder="Spiderman No Way Home"
                  className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
                />
              </div>
              <div className="w-full text-sm">
                <label className="text-border font-semibold">Hours</label>
                <input
                  id="durasi"
                  name="durasi"
                  value={newMovie.durasi}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, durasi: e.target.value })
                  }
                  required
                  type="text"
                  placeholder="2h 60m"
                  className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
                />
              </div>
            </div>

            <div className="w-full grid md:grid-cols-2 gap-6">
              <div className="w-full text-sm">
                <label className="text-border font-semibold">Language</label>
                <input
                  id="language"
                  name="language"
                  value={newMovie.language}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, language: e.target.value })
                  }
                  required
                  type="text"
                  placeholder="English"
                  className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
                />
              </div>
              <div className="w-full text-sm">
                <label className="text-border font-semibold">Year</label>
                <input
                  id="year"
                  name="year"
                  value={newMovie.year}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, year: e.target.value })
                  }
                  required
                  type="text"
                  placeholder="2024"
                  className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
                />
              </div>
            </div>

            <div className="w-full grid md:grid-cols-2 gap-6">
              <div className="w-full text-sm">
                <label className="text-border font-semibold">Image</label>
                <input
                  id="image"
                  name="image"
                  value={newMovie.image}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, image: e.target.value })
                  }
                  required
                  type="text"
                  placeholder="Image URL"
                  className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
                />
              </div>
              <div className="w-full text-sm">
                <label className="text-border font-semibold">
                  Movie Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={newMovie.description}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, description: e.target.value })
                  }
                  required
                  type="text"
                  placeholder="With your Movie Description"
                  className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
                  rows={6}
                />
              </div>
              <div className="w-full text-sm">
                <label className="text-border font-semibold">Rate</label>
                <input
                  id="rate"
                  name="rate"
                  value={newMovie.rate}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, rate: parseInt(e.target.value) })
                  }
                  required
                  type="number"
                  max={5}
                  placeholder="Image URL"
                  className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
                />
              </div>
            </div>

            <div className="text-sm w-full">
              <label htmlFor="" className="text-border font-semibold">
                Movie Category
              </label>

              <select
                name="idKategori"
                id="idKategori"
                value={newMovie.idKategori}
                className="w-full mt-2 px-6 py-4 text-text bg-main border border-boder rounded"
                onChange={(e) => {
                  console.log(e.target.value);
                  setNewMovie({
                    ...newMovie,
                    idKategori: parseInt(e.target.value),
                  });
                }}
              >
                {seletedCategory.map((c, i) => (
                  <option key={i} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="bg-subMain w-full flex-rows gap-6 font-medium transitions hover:bg-dry border border-subMain text-white py-4 rounded"
            >
              <ImUpload /> Add Movie
            </button>
          </form>
        </div>
      </SideBar>
    );
  }
}
