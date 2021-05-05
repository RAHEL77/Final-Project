const UserModel = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//update  user
const updateUser = async (req, res) => {
  const { email,name,password } = req.body;
  // user can be undefined or object 
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    res.status(404);
    res.json({ msg: "user not exist" });
    res.send();
    return;
  }
  user.name=name;
  user.password=password;
  await user.save();
  res.json({user})
  res.status(200);
  res.send();

};


//create user
const addUser = async (req, res) => {
  const { email,name,password } = req.body;
  const existingUser = await UserModel.findOne({ email: email });
  if (existingUser) {
    res.status(422);
    res.json({ msg: "user exist" });
    res.send();
    return;
  }
  let hashedPassword;
  try{
    hashedPassword=await bcrypt.hash(password,10) 
  }catch(err){
    res.status(400).send("invalid password")
    return
  }
  //hashpassword to mongodb
  const newUser = new UserModel({ email,name,password:hashedPassword });
  console.log(newUser);
  const createdUser =await newUser.save();
  res.status(201).json({createdUser});
  res.send();
}



//login
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password);
  const existingUser = await UserModel.findOne({ email: email });
  if (!existingUser) {
    res.status(403);
    res.json({ msg: "email not exist" });
    res.send();
    return;
  }
  let passwordMatch;
  try{
    passwordMatch= await bcrypt.compare(password,existingUser.password);
  }catch(err){
    //compare didnt understand this two values
    res.status(503).send("server is busy please try again")
    return
  }
  console.log(passwordMatch);
  if (!passwordMatch) {
    res.status(403);
    res.json({ msg: "password incorrect" });
    res.send();
    return;
  }
  const token =jwt.sign({userid:existingUser._id.toString(),email:existingUser.email}, 'Aatacr19bp',{expiresIn:'1h'})
  res.json({token,user:{name:existingUser.name,email:existingUser.email,id:existingUser._id.toString()}});

  res.status(200);
  res.send();

};





//get single user
const getUser = async (req, res) => {
    const {userId} = req.params;
  
    const existingUser = await UserModel.findOne({ _id: userId });
    if (!existingUser) {
      res.status(404);
      res.json({ msg: "user not exist" });
      res.send();
      return;
    }
    
    res.json({existingUser})
    res.status(200);
    res.send();
  
  };




  //get single user
const getUsers = async (req, res) => {
  
    const allUsers = await UserModel.find();
       
    res.json({allUsers})
    res.status(200);
    res.send();
  
  };

module.exports={addUser,login,getUser,getUsers,updateUser}