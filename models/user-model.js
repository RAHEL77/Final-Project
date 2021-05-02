const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  apartments:[{
    type:mongoose.Types.ObjectId,
    require:true,
    ref:"Apartment"
  }]
});

module.exports=mongoose.model("User",userSchema)