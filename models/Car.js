import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  make: String,
  model: String,
  type: String,
  year: Number,
  color: String,
  price: Number,
  userId: String,
  image: String,
});

export default mongoose.model("cars", CarSchema);
