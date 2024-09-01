import { FaUserFriends } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { userData } from "../../data/UserData";

export default function MovieCasts() {
  return (
    <div className="my-12 ">
      <div className="w-full flex sm:gap-8 gap-4 items-center">
        <FaUserFriends className="sm:w-6 sm:h-6 w-4 h-4 text-subMain " />
        <h2 className="sm:text-xl font-bold text-lg">Casts</h2>
      </div>

      <div className="mt-10">
        <Swiper
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          modules={[Autoplay]}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            // 1280: {
            //   slidesPerView: 5,
            //   spaceBetween: 30,
            // },
          }}
        >
          {userData.map((user, i) => (
            <SwiperSlide key={i}>
              <div className="w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800">
                <img
                  src={`/images/${user.image}`}
                  alt={user.name}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <p>{user.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
