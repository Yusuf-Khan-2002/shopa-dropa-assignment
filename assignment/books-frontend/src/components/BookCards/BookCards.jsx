import React, { useEffect, useState } from "react";
import { getBooks } from "../../api/api";
import BookCard from "../BookCard/BookCard";

const BookCards = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBooks = await getBooks();
      setBooks(fetchedBooks.data.data);
    };

    fetchData();
  }, []);
  return (
    <div>
      {books.map((book) => {
        const { title, year, author, isbn, _id: id } = book;
        return (
          <BookCard
            key={id}
            title={title}
            year={year}
            author={author}
            isbn={isbn}
            image={`${process.env.REACT_APP_API_URL}/books/${id}/image?${Date.now()}`}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default BookCards;
