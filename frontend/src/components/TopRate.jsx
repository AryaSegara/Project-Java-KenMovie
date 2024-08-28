import { useState } from "react";
import {
  BsBookmarkStarFill,
  BsCaretLeftFill,
  BsCaretRightFill,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Movie } from "../data/MovieData";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "./Start";

export default function TopRate () {
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const classNames =
    "hover:bg-dry transitions text-sm rounded w-9 h-9 flex-colo bg-subMain text-white ";

  return (
    <div className="my-16">
      <div className="w-full flex sm:gap-8 gap-4 items-center">
        <BsBookmarkStarFill className="sm:w-6 sm:h-6 w-4 h-4 text-subMain " />
        <h2 className="sm:text-xl font-bold text-lg">Top Rated</h2>
      </div>

      <div className="mt-10">
        <Swiper
          navigation={{ nextEl: nextPage, prevEl: prevPage }}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {Movie.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered border border-boder bg-dry rounded-lg overflow-hidden">
                <img
                  src={`/images/${movie.image}`}
                  alt={movie.name}
                  className="w-full h-full object-cover rounded-lg"
                />

                <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                  <button className="h-12 w-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white">
                    <FaHeart />
                  </button>

                  <Link
                    to={`/movie/${movie.name}`}
                    className="font-semibold text-xl trancute line-clamp-2"
                  >
                    {movie.name}
                  </Link>

                  <div className="flex gap-2 text-star">
                    <Rating value={movie.rate} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <button className={classNames} ref={(node) => setPrevPage(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextPage(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
}
