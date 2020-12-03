const express = require("express");
const router = express.Router();
const bookModel = require("../models/book");


//post request 
router.post("/addbook", (req, res, next) => {

    const reqBook = req.body;

    const book = new bookModel({ bookqty: reqBook.bookqty, bookname: reqBook.bookname });
    // console.log(book);
    book.save().then((data) => {

        res.json({ data })

    }).catch((err) => {
        err.whereError = "Error occured in saving book";
        next(err)
    })

});


module.exports = router;