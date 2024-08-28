import { FaRegCalendarAlt } from "react-icons/fa";

/* eslint-disable react/prop-types */
export default function MovieInfo({ movie }) {
  return (
    <div className="w-full xl:h-screen relative text-white">
      <img
        src={`/images/${movie.image}`}
        alt={movie.name}
        className="w-full hidden xl:inline-block h-full object-cover "
      />
      <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 bottom-0 right-0">
        <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
          <div className="w-full xl:col-span-1 xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
            <img
              src={`/images/${movie.image}`}
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
                  <span className="text-sm font-medium">{movie.category}</span>
                </div>
                <div className="flex item-center gap-2">
                  <FaRegCalendarAlt className="text-subMain w-3 h-3" />
                  <span className="text-sm font-medium">{movie.year}</span>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
