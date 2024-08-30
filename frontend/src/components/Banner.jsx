import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Movie } from "../data/MovieData";
import { FaHeart, FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";

export default function Banner() {
  return (
    <div className="relativew-full">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48"
      >
        {Movie.slice(0, 6).map((movie, index) => (
          <SwiperSlide key={index} className="relative rounded overlow-hidden">
            <img
              src={`/images/${movie.image}`}
              alt={movie.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 right-0 bottom-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
              <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                {movie.name}
              </h1>

              <div className="flex gap-5 items-center text-dryGray">
                <div className="flex item-center gap-2">
                  <span className="text-sm font-medium">{movie.category}</span>
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

              <div className="flex gap-5 items-center">
                <Link
                  to={`/movie/${movie.name}`}
                  className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
                >
                  Watch
                </Link>
                <button className="bg-white hover:text-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30">
                  <FaHeart />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
