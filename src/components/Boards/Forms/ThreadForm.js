import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';

const ThreadForm = ({ onSubmit }) => (
  <Form
    onSubmit={values => onSubmit(values).then(() => {}, err => err)}
    render={({ handleSubmit }) => (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <Field name="title" type="text" component="input" placeholder="title" label="title" />
        <Field name="image" type="file" component="input" label="image" />
        <Field name="message" type="text" component="textarea" placeholder="message..." label="message" />
        <button className="btn btn-success" type="submit">
          submit
        </button>
      </form>
    )}
  />
);

ThreadForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ThreadForm;
