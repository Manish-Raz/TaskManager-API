//it contain mongodb datat

const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME =process.env.dbName;


mongoose.connect(MONGODB_URI,{
    dbName:DB_NAME
}).then(()=>{
    console.log("MONGO DB connection is fine")
}).catch((err)=>{
    console.log("Error in connecting to database");
})