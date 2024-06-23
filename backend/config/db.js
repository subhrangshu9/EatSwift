import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error:", err));
};


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.

