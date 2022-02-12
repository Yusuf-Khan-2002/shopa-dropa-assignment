import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getBookById, updateBook } from "../../api/api";
import BookForm from "../BookForm/BookForm";
import { useNavigate } from "react-router-dom";

const EditBookForm = ({ id }) => {
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBook = await getBookById(id);
        setBook(fetchedBook.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    const { title, author, year, isbn, image } = values;
    try {
      await updateBook(title, author, year, isbn, image, id);
      navigate("/books");
    } catch (err) {
      console.log(err);
    }
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
