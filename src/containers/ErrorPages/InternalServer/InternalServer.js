import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export default function NotFound() {
  // const img404 = require('./404.gif');

  return (
    <div>
      <Helmet title=".." />
      <h1>NOOT NOOT!</h1>
      <h2>500</h2>
      <p>Something is wrong...</p>
      <Link to="/">Take me back home</Link>
    </div>
  );
}
