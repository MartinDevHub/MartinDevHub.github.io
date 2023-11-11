import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./form.scss";

function MailForm() {
  const initialValues = {
    name: "",
    email: "",
    body: "",
  };

  const onSubmit = (values) => {
    console.log("These are the values", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Format").required("Required"),
    body: Yup.string().required("Required"),
  });

  return (
    <React.Fragment>
      <h1>Form</h1>
      <Formik
        className="form-container"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form-wrapper">
          <div className="mb-3">
            <div className="form-control">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Type your name"
              />
              <ErrorMessage name="name" />
            </div>
          </div>
          <div className="mb-3">
            <div className="form-control">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Type your email address"
              />
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="mb-3">
            <div className="form-control">
              <label htmlFor="text-area" className="form-label">
                Email body
              </label>
              <Field
                as="textarea"
                id="text-area"
                name="body"
                className="form-control"
                rows="3"
                placeholder="Type a message"
              />
              <ErrorMessage name="body" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" aria-label="Submit">
            Submit
          </button>
        </Form>
      </Formik>
    </React.Fragment>
  );
}

export default MailForm;
