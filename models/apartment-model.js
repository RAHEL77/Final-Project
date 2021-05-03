const mongoose = require("mongoose");

const ApartmentSchema = mongoose.Schema({
  numOfApartment: {
    type: Number,
    required: true,
    unique: true,
    },
  floor: {
    type: Number,
    required: true,
  },
  sizeOfApartment:{
    type: Number,
    required: true,
  },
  userId:{
    type:mongoose.Types.ObjectId,
    require:true,
    ref:"User"
    }
});

module.exports=mongoose.model("Apartment",ApartmentSchema)