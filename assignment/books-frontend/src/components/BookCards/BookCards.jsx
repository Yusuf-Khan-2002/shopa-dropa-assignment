import React, { useEffect, useState } from "react";
import { getBooks } from "../../api/api";
import BookCard from "../BookCard/BookCard";
import styles from "./BookCards.module.css";


const BookCards = () => {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const fetchedBooks = await getBooks();
    setBooks(fetchedBooks.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {books && books.length !== 0 ? (
        books.map((book) => {
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
              afterDelete={fetchData}
            />
          );
        })
      ) : (
        <div className={styles.noBooks}>Add a book to get started</div>
      )}
    </div>
  );
};

export default BookCards;
