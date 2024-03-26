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
<<<<<<< HEAD
router.get("/staff", getStaff);
router.get("/staff/department/:department", getStaffByDepartment);


// router.get('/details/:department', depart)

// const depart = (req.res){
//   dep = req.prams;
// }
=======
router.get("/addstaff", getStaff);
>>>>>>> 910d7d94d0ed3e78143d80ea76c559d5e5d593b5

module.exports = router;
