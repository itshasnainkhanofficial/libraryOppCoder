const mongoose  = require('mongoose');
// to see all deprecations like { useNewUrlParser : true , useUnifiedTopology: true , useCreateIndex:true } follow below link
// https://mongoosejs.com/docs/deprecations.html

//using promise

mongoose.connect(process.env.DB_URI , { useNewUrlParser : true , useUnifiedTopology: true , useCreateIndex:true })
.then((db) => console.log("database connected succesfully"))
.catch((err) => {
console.log("mongodb database connection failed" , err);
process.exit(1);
});