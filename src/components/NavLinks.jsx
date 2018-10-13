import React from 'react';
import { NavLink } from 'react-router-dom';
import { translate } from 'react-i18next';
import '../styles/NavLinks.scss';

const NavLinks = ({ t }) => (
  <ul className="inline-list">
    <li>
      <NavLink exact to="/">{t('home')}</NavLink>
    </li>
    <li>
      <NavLink to="/about">{t('about')}</NavLink>
    </li>
  </ul>
);

export default translate()(NavLinks);
