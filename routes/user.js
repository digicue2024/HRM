const express = require("express");

const {
  userRegister,
  userLogin,
  getStaff,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/staff", getStaff);

module.exports = router;
