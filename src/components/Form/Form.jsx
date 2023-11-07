import React from "react";
import { Formik, Form, Field } from "formik";
import "./form.scss";

function MailForm() {
  const handleSubmit = (values) => {
    console.log("this are the values", values);
  };

  return (
    <React.Fragment>
      <h1>Form</h1>;
      <div className="form-container">
        <Formik
          initialValues={{
            name: "",
            email: "",
            body: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <Field
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Type your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <Field
                type="email"
                name="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Type your email address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="text-area" className="form-label">
                Email body
              </label>
              <Field
                as="textarea"
                className="form-control"
                id="text-area"
                name="body"
                type="text"
                rows="3"
                placeholder="Type a message"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </React.Fragment>
  );
}

export default MailForm;
