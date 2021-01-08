

const routes = require("express").Router();
const registermodel = require("../models/register");
const bcryptjs = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const verify = require("../routes/verifyToken");

// register users 
routes.post("/register" , async (req , res ) => {
    // checking user email id in database 
    const emailExist = await registermodel.findOne({
        email : req.body.email
    });
    
    if(emailExist) {
        return  res.send("email already exist")
    };
    
    // password hashing 
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password , salt);

    
    const registration = new registermodel({
  
        username: req.body.username,
        email : req.body.email,
        password:hashedPassword,
        user_role: req.body.user_role,
        gender:req.body.gender
        // isActive : req.body.isActive,
        // createdOn : req.body.createdOn
        
    });
  
    
    try {

        const savedRegisteration = await registration.save();
        res.send(savedRegisteration);
        
        
        
    } catch (error) {
      
        if (error.name === 'MongoError' && error.code === 11000) {
            return res.send('duplicate emails not allowed');
            
          } 
          else if (error.message)
          {
            return res.send(error.message);
          }
          else{
              console.log(error);
            return res.send(error.code);

          }

    }
    
  });

module.exports = routes ;
