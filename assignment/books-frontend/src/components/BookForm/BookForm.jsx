import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import styles from "./BookForm.module.css";
import Button from "react-bootstrap/esm/Button";
import { Formik } from "formik";
import * as yup from "yup";
import defaultImage from "./gray.png";

const BookForm = ({ title, author, year, isbn, imageUrl, imageRequired = true, onSubmit }) => {
  const schema = yup.object().shape({
    title: yup.string().label("Title").required(),
    author: yup.string().label("Author").required(),
    year: yup
      .number()
      .min(0)
      .max(new Date().getFullYear() + 10)
      .label("Year")
      .required(),
    isbn: yup
      .string()
      .label("ISBN")
      .test(
        "length",
        "Must be 13 (ISBN-13) or 10 (ISBN-10) digits long",
        (isbn) => isbn && (isbn.length === 10 || isbn.length === 13)
      )
      .test("Only digits", "Invalid ISBN number", (isbn) => /^\d+$/.test(isbn))
      .required(),
    image: imageRequired
      ? yup.mixed().label("Cover Image").required()
      : yup.mixed().label("Cover Image"),
  });

  const getDefaultImage = () => {
    if (imageUrl) {
      return imageUrl;
    }

    return defaultImage;
  };

  return (
    <Formik
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validationSchema={schema}
      initialValues={{
        title: title ? title : "",
        author: author ? author : "",
        year: year ? year : "",
        isbn: isbn ? isbn : "",
        image: null,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        isSubmitting,
        setFieldValue,
      }) => (
        <div className={styles.formContainer}>
          <img
            className={styles.image}
            src={values.image ? URL.createObjectURL(values.image) : getDefaultImage()}
          />
          <Form className={styles.form} onSubmit={handleSubmit}>
            <Row className={styles.row}>
              <Form.Group md as={Col} controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  isInvalid={touched.title && errors.title}
                  isValid={touched.title && !errors.title}
                  onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md as={Col} controlId="formAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={values.author}
                  onChange={handleChange}
                  isInvalid={touched.author && errors.author}
                  isValid={touched.author && !errors.author}
                />
                <Form.Control.Feedback type="invalid">{errors.author}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className={styles.row}>
              <Form.Group md as={Col} controlId="formYear">
                <Form.Label>Year of Publishing</Form.Label>
                <Form.Control
                  type="number"
                  name="year"
                  value={values.year}
                  onChange={handleChange}
                  isInvalid={touched.year && errors.year}
                  isValid={touched.year && !errors.year}
                />
                <Form.Control.Feedback type="invalid">{errors.year}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group md as={Col} controlId="formIsbn">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  type="text"
                  name="isbn"
                  value={values.isbn}
                  onChange={handleChange}
                  isInvalid={touched.isbn && errors.isbn}
                  isValid={touched.isbn && !errors.isbn}
                />
                <Form.Control.Feedback type="invalid">{errors.isbn}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className={styles.row}>
              <Form.Group md as={Col} controlId="formImage">
                <Form.Label>Cover Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files[0]);
                  }}
                  isInvalid={touched.isbn && errors.image}
                  isValid={touched.image && !errors.image}
                />
                <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className={styles.buttonContainer}>
              <Button className={styles.button} variant="secondary">
                Cancel
              </Button>

              <Button
                className={styles.button}
                disabled={isSubmitting}
                variant="dark"
                type="submit"
              >
                Save
              </Button>
            </Row>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default BookForm;
