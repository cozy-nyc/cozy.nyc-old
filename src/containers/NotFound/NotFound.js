import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export default function NotFound() {
  const img404 = require('./404.gif');

  return (
    <div>
      <Helmet title=".." />
      <h1>NOOT NOOT!</h1>
      <h2>404</h2>
      <img src={img404} alt="404" />
      <p>The thing you're looking for is not here...</p>
      <Link to="/">Take me back home</Link>
    </div>
  );
}
