const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const app = express();
require('dotenv').config();
const port = process.env.PORT | 3000;
//adding mongodb connection
require("./backend/database/db");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

//getting all routes
const bookroute = require("./backend/server/routes/book");

// RESTful API root
app.use('/api', bookroute);

//root point for testing
app.get("/", (req, res) => {
  res.send("root get request hit")
})



// Find 404 and hand over to error handler
app.use((req, res, next) => {
  const err = new Error('path not found');
  err.status = 404;
  err.message = "esa koi page ni"
  next(err);
});

//error handler
app.use((err, req, res, next) => {

  res.status(err.status || 500);

  res.json({

      status: err.status,
      message: err.message,
      reason: err.reason,
      myreason: err.myreason,
      whereError : err.whereError

  })
});


app.listen(port, () => {
  console.log(`library running at http://localhost:${port}`)
})


