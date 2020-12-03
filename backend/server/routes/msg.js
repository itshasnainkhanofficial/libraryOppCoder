const express = require("express");
const router = express.Router();
const messageModal = require("../models/msg");
const nodemailer = require("nodemailer");


// let transporter = nodemailer.createTransport({
//     host: process.env.HOST,
//     port: process.env.HOST_PORT,
//     secure: process.env.HOST_SECURITY, 
//     auth: {
//       user: process.env.ADD, 
//       pass: process.env.PASS, 
//     },

//   });



//post request 
router.post("/sendMsg", (req, res, next) => {

    const reqMsg = req.body;

    const mail = new messageModal({ name: reqMsg.name, email: reqMsg.email , message : reqMsg.message });

    mail.save().then((data) => {
        res.json( data )
      //  transporter.sendMail({
      //      subject: data.name,
      //       from: data.email,
      //       to: process.env.ADD,
      //       html: data.message
      //     }
      //     , (err , data) => {

      //       if(err) {
        
      //         res.json({status: 'msg sending fail'})
      //           console.log("fail")
      //       } 
      //       else {
        
      //         res.json( data)
      //           console.log("passed")
      //       }
        
      //     }
          
      //     )

    }).catch((err) => {
        err.whereError = "Error occured in saving msg";
        next(err)
    })

});

router.get("/getMsg" , async (req, res , next) => {

    await messageModal.find((err, result) =>{
        if (!err) {
            const allMsg = result;
            res.status(200).json(allMsg);
        }
        
        else {
            err.message = "Failed to load msgs"
            next(err);
        }
    });
    
    

})
module.exports = router;