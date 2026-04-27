const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//creating instance of this class
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("User routes are working");
});

//user register API
router.post("/register",async (req,res)=>{

try{
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    //creating user for db
    const user = new User({name, email, password});
    await user.save();

    //response for this api
    res.status(201).json({
        message:"User registered successfully",
        user
    });

}catch(error){
    res.status(500).json({
        message:error.message
    });
}
});




//login a user API
router.post("/login",async (req,res)=>{
    try{
          const {email, password} = req.body;
          const user = await User.findOne({ email });
           

          //is user not found
          if(!user){
            throw new Error("Unable to login, Invalid credentials ");

          }

          //user found
          const isMatch = await bcrypt.compare(password, user.password);

          if(!isMatch){
            throw new Error("Unable to login, Invalid credentials ");
          }

          //when email and password are correct then create a token 
          const token  = jwt.sign({
            _id:user._id.toString()
          },process.env.JWT_SECRET_KEY);

          res.send({user, token, message:"Logged in successfully"});
    }catch(error){
        res.status(400).json({
            message:error.message
        })
    }
  

});


module.exports = router;