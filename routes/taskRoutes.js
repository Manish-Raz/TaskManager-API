const express = require("express");

//creating instance of this class
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("Task routes are working");
});

//perform create-read-update-delete task with api
module.exports = router;