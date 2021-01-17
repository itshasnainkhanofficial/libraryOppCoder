const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email : {
        type : String,
        required: [true, 'email is required'],
        trim: true,
        unique : [true , "email should be unique"]
      },

      password : {
        type : String,
        required : true
      },
});

module.exports = mongoose.model("loginSchema" , loginSchema);
