// init code
const mongoose = require('mongoose');


// register user schema 
const registerSchema = new mongoose.Schema({

    username : {
        type : String,
        required : [true , 'username is required'],
        minlength:  [3 , "username must be consist of minimum 3 characters"],
        maxlength: [50 , "username cannot be consits of more than 50 characters"],
        lowercase: true,
        trim: true,
      },
     
      email : {
        type : String,
        required: [true, 'email is required'],
        unique : [true , 'That username is taken'],
        trim: true,
      },

      password : {
        type : String,
        required : [true , 'password is required']
      },
      gender : {
        type : Number,
        required: true
      }
      ,
      user_role : {
          type : Number,
          required : true
      }

      // user_permissions : {
      //     type : [String],
      //     required: true
      // } ,

      // isActive : {
      //   type : Boolean,
      //   default : true
      // },
      // createdOn : {
      //   type : Date,
      //   default : Date.now()
      // }

});



// module exports
module.exports = mongoose.model("registerSchema" , registerSchema);






















// username : {
    //     type : String,
    //     required : true,
    //     minlength: 3,
    //     maxlength: 15,
    //     lowercase: true, 
    //     trim: true
    //   },
      // email : {
      //   type : String,
      //   required : true,
      //   unique : true
      // },
      
      // password : {
      //   type : String,
      //   required : true
      // },
      // gender : {
      //   type : Number,
      //   required: true
      // }, 
      // user_role : {
      //     type : Number,
      //     required : true
      // }

      // user_permissions : {
      //     type : [String],
      //     required: true
      // } ,

      // isActive : {
      //   type : Boolean,
      //   default : true
      // },
      // createdOn : {
      //   type : Date,
      //   default : Date.now()
      // }