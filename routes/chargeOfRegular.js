const express=require ('express');
const chargeOfRegularController=require ('../controllers/ChargeOfRegular-controller');


const router=express.Router();
router.get("/:paymentId", chargeOfRegularController.getChargeOfRegular)

router.get("/",chargeOfRegularController.getChargeOfRegular)

router.put("/",chargeOfRegularController.updateChargeOfRegular)

router.post("/",chargeOfRegularController.addChargeOfRegular)

module.exports=router