const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const {
  addClient,
  displayClients,
  getClientById,
  editClient,
  getClientByDepartment,
  updateWorkStatus,
} = require("../controllers/clientController");

router.use(bodyParser.json());

router.post("/add", addClient);
router.get("/allclients", displayClients);
router.get("/clients/:id", getClientById);
router.patch("/editClient/:id", editClient);
router.patch("/updateWorkStatus/:id", updateWorkStatus); 
router.get("/department/:department", getClientByDepartment);

module.exports = router;
