import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

export const registerHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;
    const owner = req.user._id;

    //check if user already registered a hotel
    const hotel = await Hotel.findOne({ owner });
    if (hotel) {
      return res.json({ success: false, message: "Hotel Already Registered" });
    }

    await Hotel.create({ name, address, contact, city, owner });
    await User.findByIdAndUpdate(owner, { role: "hotelOwner" });
    req.json({ success: true, message: "Hotel REgister Successfully" });
  } catch (error) {
    req.json({ success: false, message: error.message });
  }
};
