const CasesModel = require("../models/cases-model");

//create 
const addCase = async (req, res) => {
    const {description, isDone, supplier,costOfFix,openedBy } = req.body;
    
    const newCase = new CasesModel({
      description,
      isDone,
      supplier,
      costOfFix,
      openedBy,
      userId:req.userId
    });
    const createdCase = await newCase.save();
    res.json(createdCase);
    res.status(201);
    res.send();
  };


//update  
const updateCase = async (req, res) => {
  const {
    _id,
    description,
    isDone,
    supplier,
    costOfFix,
    openedBy,
    userId,
  } = req.body;
  // case can be undifined or object-react has to send same field name =caseId
  const case1 = await CasesModel.findOne({ _id: _id });
  if (!case1) {
    res.status(404);
    res.json({ msg: "case is not exist" });
    res.send();
    return;
  }

  case1.isDone = isDone;
  case1.userId = userId;
  case1.supplier = supplier;
  case1.costOfFix = costOfFix;
  case1.description = description;
  case1.openedBy=openedBy;

  await case1.save();
  res.json({ case1 });
  res.status(200);
  res.send();
};

//get single case
const getCase = async (req, res) => {
  const { caseId } = req.params;
  // case can be undifined or object
  const case1 = await CasesModel.findOne({ _id: caseId });
  if (!case1) {
    res.status(404);
    res.json({ msg: "case not exist" });
    res.send();
    return;
  }

  //case = {_id: '45435tf43t6543frt', description: 'wall is dirty', isDone: false...}
  res.json(case1);
  res.status(200);
  res.send();
};

//get  cases
const getCases = async (req, res) => {
  const allCases = await CasesModel.find();
  // for (let i=0; i<allCases.length; i++){
  //   const caseId =allCases[i]._id.toString();
  //   allCases[i].caseId=caseId;
  //   //create new object
  //   allCases[i]={...allCases[i],caseId} 
  // }
  res.json({ allCases });
  res.status(200);
  res.send();
};

module.exports = { getCases, addCase, getCase, updateCase };
