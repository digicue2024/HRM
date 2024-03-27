const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const {
  addClient,
  displayClients,
  getClientById
} = require("../controllers/clientController");
router.use(bodyParser.json());

router.post("/add", addClient);
router.get("/allclients", displayClients);
router.get("/clients/:id", getClientById);

module.exports = router;
