import React from 'react';
import { Form, Field } from 'react-final-form';

const ReplyForm = () => (
  <Form
    render={({ handleSubmit }) => (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="image" type="file" component="input" label="image" />
        <Field name="message" type="textarea" component="input" label="message" />
        <button className="btn btn-success" type="submit">
          submit
        </button>
      </form>
    )}
  />
);


export default ReplyForm;
