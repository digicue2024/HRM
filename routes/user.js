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


// router.get('/details/:department', depart)

// const depart = (req.res){
//   dep = req.prams;
// }

router.get("/addstaff", getStaff);


module.exports = router;
