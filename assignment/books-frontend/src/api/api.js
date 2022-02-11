import axios from "axios";


/**Get all books */
export const getBooks = async () => {
    const books = await axios.get("/books");
    return books;
}