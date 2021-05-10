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
  chargeOfFixed:[ {
    type: mongoose.Types.ObjectId,
    require: true,
    ref:"Fixes"

  }],
  chargeOfRegular:[ {
    type: mongoose.Types.ObjectId,
    require: true,
    ref:"Regular"

  }],
  payments:[ {
    type: mongoose.Types.ObjectId,
    require: true,
    ref:"Payment"
  }],
  });

module.exports = mongoose.model("Building", BuildingSchema);
