const mongoose = require("mongoose");

const BuildingSchema = mongoose.Schema({
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
  addressOfBuilding: {
    type: String,
    required: true,
  },
  charges:[ {
    type: mongoose.Types.ObjectId,
    require: true,
    ref:"Charge"

  }],
   payments:[ {
    type: mongoose.Types.ObjectId,
    require: true,
    ref:"Payment"
  }],
  });

module.exports = mongoose.model("Building", BuildingSchema);
