import { useState } from "react";
import {
  BsBookmarkStarFill,
  BsCaretLeftFill,
  BsCaretRightFill,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import Rating from "./Start";
import { useEffect } from "react";

export default function TopRate () {
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [movie, setMovie] = useState([]);

  useEffect(() =>{
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/movie`)
    .then((response) => response.json())
    .then((data) => setMovie(data));
  },[])


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
          {movie.map((m, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered border border-boder bg-dry rounded-lg overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover rounded-lg"
                />

                <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">

                  <Link
                    to={`/movie/${m.name}`}
                    className="font-semibold text-xl trancute line-clamp-2"
                  >
                    {m.name}
                  </Link>

                  <div className="flex gap-2 text-star">
                    <Rating value={m.rate} />
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
