var express = require("express");
var router = express.Router();

let books = [];

/* GET books listing. */
router.get("/", (req, res) => {
  res.status(200).json({ data: books });
});



module.exports = router;
