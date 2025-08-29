import React from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import { useState } from "react";

const CheckBox = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOptions"
        checked={selected}
        onChange={() => label}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);
  const roomTypes = [
    "Giường đơn ",
    "Giường đôi",
    "Giường hạng sang",
    "Phòng gia đình",
  ];
  const priceRanges = [
    "0 đến 500.000",
    "500.000 đến 1.000.000",
    "1.000.000 đến 2.000.000",
    "2.000.000 đến 3.0000.000",
  ];
  const sortOptions = ["Giá Cao Đến Thấp", "Giá Thấp Đến Cao", "Phòng mới"];
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">Title</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Subtitle
          </p>
        </div>
        {roomsDummyData.map((room) => (
          <div className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last-border-0">
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="ảnh phòng"
              title="Ảnh nội thất"
              className="max-h-75 w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p className="text-gray-800 text-3xl font-playfair">
                {room.hotel.name}
              </p>
              <div className="flex items-center ">
                <StarRating rating={5} />
                <p className="ml-2 mt-4">200+ reviews</p>
              </div>
              <div>
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>
              {/* Rooms  */}
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5F5]/70"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="w-5 h-5"
                    />
                    <span className="text-xs">{item}</span>
                  </div>
                ))}
              </div>
              {/* Room Price Per Night  */}
              <p className="text-xl font-medium text-gray-700">
                ${room.pricePerNight} / day
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Filter  */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        <div
          className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${
            openFilters && "border-b"
          }`}
        >
          <p className="text-base font-medium text-gray-800">BỘ LỌC</p>
          <div className="text-xs cursor-pointer">
            <span
              onClick={() => setOpenFilters(!openFilters)}
              className="lg:hidden"
            >
              {openFilters ? "ẨN" : "HIỆN"}
            </span>
            <span className="hidden lg:block">XÓA</span>
          </div>
        </div>
        <div
          className={`${
            openFilters ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-700`}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Theo sự phổ biến</p>
            {roomTypes.map((room, index) => (
              <CheckBox key={index} label={room} />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Theo gía</p>
            {priceRanges.map((range, index) => (
              <CheckBox key={index} label={range} />
            ))}
          </div>
          <div className="px-5 pt-5 pb-5">
            <p className="font-medium text-gray-800 pb-2">Theo sự phổ biến</p>
            {sortOptions.map((option, index) => (
              <RadioButton key={index} label={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
