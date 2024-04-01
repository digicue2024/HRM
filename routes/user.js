const express = require("express");

const {
  userRegister,
  userLogin,
  getStaff,
  getStaffByDepartment,
  getUserByID,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);

router.get("/staff", getStaff);
router.get("/staff/department/:department", getStaffByDepartment);
router.get("/staff/:id", getUserByID);

module.exports = router;
