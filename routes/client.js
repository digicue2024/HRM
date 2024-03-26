const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const { addClient, displayClients } = require("../controllers/clientController");
router.use(bodyParser.json());

router.post("/add", addClient);
router.get("/allclients", displayClients);

module.exports = router;
