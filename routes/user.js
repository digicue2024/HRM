const express = require("express");

const {
  userRegister,
  userLogin,
  getStaff,
  getStaffByDepartment,
  getUserByID,
  userupdate,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);

router.get("/staff", getStaff);
router.get("/staff/department/:department", getStaffByDepartment);
router.get("/staff/:id", getUserByID);
router.patch("/staff/edit",userupdate)

module.exports = router;
