const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const app = express();
require('dotenv').config();
const path = require("path");
const errorcontroler = require("./backend/errorhandling/errorcontroler")
const port = process.env.PORT | 8080;

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


//adding mongodb connection
require("./backend/database/db");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

//getting all routes
const bookroute = require("./backend/server/routes/book");
const msgroute = require("./backend/server/routes/msg");
const loginroute = require("./backend/server/routes/login");
const registerroute = require("./backend/server/routes/register");


// RESTful API root
app.use('/api', bookroute);
app.use('/api', msgroute);
app.use('/api', loginroute);
app.use('/api', registerroute);


//root point for testing
app.get("/", (req, res) => {
  res.send("root get request hit")
})



// Find 404 and hand over to error handler
app.use((req, res, next) => {
  const err = new Error('path not found');
  err.status = 404;
  err.message = "page not found"
  err.customMessage = "page not found"
  next(err);
});

//error handler
app.use(errorcontroler);


app.listen(process.env.PORT, () => {
  console.log(`library running at http://localhost:${port}`)
})





