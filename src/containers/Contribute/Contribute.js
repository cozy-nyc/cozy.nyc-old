import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

export default function Contribute() {
  return (
    <div>
      <Helmet title="contribute" />
      <h1>Contribute</h1>
      <article>
        <h3>We need all the help we can get!</h3>
        <p>
          cozy.nyc is still in development and this site will go under constant change. It might even break time to
          time. Our first production build removes a lot of features that are sort of half done so we can work on it
          some more before we release to the public for testing. To keep track of these changes join us on our{' '}
          <a href="https://discord.gg/3WSA2SG">discord</a> and check out our git repo at{' '}
          <a href="https://github.com/cozy-nyc/cozy-nyc" alt="">
            github.com/cozy-nyc/cozy-nyc
          </a>
        </p>
        <p>
          Our API can be found here at{' '}
          <a href="http://api.cozy.nyc" alt="">
            api.cozy.nyc{' '}
          </a>{' '}
          and it's repo here at{' '}
          <a href="https://github.com/cozy-nyc/cozy-api" alt="">
            github.com/cozy-nyc/cozy-api{' '}
          </a>
        </p>
        <br />
        <p>
          Check out the <Link to="about">about page</Link> for our goals!
        </p>
        <br />
        <p styles="text-align: right;">
          Stay toasty,
          <br />
          S1MB10T3
        </p>
      </article>
    </div>
  );
}
