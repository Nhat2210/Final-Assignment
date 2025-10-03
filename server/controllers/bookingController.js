import Stripe from "stripe";
import transporter from "../config/nodemailer.js";
import Booking from "../models/Booking.js";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// function to check availability of Room

const checkAvailability = async ({ checkInDate, checkOutDate, room }) => {
  try {
    const bookings = await Booking.find({
      room,
      checkInDate: { $lte: checkOutDate },
      checkOutDate: { $gte: checkInDate },
    });
    const isAvailable = bookings.length === 0;
    return isAvailable;
  } catch (error) {
    console.log(error.message);
  }
};

// API to check availability of room
// POST /api/bookings/check-availability
export const checkAvailabilityAPI = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate } = req.body;
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });
    res.json({ success: true, isAvailable });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to create a new booking
// POST  api/bookings/book

export const createBooking = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate, guests } = req.body;
    const user = req.user._id;

    //Before booking check availability
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });
    if (!isAvailable) {
      return res.json({ success: false, message: "Phòng này đã được đặt" });
    }
    // get TotalPrice from Room
    const roomData = await Room.findById(room).populate("hotel");
    let totalPrice = roomData.pricePerNight;
    //calculate totalPrice based on Days
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    totalPrice *= days;
    const booking = await Booking.create({
      user,
      room,
      hotel: roomData.hotel._id,
      guests: +guests,
      checkInDate,
      checkOutDate,
      totalPrice,
    });
    console.log(req.user);

    const mailOptions = {
      from: "anhnhat22102003@gmail.com",
      to: req.user.email,
      subject: "Hotel Booking Details",
      html: `
      <h2>Your Booking Details </h2>
<p>Dear ${
        req.user.username?.replace(/\s*null\s*/gi, "").trim() ||
        "Valued Customer"
      },</p>      <p>Thank you for your booking! Here are your details: </p>
      <ul>
        <li><strong>Booking ID: </strong>${booking._id}</li>
        <li><strong>Hotel Name: </strong>${roomData.hotel.name}</li>
        <li><strong>Location </strong>${roomData.hotel.address}</li>
        <li><strong>Date: </strong>${booking.checkInDate.toDateString()}</li>
        <li><strong>Booking Amount: </strong>${booking.totalPrice} ${
        process.env.CURRENCY
      } / day</li>
      </ul>
      <p>We are looking forward to welcoming you!</p>
      `,
    };
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Đặt phòng thành công" });
  } catch (error) {
    res.json({ success: false, message: "Đặt phòng không thành công" });
  }
};

// API to get all bookings for a user
// GET api/bookings/user

export const getUserBookings = async (req, res) => {
  try {
    const user = req.user._id;
    const bookings = await Booking.find({ user })
      .populate("room hotel")
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    res.json({ success: false, message: "Failed to fetch bookings" });
  }
};

export const getHotelBookings = async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ owner: req.auth.userId });
    if (!hotel) {
      return res.json({ success: false, message: "No hotel found" });
    }
    const bookings = await Booking.find({ hotel: hotel._id })
      .populate("user room hotel")
      .sort({ createdAt: -1 });
    // total bookings
    const totalBookings = bookings.length;
    //total revenue
    const totalRevenue = bookings.reduce(
      (acc, booking) => acc + booking.totalPrice,
      0
    );
    res.json({
      success: true,
      dashboardData: { totalBookings, totalRevenue, bookings },
    });
  } catch (error) {
    res.json({ success: false, message: "Failed to fetch bookings" });
  }
};

export const stripePayment = async (req, res) => {
  try {
    const { bookingId } = req.body;

    // Validate
    if (!bookingId) {
      return res.status(400).json({
        success: false,
        message: "Thiếu bookingId",
      });
    }

    // Get booking
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy booking",
      });
    }

    // Get room data
    const roomData = await Room.findById(booking.room).populate("hotel");
    if (!roomData || !roomData.hotel) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy phòng hoặc khách sạn",
      });
    }

    const totalPrice = booking.totalPrice;
    const { origin } = req.headers;

    // Line items
    const line_items = [
      {
        price_data: {
          currency: "vnd",
          product_data: {
            name: roomData.hotel.name,
            description: `${roomData.roomType} - ${booking.guests} khách`,
            images:
              roomData.images && roomData.images.length > 0
                ? [roomData.images[0]]
                : [],
          },
          unit_amount: Math.round(totalPrice), // VND không nhân 100
        },
        quantity: 1,
      },
    ];

    // Create Checkout session - DÙNG stripe không phải stripeInstance
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${origin}/loader/my-bookings`,
      cancel_url: `${origin}/my-bookings`,
      metadata: {
        bookingId: bookingId.toString(),
      },
    });

    // Log để debug
    console.log("✅ Stripe session created:", session.id);

    res.json({
      success: true,
      url: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    console.error("❌ Stripe payment error:", error);
    res.status(500).json({
      success: false,
      message: "Thanh toán thất bại",
      error: error.message, // Thêm error message để debug
    });
  }
};

// ========== STRIPE WEBHOOK ==========
export const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    // DÙNG stripe không phải stripeInstance
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error("❌ Webhook error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const bookingId = session.metadata.bookingId;

    console.log("🔔 Webhook received for booking:", bookingId);

    try {
      const updatedBooking = await Booking.findByIdAndUpdate(
        bookingId,
        {
          paymentStatus: "paid",
          isPaid: true,
          paidAt: new Date(),
          stripeSessionId: session.id,
        },
        { new: true }
      );

      if (updatedBooking) {
        console.log("✅ Payment successful for booking:", bookingId);
      } else {
        console.error("❌ Booking not found:", bookingId);
      }
    } catch (error) {
      console.error("❌ Error updating booking:", error);
    }
  }

  res.json({ received: true });
};
