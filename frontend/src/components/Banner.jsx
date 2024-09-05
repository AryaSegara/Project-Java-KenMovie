/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {  FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";

export default function Banner() {

  const [movie,setMovie] = useState([]);
  const [category,setCategory] = useState([]);

  useEffect(() =>{
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/movie`)
    .then((response) => response.json())
    .then((data) => setMovie(data));
  },[])

  useEffect(() =>{
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/categories`)
    .then((response) => response.json())
    .then((data) => setCategory(data));
  },[])


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
        {movie.slice(0, 8).map((movie, index) => (
          <SwiperSlide key={index} className="relative rounded overlow-hidden">
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 right-0 bottom-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
              <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                {movie.name}
              </h1>

              <div className="flex gap-5 items-center text-dryGray">
                <div className="flex item-center gap-2">
                  <span className="text-xl font-medium">{movie.idCategories.name}</span>
                </div>
                <div className="flex item-center gap-2">
                  <FaRegCalendarAlt className="text-subMain w-3 h-3" />
                  <span className="text-xl font-medium">{movie.year}</span>
                </div>
                <div className="flex item-center gap-2">
                  <IoMdTime className="text-subMain w-3 h-3" />
                  <span className="text-xl font-medium">{movie.durasi}</span>
                </div>
              </div>

              <div className="flex gap-5 items-center">
                <Link
                  to={`/movie/${movie.id}`}
                  className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
                >
                  Watch
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
