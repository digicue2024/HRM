const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: String,
    required: true,
  },
  joiningdate: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

userSchema.statics.registerUser = async function (
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
) {
  if (
    !email ||
    !password ||
    !name ||
    !image ||
    !dateofbirth ||
    !joiningdate ||
    !salary ||
    !department ||
    !phone ||
    !address
  ) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  const isStrongPassword = validator.isStrongPassword(password, {
    minLength: 6,
    minLowercase: 0,
    minUppercase: 0,
    minNumbers: 0,
    minSymbols: 0,
  });

  if (!isStrongPassword) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
    name,
    image,
    dateofbirth,
    joiningdate,
    salary,
    department,
    phone,
    address,
  });

  return user;
};

userSchema.statics.loginUser = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw Error("Invalid credentials");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
