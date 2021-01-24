const routes = require("express").Router();
const registermodel = require("../models/register");
const bcryptjs = require("bcryptjs");

// register users
routes.post("/register" , async (req , res , next ) => {
    // checking if same user exists or not
    const emailExist = await registermodel.findOne({
        email : req.body.email
    });

    if(emailExist) {

      return res.send("email address already exists")

    };
    if(!req.body.password){
      return res.send("please enter a strong password")
    }
    // password hashing 
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password , salt);

    const registration = new registermodel({
        username: req.body.username,
        email : req.body.email,
        password:hashedPassword,
        user_role: req.body.user_role,
        gender:req.body.gender
    });

    try {
      const savedRegisteration = await registration.save();
      res.send(savedRegisteration);
      console.log(savedRegisteration);

    } catch (err) {

      next(err)
    }
  });

module.exports = routes ;