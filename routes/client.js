const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const {
  addClient,
  displayClients,
  getClientById,
  editClient,
} = require("../controllers/clientController");
router.use(bodyParser.json());

router.post("/add", addClient);
router.get("/allclients", displayClients);
router.get("/clients/:id", getClientById);
router.put("/editClient/:id", editClient);

module.exports = router;

