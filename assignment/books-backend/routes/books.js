var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

/**Setup multer for image upload */
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

let books = [];

/* GET books listing. */
router.get("/", (req, res) => {
  res.status(200).json({ data: books });
});

/* POST create a book. */
router.post("/", upload.single("image"), (req, res) => {
  const { title, author, year, isbn } = req.body;
  const image = req.file;

  //Check for invalid body [400]
  if (!title || !author || !year || !isbn || !image) {
    res.status(400).json({ message: "Invalid body" });
    return;
  }

  //Add book to array
  const id = uuidv4();
  const book = { _id: id, title, author, year, isbn, image };
  books.push(book);

  res.status(200).json({ data: book });
});

module.exports = router;
