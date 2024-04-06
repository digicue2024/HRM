const Client = require("../models/clientModel");

// to add new clients
// http://localhost:3000/api/admin/client/add

const addClient = async (req, res) => {
  try {
    const clientDetails = req.body;

    const newClient = new Client(clientDetails);
    console.log(newClient);
    await newClient.save();

    res.status(201).json({ newClient });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// to display all client details
// http://localhost:3000/api/admin/client/allclients

const displayClients = async (req, res) => {
  try {
    const allClients = await Client.find();
    res.json({ allClients });
  } catch (err) {
    console.error("Error fetching clients", err);
    res.status(500).send("Internal Server Error");
  }
};

// to display one particular client
// http://localhost:3000/api/admin/client/clients/660257769a1099e1fbdd3729

const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// editing the details of an particular client
// http://localhost:3000/api/admin/client/editClient/:id

const editClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClientData = req.body;

    let existingClient = await Client.findById(id);

    if (!existingClient) {
      return res.status(404).json({ error: "Client not found" });
    }

    for (const key in updatedClientData) {
      existingClient[key] = updatedClientData[key];
    }

    existingClient = await existingClient.save();

    res
      .status(200)
      .json({ message: "Client updated successfully", client: existingClient });
    console.log({
      message: "client added successfully",
      client: existingClient,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// allows us to retrieve clients with same department from the database based on the department name passed through the URL.
// http://localhost:3000/api/admin/clients/:department


const getClientByDepartment = async (req, res) => {
  try {
    const { department } = req.params;
    const clients = await Client.find({ department }); 
    res.json({ clients });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { addClient, displayClients, getClientById, editClient, getClientByDepartment };
