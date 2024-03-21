var express = require("express");
const { adminRegister, adminLogin } = require("../controllers/admin");
var router = express.Router();

/* GET users listing. */
router.post("/register", adminRegister);
router.post("/login", adminLogin);

module.exports = router;
