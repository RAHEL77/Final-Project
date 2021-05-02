const UserModel = require("../models/user-model");

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
  const newUser = new UserModel({ email,name,password });
  await newUser.save();
  res.status(201);
  res.send();

};

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
  if (existingUser.password != password) {
    res.status(403);
    res.json({ msg: "password incorrect" });
    res.send();
    return;
  }
  res.json({existingUser})
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

module.exports={addUser,login,getUser,getUsers}