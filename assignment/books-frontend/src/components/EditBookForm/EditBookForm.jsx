import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getBookById, parseError, updateBook } from "../../api/api";
import BookForm from "../BookForm/BookForm";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const EditBookForm = ({ id }) => {
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  //Hook that shows an alert
  const alert = useAlert();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBook = await getBookById(id);
        setBook(fetchedBook.data.data);
      } catch (err) {
        alert.error(parseError(err));
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    const { title, author, year, isbn, image } = values;
    try {
      await updateBook(title, author, year, isbn, image, id);
    } catch (err) {
      alert.error(parseError(err));
    }
    navigate("/books");
  };

  return (
    <div>
      {book && (
        <BookForm
          title={book.title}
          author={book.author}
          year={book.year}
          isbn={book.isbn}
          imageUrl={`${process.env.REACT_APP_API_URL}/books/${id}/image?${Date.now()}`}
          imageRequired={false}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        />
      )}
    </div>
  );
};

export default EditBookForm;
