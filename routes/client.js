const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const { addClient } = require("../controllers/clientController");
router.use(bodyParser.json());

router.post("/add", addClient);

module.exports = router;
