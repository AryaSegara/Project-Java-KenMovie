import { BsCollectionFill } from "react-icons/bs";
import { Movie } from "../data/MovieData";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export default function PopularMovie() {
  return (
    <div className="my-16">
      <div className="w-full flex sm:gap-8 gap-4 items-center">
        <BsCollectionFill className="sm:w-6 sm:h-6 w-4 h-4 text-subMain " />
        <h2 className="sm:text-xl font-bold text-lg">Popular Movies</h2>
      </div>

      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {Movie.slice(0, 5).map((movie, index) => (
          <div
            key={index}
            className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden"
          >
            <Link to={`/movie/${movie?.name}`} className="w-full">
              <img
                src={`/images/${movie?.image}`}
                alt={movie.name}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="absolute flex-btn gap-2 bottom-0 left-0 right-0 bg-main bg-opacity-60 text-white px-4 py-3 ">
                <h3 className="font-semibold truncate">{movie.name}</h3>
                <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white">
                    <FaHeart />
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
