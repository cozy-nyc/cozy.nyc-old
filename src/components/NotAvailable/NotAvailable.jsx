import React from 'react';
import { Link } from 'react-router-dom';

export default function NotAvailable() {
  const failwebm = require('./fail.webm');
  const failmp4 = require('./fail.mp4');
  const styles = require('./NotAvailable.scss');

  return (
    <div>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src={failwebm} type="video/webm" />
        <source src={failmp4} type="video/mp4" />
      </video>
      <div className={styles.messageBlock}>
        <span className={styles.message}>
          <h1>Still in the works...</h1>
          <Link to="/"><button type="button">Take me back home</button></Link>
          <Link to="/contribute"><button type="button">Help us out!!!</button></Link>
        </span>
      </div>
    </div>
  );
}
