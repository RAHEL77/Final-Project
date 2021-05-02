const express=require ('express');
const userController=require ('../controllers/user-controller');


const router=express.Router();
router.get("/:id",(req,res)=>{
    
})

router.get("/",(req,res)=>{
    
})

router.put("/:id",(req,res)=>{
    
})

router.post("/login",userController.login)

router.post("/register",userController.addUser)

router.delete("/:id",(req,res)=>{
    
})

module.exports=router