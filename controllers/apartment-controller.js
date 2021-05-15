const ApartmentModel = require("../models/apartment-model");

//create 
const addApartment = async (req, res) => {
  const { numOfApartment, floor, sizeOfApartment, userId } = req.body;
  const apartment = await ApartmentModel.findOne({
    numOfApartment: numOfApartment,
  });
  if (apartment) {
    res.status(422);
    res.json({ msg: "apartment exist" });
    res.send();
    return;
  }
  const newApartment = new ApartmentModel({
    numOfApartment,
    floor,
    sizeOfApartment,
    userId,
  });
  const createdApartment = await newApartment.save();
  console.log(createdApartment._id);
  res.json(createdApartment);
  res.status(201);
  res.send();
};

//update  apartment
const updateApartment = async (req, res) => {
  const {
    apartmentId,
    numOfApartment,
    floor,
    sizeOfApartment,
    userId,
  } = req.body;
  // apartment can be undifined or object
  const apartment = await ApartmentModel.findOne({ _id: apartmentId });
  if (!apartment) {
    res.status(404);
    res.json({ msg: "apartment is not exist" });
    res.send();
    return;
  }
  apartment.sizeOfApartment = sizeOfApartment;
  apartment.userId = userId;
  await apartment.save();
  res.json({ apartment });
  res.status(200);
  res.send();
};

//get single apartment
const getApartment = async (req, res) => {
  const { apartmentId } = req.params;
  // apartment can be undifined or object
  const apartment = await ApartmentModel.findOne({ _id: apartmentId });
  if (!apartment) {
    res.status(404);
    res.json({ msg: "apartment not exist" });
    res.send();
    return;
  }

  res.json({ apartment });
  res.status(200);
  res.send();
};


//get  apartments
const getApartments = async (req, res) => {
  const allApartments = await ApartmentModel.find();

  res.json({ allApartments });
  res.status(200).send();
};

module.exports = { getApartments, addApartment, getApartment, updateApartment };
