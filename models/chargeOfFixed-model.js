const mongoose = require("mongoose");

const chargeOfFixedSchema = mongoose.Schema({
  dateOfPayment: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  caseOf:[ {
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
  }
  });

module.exports = mongoose.model("Fixed", chargeOfFixedSchema);
