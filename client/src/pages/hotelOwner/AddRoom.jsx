import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Wifi miễn phí": false,
      "Bữa sáng miễn phí": false,
      "Dịch vụ phòng": false,
      "View rừng núi": false,
      "Hồ bơi": false,
    },
  });
  return (
    <form action="">
      <Title
        align="left"
        title="Thêm phòng"
        subTitle="Quản lý và thêm mới phòng một cách dễ dàng, giúp bạn mở rộng dịch vụ và tối ưu trải nghiệm khách hàng."
      />
      {/* Upload Image  */}
      <p className="text-gray-800 mt-10">Ảnh</p>
      <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {Object.keys(images).map((key) => (
          <label
            htmlFor={`roomImage${key}`}
            key={key}
            className="cursor-pointer"
          >
            <img
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt=""
              className="w-32 h-32 object-cover border-2 border-dashed border-gray-300 rounded-lg"
              style={{
                width: "200x",
                height: "128px",
                objectFit: "cover",
              }}
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>
      <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4"> Loại phòng</p>
          <select
            name=""
            value={inputs.roomType}
            className="border opacity-70 border-gray-300 mt-1 rounded-xl p-2 w-full"
            onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
          >
            <option value="">Chọn loại phòng</option>
            <option value="Giường đơn">Giường đơn</option>
            <option value="Giường đôi">Giường đôi</option>
            <option value="Giường sang trọng">Giường sang trọng</option>
            <option value="Phòng gia đình">Phòng gia đình</option>
          </select>
        </div>
        <div>
          <p className="mt-4 text-gray-800">
            Price <span>/night</span>
          </p>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 mt-1 rounded p-2 w-24"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
        </div>
      </div>
      <p>Tiện ích</p>
      <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`amenities${index + 1}`}
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity],
                  },
                })
              }
            />
            <label className="ml-2" htmlFor={`amenities${index + 1}`}>
              {amenity}
            </label>
          </div>
        ))}
      </div>
      <button
        type="button"
        class="bg-white mt-8 text-blue-500 active:scale-95 transition text-sm flex items-center px-6 py-3 gap-2 rounded w-max border border-gray-500/30 hover:bg-blue-500 hover:text-white"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.298 14.75a1.5 1.5 0 0 1-2.596 0M12.5 5a4.5 4.5 0 1 0-9 0c0 5.25-2.25 6.75-2.25 6.75h13.5S12.5 10.25 12.5 5"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Notification
      </button>
    </form>
  );
};

export default AddRoom;
