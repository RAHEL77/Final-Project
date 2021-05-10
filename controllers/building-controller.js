const BuildingModel = require("../models/building-model");

//create
const addBuilding = async (req, res) => {
  const {
    balance,
    addressOfBuilding,
    chargeOfFixed,
    chargeOfRegular,
    payments,
  } = req.body;

  const newBuilding = new BuildingModel({
    balance,
    addressOfBuilding,
    chargeOfFixed,
    chargeOfRegular,
    payments,
    // userId: req.userId,
  });
  const createdBuilding = await newBuilding.save();
  res.json(createdBuilding);
  res.status(201);
  res.send();
};

//update
const updateBuilding = async (req, res) => {
  const {
    _id,
    balance,
    addressOfBuilding,
    chargeOfFixed,
    chargeOfRegular,
    payments,
    userId,
  } = req.body;
  // building can be undifined or object-react has to send same field name =buildingId
  const building = await BuildingModel.findOne({ _id: _id });
  if (!building) {
    res.status(404);
    res.json({ msg: "building is not exist" });
    res.send();
    return;
  }

  building.balance = balance;
  building.addressOfBuilding = addressOfBuilding;
  building.chargeOfFixed = chargeOfFixed;
  building.chargeOfRegular = chargeOfRegular;
  building.payments = payments;

  await building.save();
  res.json({ building });
  res.status(200);
  res.send();
};

//get single building
const getBuilding = async (req, res) => {
  const { buildingId } = req.params;
  // building can be undifined or object
  const building = await BuildingModel.findOne({ _id: buildingId });
  if (!building) {
    res.status(404);
    res.json({ msg: "building not exist" });
    res.send();
    return;
  }

  res.json(building);
  res.status(200);
  res.send();
};

//get  buildings
const getBuildings = async (req, res) => {
  const allBuildings = await BuildingsModel.find();
 
  res.json({ allBuildings });
  res.status(200);
  res.send();
};

module.exports = { getBuildings, addBuilding, getBuilding, updateBuilding };
