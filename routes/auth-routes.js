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

router.post("/login",userController.login)

router.post("/register",userController.addUser)

// router.delete("/:id",userController.deleteUser)

module.exports=router