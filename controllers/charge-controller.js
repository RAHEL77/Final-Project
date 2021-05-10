const ChargeModel = require("../models/charge-model");

//create
const addCharge = async (req, res) => {
  const {
    dateOfCharge,
    amount,
    caseOf,
    payer,
    receivedBy,
    typeOfCharge,
  } = req.body;

  const newCharge = new ChargeModel({
    dateOfCharge,
    amount,
    caseOf,
    payer,
    receivedBy,
    typeOfCharge,
  });
  const createdCharge = await newCharge.save();

  const building = await BuildingModel.findOne({ _id: "60981076ca47b02620072346" });
  if (!building) {
    res.status(404);
    res.json({ msg: "building is not exist" });
    res.send();
    return;
  }

  building.balance-=amount;
  building.charges.push(createdCharge);
  await building.save();

  res.json(createdCharge);
  res.status(201);
  res.send();
};

//update
const updateCharge = async (req, res) => {
  const {
    _id,
    dateOfCharge,
    amount,
    caseOf,
    payer,
    receivedBy,
    typeOfCharge,
    
  } = req.body;
  // charge can be undifined or object-react has to send same field name =caseId
  const charge = await ChargeModel.findOne({ _id: _id });
  if (!charge) {
    res.status(404);
    res.json({ msg: "charge is not exist" });
    res.send();
    return;
  }

  charge.dateOfCharge = dateOfCharge;
  charge.amount = amount;
  charge.caseOf = caseOf;
  charge.payer = payer;
  charge.receivedBy = receivedBy;
  charge.typeOfCharge = typeOfCharge;

  await charge.save();
  res.json({ charge });
  res.status(200);
  res.send();
};

//get single charge
const getCharge = async (req, res) => {
  const { chargeId } = req.params;
  // charge can be undefined or object
  const charge = await ChargeModel.findOne({
    _id: chargeId,
  });
  if (!charge) {
    res.status(404);
    res.json({ msg: "charge not exist" });
    res.send();
    return;
  }

  res.json(charge);
  res.status(200);
  res.send();
};

//get  charge
const getCharges = async (req, res) => {
  const allCharge = await ChargeModel.find();

  res.json({ allCharge });
  res.status(200);
  res.send();
};

module.exports = {
  getCharge,
  addCharge,
  getCharges,
  updateCharge,
};
