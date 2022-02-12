import axios from "axios";
import React from "react";
import BookForm from "../BookForm/BookForm";
import { useNavigate } from "react-router-dom";
import { createBook, parseError } from "../../api/api";
import { useAlert } from "react-alert";

const NewBookForm = () => {
  const navigate = useNavigate();
  //Hook that shows an alert
  const alert = useAlert();

  const handleSubmit = async (values) => {
    const { title, author, year, isbn, image } = values;
    try {
      await createBook(title, author, year, isbn, image);
    } catch (err) {
      alert.error(parseError(err));
    }
    navigate("/books");
  };

  return (
    <BookForm
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    />
  );
};

export default NewBookForm;
