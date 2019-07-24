import React from 'react';
import { Form, Field } from 'react-final-form';

const ThreadCreateForum = () => (
  <Form
    render={({ handleSubmit, submitError }) => (
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <input name="title" type="text" component="input" label="title" />
        <input name="image" type="file" component="input" label="image" />
        <textarea name="message" type="text" component="input" label="message" />
        <button className="btn btn-success" type="submit">
          submit
        </button>
      </form>
    )}
  />
);


export default ThreadCreateForum;
