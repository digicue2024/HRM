const express = require("express");

const {
  userRegister,
  userLogin,
  getStaff,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/addstaff", getStaff);

module.exports = router;
