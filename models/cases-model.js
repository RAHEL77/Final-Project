const mongoose = require("mongoose");

const CasesSchema = mongoose.Schema({
  IssueId: {
    type: String,
    required: true,
    unique: true,
    },
  Description: {
    type: String,
    required: true,
  },
  IsDone:{
    type: Boolean,
    required: true,
  },
  MaintenanceSupplier:{
    type:String,
    require:false,
  }
  CostOfFix:{
      type:Number,
  }
});

module.exports=mongoose.model("Cases",CasesSchema)