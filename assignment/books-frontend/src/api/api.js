import axios from "axios";

/**Parse api error messages */
export const parseError = (err) => {
  try {
    const message = err.response.data.message;
    return message;
  } catch (e) {
    return err.toString();
  }
};

/**Get all books */
export const getBooks = async () => {
  return await axios.get("/books");
};

/**Get book by id */
export const getBookById = async (id) => {
  return await axios.get(`/books/${id}`);
};

/**Create a book*/
export const createBook = async (title, author, year, isbn, image) => {
  let data = new FormData();
  data.append("title", title);
  data.append("author", author);
  data.append("year", year);
  data.append("isbn", isbn);
  data.append("image", image);
  await axios.post("/books", data);
};

/**Update a book*/
export const updateBook = async (title, author, year, isbn, image, id) => {
  let data = new FormData();
  data.append("title", title);
  data.append("author", author);
  data.append("year", year);
  data.append("isbn", isbn);
  if (image) {
    data.append("image", image);
  }
  await axios.patch(`/books/${id}`, data);
};

/**Delete a book */
export const deleteBookById = async (id) => {
  await axios.delete(`/books/${id}`);
};
