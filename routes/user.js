const express = require("express");

const {
  userRegister,
  userLogin,
  getStaff,
  getStaffByDepartment,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);

router.get("/staff", getStaff);
router.get("/staff/department/:department", getStaffByDepartment);


module.exports = router;
