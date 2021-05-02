const express=require ('express');
const userController=require ('../controllers/user-controller');


const router=express.Router();
router.get("/:userId", userController.getUser)

router.get("/",userController.getUsers)

router.put("/:id",(req,res)=>{
    
})

router.post("/login",userController.login)

router.post("/register",userController.addUser)

router.delete("/:id",(req,res)=>{
    
})

module.exports=router