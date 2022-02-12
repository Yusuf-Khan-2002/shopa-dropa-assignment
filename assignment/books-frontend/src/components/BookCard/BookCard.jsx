import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./BookCard.module.css";
import { Link } from "react-router-dom";
import DeleteBookModal from "../DeleteBookModal/DeleteBookModal";

const BookCard = ({ image, title, author, year, isbn, id, afterDelete }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.info}>
        <p className={styles.title}>{`${title} (${year})`}</p>
        <p>{author}</p>
        <p className={styles.isbn}>ISBN: {isbn}</p>
      </div>
      <div className={styles.buttons}>
        <Button className={styles.button} variant="dark" as={Link} to={`/books/${id}`}>
          Edit
        </Button>
        <DeleteBookModal id={id} afterDelete={afterDelete} />
      </div>
    </div>
  );
};

export default BookCard;
