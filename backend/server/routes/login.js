const express = require("express");
const router = express.Router();
const registermodel = require("../models/register");
const bcryptjs = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const verify = require("../routes/verifyToken");


router.post("/", async (req , res ) => {

    const user = await registermodel.findOne({

        email: req.body.email
    });

    if(!user){

        return res.send("email not registered");
    }
    

   else{

    const validatePassword = await bcryptjs.compare(req.body.password , user.password);

    if(!validatePassword){

        return res.send("password did not matched");
    }

    else{
        // const token = jwt.sign({_id: user._id} , process.env.MENQBTAUN);
        // res.header("auth-token" , token).send({token : token});
        return res.send("password matched successfully");
    }
   }
})

// exporting routes
module.exports = router ;