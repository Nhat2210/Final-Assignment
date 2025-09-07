import React from "react";
import { assets, cities } from "../assets/assets";
import { LogIn } from "lucide-react";

const HotelReg = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70">
      <form
        action=""
        className="flex bg-white rounded-xl max-w-4xl max-md:mx-2"
      >
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 rounded-xl hidden md:block"
        />
        <div className="relative flex flex-col items-center md:w-1/2 md:w-1/2 p-8 md:p-10">
          <img
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
          />
          <p className="text-2xl font-semibold mt-6">Đặt phòng ngay</p>
          {/* Hotel Name  */}
          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-700">
              Tên phòng
            </label>
            <input
              id="name"
              type="text"
              placeholder="Nhập vào đây"
              className="border border-gray-200 rounded-lg w-full px-3 py-2.5 mt-1 outline-gray-500 font-light"
              required
            />
          </div>
          {/* Phone  */}
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-700">
              Số điện thoại
            </label>
            <input
              id="phone"
              type="number"
              placeholder="Nhập vào đây"
              className="border border-gray-200 rounded-lg w-full px-3 py-2.5 mt-1 outline-gray-500 font-light"
              required
            />
          </div>
          {/* Địa chỉ  */}
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-700">
              Địa chỉ
            </label>
            <input
              id="address"
              type="text"
              placeholder="Nhập vào đây"
              className="border border-gray-200 rounded-lg w-full px-3 py-2.5 mt-1 outline-gray-500 font-light"
              required
            />
          </div>
          {/* Chọn thành phố  */}
          <div className="w-full mt-4 max-w-60 mr-auto">
            <label htmlFor="city" className="font-medium text-gray-700">
              Thành phố
            </label>
            <select
              id="city"
              className="border border-gray-200 rounded-lg w-full px-3 py-2.5 mt-1 outline-gray-500 font-light"
              required
            >
              <option value="">Chọn thành phố</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="flex mt-4">
            <button
              type="button"
              class="flex items-center hover:bg-gray-200 justify-between text-gray-700 rounded text-md h-10 w-36 pr-7 bg-white border border-gray-500 active:scale-95 transition"
            >
              <div class="h-full flex items-center justify-center px-3">
                <LogIn />
              </div>
              Đăng ký
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
