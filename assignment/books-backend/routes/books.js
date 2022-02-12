var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

/**Setup multer for image upload */
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

/**Test Books */
let books = [
  {
    _id: "5080ac18-ca8a-408a-b5b7-43260511366a",
    title: "The Mandalorian Season 2 Junior Novel",
    author: "Joe Schreiber",
    year: "2022",
    isbn: "9781368075961",
    image: {
      fieldname: "image",
      originalname: "51bhHQ4XR3L.jpg",
      encoding: "7bit",
      mimetype: "image/jpeg",
      destination: "test_uploads/",
      filename: "test1",
      path: "test_uploads\\test1",
      size: 33123,
    },
  },
  {
    _id: "5e4ac93d-f933-4806-a1e4-e600dcd77db8",
    title: "Star Wars: The Mandalorian Junior Novel",
    author: "Joe Schreiber",
    year: "2021",
    isbn: "9781368057134",
    image: {
      fieldname: "image",
      originalname: "51Y0ou0g39L.jpg",
      encoding: "7bit",
      mimetype: "image/jpeg",
      destination: "test_uploads/",
      filename: "test2",
      path: "test_uploads\\test2",
      size: 34485,
    },
  },
];

/* GET books listing. */
router.get("/", (req, res) => {
  res.status(200).json({ data: books });
});


/* GET books by id */
router.get("/:id", (req, res) => {
  const { id } = req.params;

  //Check if book doesn't exists [404]
  const index = books.findIndex((book) => book._id === id);
  if (index === -1) {
    res.status(404).json({ message: "Book does not exist" });
    return;
  }

  res.status(200).json({ data: books[index] });
});


/* GET book image */
router.get("/:id/image", (req, res) => {
  const { id } = req.params;

  //Check if book doesn't exists [404]
  const index = books.findIndex((book) => book._id === id);
  if (index === -1) {
    res.status(404).json({ message: "Book does not exist" });
    return;
  }

  res.setHeader("Content-Type", books[index].image.mimetype);
  res.sendFile(books[index].image.path, { root: "." });
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
  books.unshift(book);

  res.status(200).json({ data: book });
});


/* DELETE a book */
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  //Check if book doesn't exists [404]
  const index = books.findIndex((book) => book._id === id);
  if (index === -1) {
    res.status(404).json({ message: "Book does not exist" });
    return;
  }

  //Delete old image only if its not a test image
  if (books[index].image.destination !== "test_uploads/") {
    fs.unlinkSync(books[index].image.path);
  }

  books = books.filter((book) => book._id !== id);

  res.status(200).json({ message: `Book with the id ${id} has been deleted successfully` });
});


/* PATCH update a book */
router.patch("/:id", upload.single("image"), (req, res) => {
  const { id } = req.params;
  const { title, author, year, isbn } = req.body;
  const image = req.file;

  //Check for invalid body [400]
  if (!title && !author && !year && !isbn && !image) {
    res.status(400).json({ message: "Invalid body" });
    return;
  }

  //Check if book doesn't exists [404]
  const index = books.findIndex((book) => book._id === id);
  if (index === -1) {
    res.status(404).json({ message: "Book does not exist" });
    return;
  }

  //Replace old image if there is a new one
  if (image) {
    //Only delete if its not a test image
    if (books[index].image.destination !== "test_uploads/") {
      fs.unlinkSync(books[index].image.path);
    }
    books[index]["image"] = image;
  }

  //Update book at the index if the parameter exists
  books[index]["title"] = title ? title : books[index]["title"];
  books[index]["author"] = author ? author : books[index]["author"];
  books[index]["year"] = year ? year : books[index]["year"];
  books[index]["isbn"] = isbn ? isbn : books[index]["isbn"];

  res.status(200).json({ data: books[index] });
});


/**Handle invalid route*/
router.use("/", (req, res) => {
  res.status(404).json({ message: "Route does not exist" });
});

module.exports = router;
