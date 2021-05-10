const mongoose = require("mongoose");

const PaymentSchema = mongoose.Schema({
  dateOfPayment: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
  details: {
    startOfYear: {
      type: Number,
      required: true,
    },
    startOfMonth: {
      type: Number,
      required: true,
    },
    numOfMonths: {
      type: Number,
      required: true,
    },
  },
  payer: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: "User",
  },
  recivedBy: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Payment", PaymentSchema);
