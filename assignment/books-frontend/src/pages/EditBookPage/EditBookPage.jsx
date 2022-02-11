import React from "react";
import { useParams } from "react-router-dom";

const EditBookPage = () => {
  const { id } = useParams();
  return <div>Edit Book Page id: {id}</div>;
};

export default EditBookPage;
