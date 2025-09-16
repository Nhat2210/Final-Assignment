import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`, {
      serverSelectionTimeoutMS: 30000, // 30s thay vì 10s
      socketTimeoutMS: 45000,
      bufferMaxEntries: 0,
      maxPoolSize: 10,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
