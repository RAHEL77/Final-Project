const express=require ('express');
const apartmentController=require ('../controllers/apartment-controller');


const router=express.Router();
router.get("/:apartmentId", apartmentController.getApartment)

router.get("/",apartmentController.getApartments)

router.put("/",apartmentController.updateApartment)

router.post("/",apartmentController.addApartment)

    

module.exports=router