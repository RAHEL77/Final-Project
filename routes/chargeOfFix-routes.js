const express=require ('express');
const chargeOfFixController=require ('../controllers/chargeOfFix-controller');


const router=express.Router();
router.get("/:chargeOfFixId", chargeOfFixController.getChargeOfFix)

router.get("/",chargeOfFixController.getChargeOfFix)

router.put("/",chargeOfFixController.updateChargeOfFix)

router.post("/",chargeOfFixController.addChargeOfFix)

module.exports=router