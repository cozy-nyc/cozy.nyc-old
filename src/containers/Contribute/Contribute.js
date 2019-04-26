import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export default function Contribute() {
  return (
    <div>
    <Helmet title="contribute" />
      <h1>Contribute</h1>
        <a href="http://api.cozy.nyc" alt="">api</a>
        <a href="https://github.com/cozy-nyc/cozy-nyc" alt="">git repo</a>
        <a href="https://discord.gg/6qaSEbg">discord</a>
    </div>
  );
}
