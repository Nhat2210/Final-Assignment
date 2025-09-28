import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/useAppContext";
import toast from "react-hot-toast";

const AddRoom = () => {
  const { axios, getToken } = useAppContext();
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
      "Wifi Miễn Phí": false,
      "Bữa sáng miễn phí": false,
      "Dịch vụ phòng": false,
      "View rừng núi": false,
      "Hồ bơi": false,
    },
  });
  const [loading, setLoading] = useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const selectedAmenities = Object.keys(inputs.amenities).filter(
      (key) => inputs.amenities[key]
    );
    if (
      !inputs.roomType ||
      !inputs.pricePerNight ||
      selectedAmenities.length === 0 ||
      !Object.values(images).some((image) => image)
    ) {
      toast.error("Vui lòng nhập đủ thông tin!");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("roomType", inputs.roomType);
      formData.append("pricePerNight", inputs.pricePerNight);
      formData.append("amenities", JSON.stringify(selectedAmenities));
      Object.values(images).forEach(
        (file) => file && formData.append("images", file)
      );

      const { data } = await axios.post("/api/rooms/", formData, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (data.success) {
        toast.success(data.message);
        setInputs({
          roomType: "",
          pricePerNight: 0,
          amenities: Object.fromEntries(
            Object.keys(inputs.amenities).map((k) => [k, false])
          ),
        });
        setImages({ 1: null, 2: null, 3: null, 4: null });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="" action="" onSubmit={onSubmitHandler}>
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
                width: "200px",
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
            className="border border-gray-300 mt-1 rounded p-2 w-24 rounded-xl"
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
        type="submit"
        className="bg-white mt-8 text-blue-500 active:scale-95 transition text-sm flex items-center px-6 py-3 gap-2 rounded-xl w-max border border-gray-500/30 hover:bg-blue-500 hover:text-white"
        disabled={loading}
      >
        {loading ? "Loading ... " : "Thêm phòng"}
      </button>
    </form>
  );
};

export default AddRoom;
