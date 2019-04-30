import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import NotAvailable from 'components/NotAvailable/NotAvailable';

export default function Boards() {
  return (
    <div>
      <Helmet title="boards" />
      <NotAvailable />
    </div>
  );
}
