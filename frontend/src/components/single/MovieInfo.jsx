import { FaPlay, FaRegCalendarAlt, FaShareAlt } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import Rating from "../Start";

/* eslint-disable react/prop-types */
export default function MovieInfo({ movie, setModalOpen }) {
  // console.log(movie)

  return (
    <div className="w-full xl:h-screen relative text-white">
      <img
        src={`${movie.image}`}
        alt={movie.name}
        className="w-full hidden xl:inline-block h-full object-cover "
      />
      <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 bottom-0 right-0">
        <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
          <div className="w-full xl:col-span-1 xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
            <img
              src={`${movie.image}`}
              alt={movie.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
            <div className="col-span-3 flex flex-col gap-10 ">
              {/* Title */}
              <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                {movie.name}
              </h1>

              {/* Flex Item */}
              <div className="flex items-center gap-4 font-medium text-dryGray">
                <div className="flex-colo bg-subMain text-xs px-2 py-1">
                  HD 4K
                </div>
                <div className="flex gap-5 items-center text-dryGray">
                  <div className="flex item-center gap-2">
                    <span className="text-sm font-medium">
                      {movie.idKategori}
                    </span>
                  </div>
                  <div className="flex item-center gap-2">
                    <FaRegCalendarAlt className="text-subMain w-3 h-3" />
                    <span className="text-sm font-medium">{movie.year}</span>
                  </div>
                  <div className="flex item-center gap-2">
                    <IoMdTime className="text-subMain w-3 h-3" />
                    <span className="text-sm font-medium">{movie.durasi}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-text text-sm leading-7">{movie.description}</p>

              <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gary-800 rounded-lg">
                {/* Share */}
                <div className="col-span-1 flex-colo border-r border-border">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20"
                  >
                    <FaShareAlt className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Language */}
                <div className="col-span-2 flex-colo font-medium text-sm ">
                  <p>
                    Language :{" "}
                    <span className="ml-2 truncate">{movie.language}</span>
                  </p>
                </div>

                {/* Watch Button */}
                <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                  <Link
                    to={`/watch/${movie.id}`}
                    className="bg-dry hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3"
                  >
                    <FaPlay className="w-3 h-3" /> Watch
                  </Link>
                </div>
              </div>
            </div>

            {/* Download */}
            <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
              <span className="text-xl font-bold text-star pr-10">
                {" "}
                <Rating value={movie.rate} />
              </span>
              <button className="md:w-1/4 w-full relative flex-colo bg-subMain hover:bg-transparent border-2 border-subMain transitions md:h-64 h-20 rounded font-medium ">
                <div className="flex-rows font-medium text-sm uppercase tracking-widest absolute md:rotate-90">
                  Download <FiLogIn className="w-6 h-6 ml-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
