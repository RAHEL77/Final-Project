const mongoose = require("mongoose");
const chargeTypes= {
  ELECTRICTY:"electricity",
  WATER:"water",
  GARDENING:"gardening",
  FIX:"fix",
}
const chargeSchema = mongoose.Schema({
  dateOfCharge: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  caseOf:[ {
    type: mongoose.Types.ObjectId,
    require: true,
    ref:"Case"
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
  typeOfCharge: {
    type: String,
    require: true,
    default:chargeTypes.WATER
  }
  });

module.exports = mongoose.model("Charge", chargeSchema);
