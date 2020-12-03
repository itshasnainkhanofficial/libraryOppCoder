const express = require("express");
const router = express.Router();
const messageModal = require("../models/msg");


//post request 
router.post("/sendMsg", (req, res, next) => {

    const reqMsg = req.body;

    const mail = new messageModal({ name: reqMsg.name, email: reqMsg.email , message : reqMsg.message });
    mail.save().then((data) => {

        res.json({ data })

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