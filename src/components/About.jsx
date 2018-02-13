import React from 'react';
import { translate } from 'react-i18next';

const About = ({ t }) => (
  <div>
    <h1>{t('about')}</h1>
    <p>{t('description')}</p>
  </div>
);

export default translate()(About);
