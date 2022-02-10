var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

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

/* DELETE a book */
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  //Check if book doesn't exists [404]
  const index = books.findIndex((book) => book._id === id);

  if (index === -1) {
    res.status(404).json({ message: "Book does not exist" });
  }

  //Delete old image
  fs.unlink(books[index].image.path, (err) => {
    if (err) {
      console.log(err);
    }
  });

  books = books.filter((book) => book._id !== id);

  res.status(200).json({ message: `Book with the id ${id} has been deleted successfully` });
});

/* PATCH update a book */
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { title, author, year, isbn } = req.body;

  //Check for invalid body [400]
  if (!title || !author || !year || !isbn) {
    res.status(400).json({ message: "Invalid body" });
    return;
  }

  //Check if book doesn't exists [404]
  const index = books.findIndex((book) => book._id === id);

  if (index === -1) {
    res.status(404).json({ message: "Book does not exist" });
  }

  //Update book at the index
  books[index] = { ...books[index], title, author, year, isbn };

  res.status(200).json({ data: books[index] });
});

module.exports = router;
