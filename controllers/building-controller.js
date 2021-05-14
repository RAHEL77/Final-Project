const BuildingModel = require("../models/building-model");
const UserModel = require("../models/user-model");

const UserRoles= {
  TENANT:"tenant",
  ADMIN:"admin",
  SUPPLIER:"supplier",
  APP:"app",
}

//create
const addBuilding = async (req, res) => {
  const {
    balance,
    addressOfBuilding,
    charges,
    payments,
    users,
  } = req.body;

  const newBuilding = new BuildingModel({
    balance,
    addressOfBuilding,
    charges,
    payments,
    users
    // userId: req.userId,
  });
  const createdBuilding = await newBuilding.save();
 const user = UserModel.findById(req.userId)
 user.userRole=UserRoles.ADMIN;
 await user.save();
  res.json(createdBuilding);
  res.status(201);
  res.send();
};
//
const addUserToBuilding=async(req,res)=>{
   const {user} = req.body;
   const {buildingId} = req.params;
   const building = await BuildingModel.findById(buildingId );
   
   if (!building) {
    res.status(404);
    res.json({ msg: "building is not exist" });
    res.send();
    return;
  }

  building.users.push(user) ;
  await building.save();
  res.json({ building });
  res.status(200);
  res.send();
}

const addApartmentToBuilding=async(req,res)=>{
  const {apartment} = req.body;
  const {buildingId} = req.params;
  const building = await BuildingModel.findById(buildingId );
  
  if (!building) {
   res.status(404);
   res.json({ msg: "building is not exist" });
   res.send();
   return;
 }

 building.apartments.push(apartment) ;
 await building.save();
 res.json({ building });
 res.status(200);
 res.send();

  

}


//update
const updateBuilding = async (req, res) => {
  const {
    _id,
    balance,
    addressOfBuilding,
    charges,
    payments,
    users,
    } = req.body;
  // building can be undifined or object-react has to send same field name =buildingId
  const building = await BuildingModel.findOne({ _id: _id });
  if (!building) {
    res.status(404);
    res.json({ msg: "building is not exist" });
    res.send();
    return;
  }

  building.balance = balance;
  building.addressOfBuilding = addressOfBuilding;
  building.charges = charges;
  building.payments = payments;
  building.users = users;

  await building.save();
  res.json({ building });
  res.status(200);
  res.send();
};

//get single building
const getBuilding = async (req, res) => {
  const { buildingId } = req.params;
  // building can be undifined or object
  const building = await BuildingModel.findOne({ _id: buildingId });
  if (!building) {
    res.status(404);
    res.json({ msg: "building not exist" });
    res.send();
    return;
  }

  res.json(building);
  res.status(200);
  res.send();
};

//get  buildings
const getBuildings = async (req, res) => {
  const allBuildings = await BuildingsModel.find();
 
  res.json({ allBuildings });
  res.status(200);
  res.send();
};

module.exports = { getBuildings, addBuilding, getBuilding, updateBuilding,addApartmentToBuilding,addUserToBuilding };
