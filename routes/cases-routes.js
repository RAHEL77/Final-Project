const express=require ('express');
const casesController=require ('../controllers/cases-controller');


const router=express.Router();
router.get("/:caseId", casesController.getCase)

router.get("/",casesController.getCases)

router.put("/",casesController.updateCase)

router.post("/",casesController.addCase)

    

module.exports=router