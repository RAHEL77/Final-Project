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
  supplier: {
    type: mongoose.Types.ObjectId,
    require: false,
    ref: "User",
  },
  costOfFix: {
    type: Number,
  },
  openedBy: {
    type: mongoose.Types.ObjectId,
    require: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Case", CasesSchema);
