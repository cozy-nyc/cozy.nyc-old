import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export default function Boards() {
  return (
    <div>
      <Helmet title="boards" />
      <h1>Still in the works...</h1>
       <p><Link to="/">Take me back home</Link> Or <Link to="/contribute">Help
         us out!!!</Link>
      </p>
    </div>
  );
}
