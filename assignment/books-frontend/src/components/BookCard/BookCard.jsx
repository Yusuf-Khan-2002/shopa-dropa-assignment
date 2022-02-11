import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./BookCard.module.css";
import { Link } from "react-router-dom";

const BookCard = ({ image, title, author, year, isbn, id }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} />
      <div className={styles.info}>
        <p className={styles.title}>{`${title} (${year})`}</p>
        <p>{author}</p>
        <p className={styles.isbn}>ISBN: {isbn}</p>
      </div>
      <div className={styles.buttons}>
        <Button className={styles.button} variant="dark" as={Link} to={`/books/${id}`}>
          Edit
        </Button>
        <Button className={styles.button} variant="secondary">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
