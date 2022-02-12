import React, { useEffect, useState } from "react";
import { getBooks, parseError } from "../../api/api";
import BookCard from "../BookCard/BookCard";
import styles from "./BookCards.module.css";
import { useAlert } from "react-alert";


const BookCards = () => {
  //Hook that shows an alert
  const alert = useAlert();
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    try {
      const fetchedBooks = await getBooks();
      setBooks(fetchedBooks.data.data);
    } catch (err) {
      alert.error(parseError(err));
    }
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
