import React from "react";
import { useParams } from "react-router-dom";
import EditBookForm from "../../components/EditBookForm/EditBookForm";

const EditBookPage = () => {
  const { id } = useParams();
  return <EditBookForm id={id} />;
};

export default EditBookPage;
