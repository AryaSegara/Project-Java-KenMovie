import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { useState } from "react";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function MoviePage() {
  const [movie, setMovie] = useState([]);
  const [categories, setCategories] = useState([]);
  const [kategori, setKategori] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/movie`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setMovie(data);
      });
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const filterData = movie
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    })
    .filter((data) => {
      return (
        data.name.toLowerCase().includes(search.toLowerCase()) &&
        data.idCategories.name.toLowerCase().includes(kategori.toLowerCase())
      );
    });

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-4">
        {/* <Filters /> */}
        <div className="col-span-8 w-6/12">
          <form className="w-full text-sm bg-dryGray rounded flex-btn gap-2">
            <span className="bg-subMain w-20 flex-colo h-10 rounded text-white">
              <FaSearch />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Movie"
              className="font-medium placeholder:text-border tex-sm w-11/12 h-10 bg-transparent border-none px-2 text-black"
            />
          </form>
        </div>
        <div className="my-6 bg-dry border text-dry border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
          <section>
            <label className="flex items-center gap-10 ">
              <h1 className="font-bold text-black"></h1>
              <select
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                className="h-10 w-40 p-2 text-sm rounded-lg outline-blue-400 border-2 border-solid border-gray-500"
              >
                <option value="">Sort By Category</option>
                {categories.map((c, i) => (
                  <option key={i} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
          </section>

          <section>
            <label className="flex items-center gap-10 ">
              <h1 className="font-bold text-black"></h1>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-10 w-36 p-2 text-sm rounded-lg outline-blue-400 border-2 border-solid border-gray-500"
              >
                <option value="">Sort By </option>
                <option value="name">Name</option>
                <option value="year">Year</option>
                <option value="rate">Rate</option>
              </select>
            </label>
          </section>

          <section>
            <label className="flex items-center gap-10 ">
              <h1 className="font-bold text-black"></h1>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="h-10 w-36 p-2 text-sm rounded-lg outline-blue-400 border-2 border-solid border-gray-500"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </label>
          </section>
        </div>
        <p className="text-lg font-medium my-6">
          Total <span className="font-bold text-subMain">{movie?.length}</span>{" "}
          Items Found
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {/* GET DATA */}
          {filterData.map((m, index) => (
            <div
              key={index}
              className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden"
            >
              <Link to={`/movie/${m.id}`} className="w-full">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-64 object-cover"
                />
              </Link>
              <div className="absolute flex-btn gap-2 bottom-0 left-0 right-0 bg-main bg-opacity-60 text-white px-4 py-3 ">
                <h3 className="font-semibold truncate">{m.name}</h3>
                <span className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent rounded-md text-white font-bold">
                  {m.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
