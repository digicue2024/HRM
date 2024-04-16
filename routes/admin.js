const express = require("express");
const { adminRegister, adminLogin, allclients } = require("../controllers/adminController");
const router = express.Router();

router.post("/register", adminRegister);
router.post("/login", adminLogin);
router.get('/allclients', allclients); 

module.exports = router;
