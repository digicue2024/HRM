const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.USER_JWT_SECRET, {
    expiresIn: "1d",
  });
};

const userRegister = async (req, res) => {
  try {
    const {
      email,
      name,
      password,
      image,
      dateofbirth,
      joiningdate,
      salary,
      department,
      phone,
      address,
    } = req.body;
    const user = await User.registerUser(
      email,
      name,
      password,
      image,
      dateofbirth,
      joiningdate,
      salary,
      department,
      phone,
      address
    );
    const token = createToken(user._id);
    res.status(201).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.loginUser(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getStaff = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.json({ users: users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { userRegister, userLogin, getStaff };
