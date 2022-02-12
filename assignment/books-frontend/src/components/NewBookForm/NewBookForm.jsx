import axios from "axios";
import React from "react";
import BookForm from "../BookForm/BookForm";
import { useNavigate } from "react-router-dom";
import { createBook } from "../../api/api";

const NewBookForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { title, author, year, isbn, image } = values;
    try {
      await createBook(title, author, year, isbn, image);
      navigate("/books");
    } catch (err) {
      console.log(err);
    }
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
