import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connect complete to Database");
  } catch (error) {
    console.error("Error to connect database");
    process.exit(1);
  }
};
