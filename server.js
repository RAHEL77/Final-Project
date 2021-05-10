const express=require ('express');
const bodyParser=require ('body-parser');
const mongoose=require ('mongoose');
const dotEnv=require('dotenv');
const cors=require('cors');
const userRoutes=require('./routes/user-routes');
const apartmentRoutes=require('./routes/apartment-routes');
const casesRoutes=require('./routes/cases-routes');
const buildingRoutes=require('./routes/building-routes');
const paymentRoutes=require('./routes/payment-routes');
const chargeRoutes=require('./routes/charge-routes');
const authRoutes=require('./routes/auth-routes');
const tokenAuthe=require('./middleware/token-auth');

// const bcrypt=require('bcrypt');
// const jwt=require('jsonwebtoken');

dotEnv.config();

const app= express();
// app.use(bodyParser.urlencoded({ extended: false }));
//converts requests fields to js objects in req.body 
app.use(bodyParser.json());
app.use(cors());
const url=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.uxlqe.mongodb.net/household?authSource=admin&replicaSet=atlas-3y22ks-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`
//useNewUrlParser -- because of special carachters in url
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true }
    ).then(()=>{
    console.log("dbconnect");
});
app.use("/api/auth",authRoutes)
// app.use(tokenAuthe)
app.use("/api/users",userRoutes)
app.use("/api/cases",casesRoutes)
app.use("/api/apartments",apartmentRoutes)
app.use("/api/payments",paymentRoutes)
app.use("/api/building",buildingRoutes)
app.use("/api/charge",chargeRoutes)
// app.use("/api/building",chargeOfFixesRoutes)

// console.log(process.env);

app.listen(process.env.PORT || 5000);