//we import jsonwebtoken as we compare the token which we get from api call
//also user model to access id for comparing 

const jwt = require("jsonwebtoken");
const User = require("../models/User");


const auth = async (req, res, next)=>{
    try{
       const token = req.header('Authorization').split(' ')[1];
        // Bearer will be replaced with space and real token

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        //checking whether the user exist or not
        const user = await User.findOne({
            _id: decoded._id,

        })

        if(!user){
            throw new Error('Unable to login, invalid credentials');
        }

        //modifiying the req //we are adding custom properties to the request object so the next middleware/route handler can use them.
        req.user = user;
        req.token = token;
        next();

    }catch(error){
        res.status(401).send({ error: error.message});

    }
}

//exporting this middleware
module.exports = auth;

