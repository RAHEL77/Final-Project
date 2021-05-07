const mongoose = require("mongoose");

const CasesSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
  },
  maintenanceSupplier: {
    type: mongoose.Types.ObjectId,
    require: false,
    ref: "User",
  },
  costOfFix: {
    type: Number,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Cases", CasesSchema);
