const Admin = require("../models/adminModels");
const jwt = require("jsonwebtoken");
const Client = require("../models/clientModel");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.ADMIN_JWT_SECRET, {
    expiresIn: "1d",
  });
};

// to register an account for the admin 
// http://localhost:3000/api/admin/register

const adminRegister = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const admin = await Admin.registerAdmin(email, name, password);
    const token = createToken(admin._id);
    res.status(201).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// admin login 
// http://localhost:3000/api/admin/login

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.loginAdmin(email, password);
    const token = createToken(admin._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// to display all the details of the clients (mainly work status)
// http://localhost:3000/api/admin/allclients

const allclients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = { adminRegister, adminLogin, allclients};
