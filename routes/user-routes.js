const e = require('express');
const express=require ('express');
const userController=require ('../controllers/user-controller');

// const req={
//     host:'localhost',
//     port: 5000,
//     body:{
//         email: 'sdfds'
//     },
//     params:{}
// }
const router=express.Router();
router.use("/",(req,res,next)=>{
    if (req.body && req.body.email) {
        req.body.email=req.body.email.toUpperCase();
    }
    next()
})
router.get("/:userId", userController.getUser)

router.get("/",userController.getUsers)

router.put("/",userController.updateUser)

router.delete("/:userId",userController.deleteUser)

module.exports=router