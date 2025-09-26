import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

export const registerHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;
    console.log("req: ", req.user);

    const owner = req.user.id;
    //check if user already registered a hotel
    // const hotel = await Hotel.findOne({ owner: req.user.id });
    // if (hotel) {
    //   res.json({
    //     success: false,
    //     message: "Tài khỏan đã đăng ký rồi!",
    //   });
    // }

    await Hotel.create({ name, address, contact, city, owner });
    await User.findByIdAndUpdate(owner, { role: "hotelOwner" });
    res.json({ success: true, message: "Đăng ký khách sạn thành công" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
