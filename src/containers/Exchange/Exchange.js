import React from 'react';
// import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import NotAvailable from 'components/NotAvailable/NotAvailable';

export default function Exchange() {
  return (
    <div>
      <Helmet title="exchange" />
      <NotAvailable />
    </div>
  );
}
