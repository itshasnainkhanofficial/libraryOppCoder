const mongoose = require("mongoose");


const msgSchema = new mongoose.Schema({
    name : {type : String , required:true , maxlength : 100},
    email : {type:String , required: true},
    message : {type : String , required : true}
})


module.exports = mongoose.model("msgSchema", msgSchema , "msgCollection")