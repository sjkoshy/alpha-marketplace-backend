import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/User.js'

// development //
let SALT_ROUNDS = 11;
let TOKEN_KEY = "areallylonggoodkey";

// production //
if (process.env.NODE_ENV === "production") {
  SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
  TOKEN_KEY = process.env.TOKEN_KEY;
}

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      email,
      password_digest
    });

    await user.save();

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: error.message });
  }
}

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select(
      "username email password_digest"
    );
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email
      };

      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
  
export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (error) {
    res.status(401).send("Not Authorized");
  }
}
