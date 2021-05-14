const express=require ('express');
const buildingController=require ('../controllers/building-controller');


const router=express.Router();
router.get("/:buildingId", buildingController.getBuilding)

router.get("/",buildingController.getBuilding)

router.put("/",buildingController.updateBuilding)

router.post("/",buildingController.addBuilding)

router.post("/:buildingId/users",buildingController.addUserToBuilding)
router.post("/:buildingId/apartments",buildingController.addApartmentToBuilding)

module.exports=router