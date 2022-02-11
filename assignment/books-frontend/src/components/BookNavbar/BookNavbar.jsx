import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "./BookNavbar.module.css";
import { Link } from "react-router-dom";

const BookNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className={styles.navContainer}>
        <Navbar.Brand href="">BookDB</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/books">
            Browse Books
          </Nav.Link>
          <Nav.Link as={Link} to="/books/new">
            New Book
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default BookNavbar;
