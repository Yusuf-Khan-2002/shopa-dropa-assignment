import React from "react";
import { useState } from "react";
import styles from "./DeleteBookModal.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteBookById, parseError } from "../../api/api";
import { useAlert } from "react-alert";

const DeleteBookModal = ({ id, afterDelete }) => {
  const [visible, setVisible] = useState(false);

  //Hook that shows an alert
  const alert = useAlert();

  const handleHide = () => {
    setVisible(false);
  };
  const handleShow = () => {
    setVisible(true);
  };

  const handleDelete = async () => {
    try {
      await deleteBookById(id);
      afterDelete();
    } catch (err) {
      alert.error(parseError(err));
    }

    handleHide();
  };

  return (
    <div>
      <Button className={styles.button} onClick={handleShow} variant="secondary">
        Delete
      </Button>

      <Modal show={visible} onHide={handleHide}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to proceed?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This action cannot be reversed.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHide}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteBookModal;
