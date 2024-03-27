const Client = require("../models/clientModel");

// to add new clients
// http://localhost:3000/api/admin/client/add

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


// to display all client details
// http://localhost:3000/api/admin/client/allclients

const displayClients = async (req, res) => {
  try {
    const allClients = await Client.find();
    res.json({allClients}); 
  } catch (err) {
    console.error('Error fetching clients', err);
    res.status(500).send('Internal Server Error');
  }
};

const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addClient, displayClients, getClientById};
