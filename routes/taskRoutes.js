const express = require("express");

//creating instance of this class
const router = express.Router();
const Auth = require("../middlewares/auth");
const Task = require("../models/Task");


router.get('/test',Auth,(req,res)=>{
    res.json({
        message:"Task routes are working !!",
        user: req.user
    })
});



//creating a task- first we check whether the user is authenticated or not-we call middleware Auth
router.post('/',Auth,async (req,res)=>{
    try{
         //whenever we create a task we only do : description  , completed from req.body
         //  owner: req.user._id
         const task = new Task({
            ...req.body,
            owner:req.user._id
         })
        
         //we created doc now saving it
         await task.save();
         res.status(201).json({task,message:"Task created successfully"});

        
    }catch(error){
        res.status(400).send({error: error});

    }
})

//getting a task
router.get('/',Auth,async (req,res)=>{
    try{

      const tasks = await Task.find({
        owner: req.user._id
      })

      res.status(200).json({tasks, count: tasks.length, message:"Tasks fetched Successfully"});

    }catch(err){
        res.status(400).send({error:err});
    }
})

//fetch a task by id
router.get("/:id", Auth, async (req,res)=>{
    const taskid = req.params.id;

    try{
        const task = await Task.findOne({
            _id:taskid,
            owner:req.user._id
        })

        //if task is not found
        if(!task){
            return res.status(404).json({message:"Task not found"});
        }else{
            return res.status(200).json({task, message:"Task fetched successfully"});
        }

    }catch(err){
        res.status(500).send({error: err})
    }
});


//updating a task by id: we can do only to description and completed field 

router.patch("/:id", Auth, async (req,res)=>{
    const taskid = req.params.id;
    const updates = Object.keys(req.body);  //this will extract obje key-val pair from the body
    const allowedUpdates = ['description','completed'];

    const isValidOperation = updates.every(update => allowedUpdates.includes(update));   //this is check is all key is present inside teh allowedUpdates one by one then true or false

  if(!isValidOperation){
        return res.status(400).json({error:"Invalid updates"});
    }
    

    try{

        //we get that specific doc
    const task = await Task.findOne({
        _id:taskid,
        owner:req.user._id
    })

    //now we've to update
    if(!task){
        res.status(500).send({message:"Task not found"});
    }
 
    //task found
    updates.forEach(update => task[update] = req.body[update]);
    await task.save();

    res.json({
        message:"task updated successfully"
    })

    }catch(err){
        res.status(500).send({error: err})
    }
});


// delete a task by id

router.delete("/:id", Auth, async (req,res)=>{
    const taskid = req.params.id;
   

    try{

        //we get that specific doc
    const task = await Task.findOneAndDelete({
        _id:taskid,
        owner:req.user._id
    })

    //now we've to update
    if(!task){
        res.status(500).send({message:"Task not found"});
    }
 
    //task is found then
    res.json({
        message:"task delete successfully"
    })

    }catch(err){
        res.status(500).send({error: err})
    }
});



//perform create-read-update-delete task with api
module.exports = router;


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWVmMjg1ZjU5M2MyMjUxMzc1M2M5OWQiLCJpYXQiOjE3NzcyODE1Mjd9.d2raIys9nXKGco14zQhjkc1rdJ6tgNwlynoere5pOWM
//bijay token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWVmNDM4YjEzZGI2MDYwMjU4NGM5ZjMiLCJpYXQiOjE3NzcyODgwOTV9.0Tj10NZYjRhz8jenA6BYKZ5Y-Tj0cwk2JmHiGDzNeKk