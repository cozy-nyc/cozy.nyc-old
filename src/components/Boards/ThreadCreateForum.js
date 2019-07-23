import React from 'react';
import { Form, Field } from 'react-final-form';

const ThreadCreateForum = () => (
  <Form
    render={({ handleSubmit, submitError }) => (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="title" type="text" component="input" label="title" />
        <Field name="message" type="text" component="input" label="message" />
        <Field name="image" type="file" component="input" label="image" />
        {submitError && (
          <p className="text-danger">
            <strong>{submitError}</strong>
          </p>
        )}
        <button className="btn btn-success" type="submit">
          <i className="fa fa-sign-in" /> submit
        </button>
      </form>
    )}
  />
);


export default ThreadCreateForum;
