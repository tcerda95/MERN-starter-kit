import React from 'react';
import { translate } from 'react-i18next';
import 'bulma/css/bulma.css';

const Footer = ({ t }) => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>{t('example')}</strong>
          <br />
          {t('license')}
          <br />
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
        <p>
          <a className="icon" href="https://github.com/IBM-Bluemix/node-MERN-stack">
            <i className="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>  
);

export default translate()(Footer);
