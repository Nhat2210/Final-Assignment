import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard.jsx";
import Title from "./Title.jsx";
import { useAppContext } from "../context/useAppContext.js";

const FeaturedDestination = () => {
  const { rooms, searchedCities } = useAppContext();
  const [recommended, setRecommended] = useState([]);

  const filterHotels = () => {
    const filteredHotels = rooms.slice((room) => {
      searchedCities.includes(room.hotel.city);
    });
    setRecommended(filteredHotels);
  };

  useEffect(() => {
    filterHotels();
  }, [rooms, searchedCities]);
  return (
    recommended.length > 0 && (
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
        <Title
          title="Khách sạn được đề xuất"
          subTitle="Khám phá những khách sạn cao cấp được tuyển chọn đặc biệt, mang đến trải nghiệm sang trọng và đáng nhớ trên toàn thế giới"
        />
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
          {rooms.slice(0, 4).map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
          ))}
        </div>
        <button
          onClick={() => {
            navigate("/rooms");
            scrollTo(0, 0);
          }}
          className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
        >
          Xem thêm khách sạn
        </button>
      </div>
    )
  );
};

export default FeaturedDestination;
