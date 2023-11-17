import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import "./form.scss";

function MailForm() {
  const initialValues = {
    name: "",
    email: "",
    body: "",
  };

  const onSubmit = () => {
    Swal.fire({
      icon: "success",
      title: "Email Sent",
      text: "Thank you for reaching out. I will attend to your inquiry promptly",
    });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Format").required("Required"),
    body: Yup.string().required("Required"),
  });

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <div className="form-container mb-4">
          <Form className="form-wrapper">
            <h1>Contact Me</h1>
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
                <div className="err-msg">
                  <ErrorMessage name="name" />
                </div>
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
                <div className="err-msg">
                  <ErrorMessage name="email" />
                </div>
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
                <div className="err-msg">
                  <ErrorMessage name="body" className="err-msg" />
                </div>
              </div>
            </div>
            <div className="form-btn">
              <button
                type="submit"
                className="btn btn-secondary btn-sm"
                aria-label="Submit"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </React.Fragment>
  );
}

export default MailForm;
