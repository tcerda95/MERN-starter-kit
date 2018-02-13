import React from 'react';
import { translate } from 'react-i18next';
import NavLinks from './NavLinks';
import 'bulma/css/bulma.css';

const Hero = ({ t }) => (
  <section className="hero is-info">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          {t('title')}
        </h1>
        <h2 className="subtitle">
          {t('subtitle')}
        </h2>
        <NavLinks />
      </div>
    </div>
  </section>
);

export default translate()(Hero);
