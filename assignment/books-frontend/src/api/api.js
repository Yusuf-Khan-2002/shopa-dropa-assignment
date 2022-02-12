import axios from "axios";


/**Get all books */
export const getBooks = async () => {
    const books = await axios.get("/books");
    return books;
}

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