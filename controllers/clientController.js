const Client = require("../models/clientModel");

const addClient = async (req, res) => {
  try {
    const clientDetails = req.body;

    const newClient = new Client(clientDetails);
    console.log(newClient);
    await newClient.save();

    res.status(201).json({newClient});
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addClient };
