import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  make: String,
  model: String,
  type: String,
  year: Number,
  color: String,
  price: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  image: String,
});

export default mongoose.model("cars", CarSchema);
