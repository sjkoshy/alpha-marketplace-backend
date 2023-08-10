import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password_digest: String
});

export default mongoose.model("User", UserSchema);