const express = require("express");

//creating instance of this class
const router = express.Router();
const Auth = require("../middlewares/auth");


router.get('/test',Auth,(req,res)=>{
    res.json({
        message:"Task routes are working !!",
        user: req.user
    })
});



//creating a task- first we check whether the user is authenticated or not-we call middleware Auth
router.post('/',Auth,(req,res)=>{
    try{


        
    }catch(error){

    }
})




//perform create-read-update-delete task with api
module.exports = router;


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWVmMjg1ZjU5M2MyMjUxMzc1M2M5OWQiLCJpYXQiOjE3NzcyODE1Mjd9.d2raIys9nXKGco14zQhjkc1rdJ6tgNwlynoere5pOWM
//bijay token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWVmNDM4YjEzZGI2MDYwMjU4NGM5ZjMiLCJpYXQiOjE3NzcyODgwOTV9.0Tj10NZYjRhz8jenA6BYKZ5Y-Tj0cwk2JmHiGDzNeKk