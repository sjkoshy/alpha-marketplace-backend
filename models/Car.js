import mongoose from "mongoose";
const { Schema } = mongoose;

const CarSchema = new mongoose.Schema({
  make: String,
  model: String,
  type: String,
  year: Number,
  color: String,
  price: Number,
  user: { type: Schema.Types.ObjectId, ref: "users" },
  image: String,
});

export default mongoose.model("cars", CarSchema);
