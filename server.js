const express=require ('express');
const bodyParser=require ('body-parser');
const mongoose=require ('mongoose');
const dotEnv=require('dotenv');
const cors=require('cors');
const userRoutes=require('./routes/user-routes');


dotEnv.config();

const app= express();
//converts requests fields to js objects in req.body 
app.use(bodyParser.json());
app.use(cors());
const url=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.uxlqe.mongodb.net/authe?authSource=admin&replicaSet=atlas-3y22ks-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`
//useNewUrlParser -- because of special carachters in url
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true }
    ).then(()=>{
    console.log("dbconnect");
});


app.use("/api/users",userRoutes)

// console.log(process.env);

app.listen(process.env.PORT || 5000);