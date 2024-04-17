const express = require("express");
const requireAuth = require('../middleware/requireUserAuth')

const {
  userRegister,
  userLogin,
  getStaff,
  getStaffByDepartment,
  getUserByID,
  userupdate,
} = require("../controllers/userController");

const router = express.Router();

router.post("/staff/register", userRegister);
router.post("/login", userLogin);

router.get("/staff", getStaff);
router.get("/staff/department/:department", getStaffByDepartment);

router.get("/staff/single", getUserByID);
router.patch("/staff/edit",userupdate)

module.exports = router;
