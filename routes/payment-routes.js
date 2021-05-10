const express=require ('express');
const paymentController=require ('../controllers/payment-controller');


const router=express.Router();
router.get("/:paymentId", paymentController.getPayment)

router.get("/",paymentController.getPayment)

router.put("/",paymentController.updatePayment)

router.post("/",paymentController.addPayment)

module.exports=router