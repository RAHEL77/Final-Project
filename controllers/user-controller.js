const UserModel = require("../models/user-model");

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
  const newUser = new UserModel({ email,name,password });
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


// const isValid=await bcrypt.compare(password,user.password);
// if (!isValid){
//     res.status(403);
//     res.send();
//     return;
// }
// //מזהה שרת מזהה משתמש
// const token =jwt.sign({userid:user._id.toString(),email:user.email}, 'Aatacr19bp',{expiresIn:'1h'})
// res.json({token,user:{name:user.name,email:user.email,id:user._id.toString()}});
// })


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



  // app.get('/users',async (req, res)=>{
  //   if (!req.headers.authorization){
  //       res.status(403);
  //       res.send();
  //       return;
  //   }
  //   console.log(req.headers.authorization);
  //   try{
  //       const token =req.headers.authorization.split(" ")[1];
  //       const verify= jwt.verify(token,'Aatacr19bp')
  //       console.log(verify);
  //   }catch(err){
  //       res.status(403);
  //       res.send();
  //       return;
  //   }


  //get single user
const getUsers = async (req, res) => {
  
    const allUsers = await UserModel.find();
       
    res.json({allUsers})
    res.status(200);
    res.send();
  
  };

module.exports={addUser,login,getUser,getUsers,updateUser}