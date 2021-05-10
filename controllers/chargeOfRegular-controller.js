const ChargeOfRegularModel = require("../models/chargeOfRegular-model");

//create
const addChargeOfRegular = async (req, res) => {
  const {
    dateOfpayment,
    amount,
    typeOfRegular,
    payer,
    receivedBy,
    typeOfPayment,
  } = req.body;

  const newChargeOfRegular = new ChargeOfRegularModel({
    dateOfpayment,
    amount,
    typeOfRegular,
    payer,
    receivedBy,
    typeOfPayment,
    userId: req.userId,
  });
  const createdChargeOfRegular = await newChargeOfRegular.save();
  res.json(createdChargeOfRegular);
  res.status(201);
  res.send();
};

//update
const updateChargeOfRegular = async (req, res) => {
  const {
    _id,
    dateOfpayment,
    amount,
    typeOfRegular,
    payer,
    receivedBy,
    typeOfPayment,
  } = req.body;
  // chargeOfRegular can be undifined or object-react has to send same field name =chargeOfRegularId
  const chargeOfRegular = await ChargeOfRegularModel.findOne({ _id: _id });
  if (!chargeOfRegular) {
    res.status(404);
    res.json({ msg: "chargeOfRegular is not exist" });
    res.send();
    return;
  }
//dateOfpayment, amount, typeOfRegular,payer,receivedBy,typeOfPayment
  chargeOfRegular.dateOfpayment = dateOfpayment;
  chargeOfRegular.amount = amount;
  chargeOfRegular.typeOfRegular = typeOfRegular;
  chargeOfRegular.payer = payer;
  chargeOfRegular.receivedBy = receivedBy;
  chargeOfRegular.typeOfPayment = typeOfPayment;

  await chargeOfRegular.save();
  res.json({ chargeOfRegular });
  res.status(200);
  res.send();
};

//get single chargeOfRegular
const getChargeOfRegular = async (req, res) => {
  const { chargeOfRegularId } = req.params;
  // chargeOfRegular can be undifined or object
  const chargeOfRegular = await ChargeOfRegularModel.findOne({
    _id: chargeOfRegularId,
  });
  if (!chargeOfRegular) {
    res.status(404);
    res.json({ msg: "chargeOfRegular not exist" });
    res.send();
    return;
  }

  res.json(chargeOfRegular);
  res.status(200);
  res.send();
};

//get  chargeOfRegular
const getChargeOfRegulars = async (req, res) => {
  const allChargeOfRegulars = await ChargeOfRegularModel.find();

  res.json({ allChargeOfRegulars });
  res.status(200);
  res.send();
};

module.exports = {
  getChargeOfRegulars,
  addChargeOfRegular,
  getChargeOfRegular,
  updateChargeOfRegular,
};
