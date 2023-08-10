import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
  make: String,
  model: String,
  bodyType: String,
  year: Number,
  color: String,
  image: String,
  price: Number,
  user: String
});

export default mongoose.model('Car', CarSchema);

