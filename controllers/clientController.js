const Client = require("../models/clientModel");

// to add new clients ==================================

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


// to display all client details  =======================

const displayClients = async (req, res) => {
  try {
    const allClients = await Client.find();
    res.json({allClients}); 
  } catch (err) {
    console.error('Error fetching clients', err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { addClient, displayClients };
