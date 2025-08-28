import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-28">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Title
          align="left"
          title="Ưu đãi độc quyền"
          subTitle="Đừng bỏ lỡ các chương trình khuyến mãi giới hạn và gói combo đặc biệt để có kỳ nghỉ tuyệt vời và những kỷ niệm đáng nhớ."
        />
        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12 shadow-md px-4 py-2 rounded bg-white hover:bg-gray-50 transition-all">
          Xem ưu đãi
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="group-hover:translate-x-0.5 transition-all"
          />
        </button>
      </div>

      {/* FIX: Thêm grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col justify-between min-h-[300px] p-6 rounded-xl text-white bg-no-repeat bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Overlay để text dễ đọc hơn */}
            <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

            <div className="relative z-10">
              <p className="px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full w-fit">
                {item.priceOff}% OFF
              </p>
            </div>

            <div className="relative z-10 mt-auto">
              <p className="text-2xl font-medium font-playfair mb-2">
                {item.title}
              </p>
              <p className="text-sm mb-3">{item.description}</p>
              <p className="text-xs text-white/70 mb-4">
                Expires: {item.expiryDate}
              </p>

              <button className="flex items-center gap-2 font-medium cursor-pointer text-sm border border-white/30 px-4 py-2 rounded hover:bg-white/10 transition-all">
                Xem chi tiết
                <img
                  src={assets.arrowIcon}
                  alt="arrow-icon"
                  className="invert group-hover:translate-x-1 transition-all w-4 h-4"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
