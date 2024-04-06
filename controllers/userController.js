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

// staff login
// http://localhost:3000/api/admin/user/login

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

// to create new staffs 
// http://localhost:3000/api/admin/user/register

const getStaff = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");

    res.json({users});

    res.json({ users: users });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// allows us to retrieve users with same department from the database based on the department name passed through the URL.
// http://localhost:3000/api/admin/user/staff/department/digital marketing

const getStaffByDepartment = async (req, res) => {
  try {
    const { department } = req.params;
    const users = await User.find({ department }).select("-password");
    res.json({users});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// allows to display the details of an particular user
// http://localhost:3000/api/admin/user/staff/6602a8c2fdcd30e9eac3010e

const getUserByID = async (req, res) => {
  try {
    const user_id = req.user._id; // Assuming the user ID is passed as a parameter in the request
    const user = await User.findById(user_id).select("-password"); // Exclude the password field from the response
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// to edit the user details by admin
// http://localhost:3000/api/admin/user/staff/edit

const userupdate = async (req, res) => {
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
    const user = await User.updateUser(
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



module.exports = { userRegister, userLogin, getStaff, getStaffByDepartment, getUserByID ,userupdate};
