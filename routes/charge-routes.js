const express=require ('express');
const chargeController=require ('../controllers/charge-controller');


const router=express.Router();
router.get("/:chargeId", chargeController.getCharge)

router.get("/",chargeController.getCharge)

router.put("/",chargeController.updateCharge)

router.post("/",chargeController.addCharge)

module.exports=router