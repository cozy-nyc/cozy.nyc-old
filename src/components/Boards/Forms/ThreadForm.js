import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';

const ThreadForm = ({ onSubmit, board, poster }) => (
  <Form
    onSubmit={values => onSubmit(values).then(() => {}, err => err)}
    initialValues={{ board, poster }}
    render={({ handleSubmit }) => (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="title" type="text" component="input" placeholder="title" label="title" required />
        <Field name="image" type="file" component="input" label="image" />
        <Field name="message" type="text" component="textarea" placeholder="message..." label="message" required />
        <button className="btn btn-success" type="submit">
          submit
        </button>
      </form>
    )}
  />
);

ThreadForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  board: PropTypes.any.isRequired,
  poster: PropTypes.number.isRequired
};

export default ThreadForm;
