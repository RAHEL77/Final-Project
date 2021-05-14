const mongoose = require("mongoose");
const UserRoles= {
  TENANT:"tenant",
  ADMIN:"admin",
  SUPPLIER:"supplier",
  APP:"app",
}
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
  userRole:{
    type:String,
    required:true,
    default:UserRoles.TENANT
  }
});

module.exports=mongoose.model("User",userSchema);