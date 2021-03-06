import React from 'react';
import classNames from 'classnames';
import QueryForm from './QueryForm';
import KnownCids from './KnownCids';
import Deals from './Deals';
import Offers from './Offers';

function Home({ className, ...rest }) {
  return (
    <div className={classNames(className, 'p-4')} {...rest}>
      <QueryForm />
      <Offers className="mt-4" />
      <KnownCids className="mt-4" />
      <Deals className="mt-4" />
    </div>
  );
}

export default Home;
