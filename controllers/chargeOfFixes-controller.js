const ChargeOfFixesModel = require("../models/chargeOfFixes-model");

//create
const addChargeOfFix = async (req, res) => {
  const {
    dateOfPayment,
    amount,
    caseOf,
    payer,
    receivedBy,
    typeOfPayment,
  } = req.body;

  const newChargeOfFixes = new ChargeOfFixesModel({
    dateOfPayment,
    amount,
    caseOf,
    payer,
    receivedBy,
    typeOfPayment,
    userId: req.userId,
  });
  const createdChargeOfFixes = await newChargeOfFixes.save();
  res.json(createdChargeOfFixes);
  res.status(201);
  res.send();
};

//update
const updateChargeOfFix = async (req, res) => {
  const {
    _id,
    dateOfPayment,
    amount,
    caseOf,
    payer,
    receivedBy,
    typeOfPayment,
    userId,
  } = req.body;
  // chargeOfFixes can be undifined or object-react has to send same field name =caseId
  const chargeOfFixes = await ChargeOfFixesModel.findOne({ _id: _id });
  if (!chargeOfFixes) {
    res.status(404);
    res.json({ msg: "chargeOfFixes is not exist" });
    res.send();
    return;
  }

  chargeOfFixes.dateOfPayment = dateOfPayment;
  chargeOfFixes.amount = amount;
  chargeOfFixes.caseOf = caseOf;
  chargeOfFixes.payer = payer;
  chargeOfFixes.receivedBy = receivedBy;
  chargeOfFixes.userId = userId;
  chargeOfFixes.typeOfPayment = typeOfPayment;

  await chargeOfFixes.save();
  res.json({ chargeOfFixes });
  res.status(200);
  res.send();
};

//get single chargeOfFixes
const getChargeOfFix = async (req, res) => {
  const { chargeOfFixesId } = req.params;
  // chargeOfFixes can be undefined or object
  const chargeOfFixes = await ChargeOfFixesModel.findOne({
    _id: chargeOfFixesId,
  });
  if (!chargeOfFixes) {
    res.status(404);
    res.json({ msg: "chargeOfFixes not exist" });
    res.send();
    return;
  }

  res.json(chargeOfFixes);
  res.status(200);
  res.send();
};

//get  chargeOfFixes
const getChargeOfFixes = async (req, res) => {
  const allChargeOfFixes = await ChargeOfFixesModel.find();

  res.json({ allChargeOfFixes });
  res.status(200);
  res.send();
};

module.exports = {
  getChargeOfFixes,
  addChargeOfFix,
  getChargeOfFix,
  updateChargeOfFix,
};
