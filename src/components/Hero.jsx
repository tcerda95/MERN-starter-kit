import React from 'react';
import NavLinks from './NavLinks';
import 'bulma/css/bulma.css';

export default function Hero(props) {
  return (
    <section className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Social Media Comments
          </h1>
          <h2 className="subtitle">
            MERN application example
          </h2>
          <NavLinks />
        </div>
      </div>
    </section>
  );
}
