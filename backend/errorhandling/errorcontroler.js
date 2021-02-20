  // const handleDuplicateKeyError = (err, res) => {
  //     const field = Object.keys(err.keyValue);
  //     const code = 409;
  //     const customMessage = `An account with that ${field} address already exists.`;
  //     res.status(code).send({customMessage : customMessage, field });
  // }

  //handle field formatting, empty fields, and mismatched passwords
  // const handleValidationError = (err, res) => {
  //     let errors = Object.values(err.errors).map(el => el.message);
  //     let fields = Object.values(err.errors).map(el => el.path);
  //     let code = 400;

  //     res.status(code).send({customMessage: errors , fields})

  // }


  //error controller function
  // module.exports = (err, req, res, next) => {
    
  //     if(err.name === 'ValidationError'){
  //      handleValidationError(err, res)
  //     }
  //     else if(err.name === "MongoError" && err.code == 11000){

  //       handleValidationError(err, res)
  //     }

  //     else if(err.code && err.code == 11000){
  //      handleDuplicateKeyError(err, res)
  //     }

  //     else {
        
  //       res.status(err.status || 500).json({
  //           message: err.message,
  //           reason: err.reason,
  //           customMessage: err.customMessage || "unknown error",
  //           })
  //     }
  // }


  module.exports = (err, req, res, next) => {
    console.log(err)
    if(err.name === 'ValidationError'){
      let errors = Object.values(err.errors).map(el => el.message);
      let fields = Object.values(err.errors).map(el => el.path);
      let code = 400;
  
      res.status(code).send({customMessage: errors , fields: fields})
     }
  
     else if(err.code && err.code == 11000){
      const field = Object.keys(err.keyValue);
      const code = 409;
      const customMessage = `An account with that ${field} address already exists.`;
      res.status(code).send({customMessage : customMessage, field });
     }
    else{
      res.json({
  
        status: err.status || 500,
        message: err.message,
        customMessage: err.customMessage,
  
    })
  
    }
  };