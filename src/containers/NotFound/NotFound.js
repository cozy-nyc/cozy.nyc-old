import React from 'react';

export default function NotFound() {
  const img404 = require('assets/img/404.gif')

  return (
    <div className="container">
      <h1>NOOT NOOT!</h1>
      <h2>404</h2>
      <img src={img404} alt="404" />
      <p>The thing you're looking for is not here...</p>
    </div>
  );
}
