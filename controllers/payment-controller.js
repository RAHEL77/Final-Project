const PaymentModel = require("../models/payment-model");
const BuildingModel = require("../models/building-model");

//create
const addPayment = async (req, res) => {
  const { dateOfPayment, amount, details, payer, recivedBy } = req.body;

  const newPayment = new PaymentModel({
    dateOfPayment,
    amount,
    details,
    payer,
    recivedBy,
  });
  const createdPayment = await newPayment.save();

  const building = await BuildingModel.findOne({ _id: "60981076ca47b02620072346" });
  if (!building) {
    res.status(404);
    res.json({ msg: "building is not exist" });
    res.send();
    return;
  }
  building.balance+=amount;
  building.payments.push(createdPayment);
  await building.save();
  res.json(createdPayment);
  res.status(201);
  res.send();
};

//update
const updatePayment = async (req, res) => {
  const {
    _id,
    dateOfPayment,
    amount,
    details,
    payer,
    recivedBy,
  } = req.body;
  // Payment can be undifined or object-react has to send same field name =paymentId
  const payment = await PaymentModel.findOne({ _id: _id });
  if (!payment) {
    res.status(404);
    res.json({ msg: "payment is not exist" });
    res.send();
    return;
  }

  payment.dateOfPayment = dateOfPayment;
  // payment.amount = amount;
  payment.details = details;
  payment.payer = payer;
  payment.recivedBy = recivedBy;

  await payment.save();
  res.json({ payment });
  res.status(200);
  res.send();
};

//get single payment
const getPayment = async (req, res) => {
  const { paymentId } = req.params;
  // payment can be undifined or object
  const payment = await PaymentModel.findOne({ _id: paymentId });
  if (!payment) {
    res.status(404);
    res.json({ msg: "payment not exist" });
    res.send();
    return;
  }

  res.json(payment);
  res.status(200);
  res.send();
};

//get  payment
const getPayments = async (req, res) => {
  const allPayment = await PaymentModel.find();
 
  res.json({ allPayment });
  res.status(200);
  res.send();
};

module.exports = { getPayments, addPayment, getPayment, updatePayment };
