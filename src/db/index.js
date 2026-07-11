import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected successfully");
  } catch (error) {
    console.log("mongodb connection error ", error);
    process.exit(1); // if db is not connecting then there is no point to move further
  }
};

export default connectDB;
