const mongoose = require("mongoose");

const ChargeOfRegularSchema = mongoose.Schema({
  dateOfpayment: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  typeOfRegular:[ {
    type: String,
    require: true,
  }],
  payer:[ {
    type: mongoose.Types.ObjectId,
    require: true,
    ref:"User"
  }],
  receivedBy:[ {
    type: mongoose.Types.ObjectId,
    require: true,
    ref:"User"
  }],
  typeOfPayment: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref:"Payment"
  },
  });

module.exports = mongoose.model("Regular", ChargeOfRegularSchema);
