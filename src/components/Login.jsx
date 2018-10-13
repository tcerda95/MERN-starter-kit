import React, { Component } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';

class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  }

  state = {
    author: 'Thomas J. Watson',
    twitter: 'blueguy',
    imageURL: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg'    
  }

  handleSubmit = e => {
    e.preventDefault();
    const author = this.state.author.trim();
    const twitter = this.state.twitter.trim();
    const imageURL = this.state.imageURL.trim();

    if (!author || !twitter || !imageURL)
      return;

    this.props.onLogin(
      {
        author,
        imageURL,
        twitter
      }
    );
  }

  handleAuthorChange = e => {
    this.setState({ author: e.target.value });
  }

  handleTwitterChange = e => {
    this.setState({ twitter: e.target.value });
  }

  handleImageURLChange = e => {
    this.setState({ imageURL: e.target.value });
  }

  render() {
    const { t } = this.props;
    
    return (
      <div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="text"
              onChange={this.handleAuthorChange}
              value={this.state.author}
              placeholder="full name" 
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="text"
              onChange={this.handleImageURLChange}
              value={this.state.imageURL}
              placeholder="image URL" 
            />
            <span className="icon is-small is-left">
              <i className="fa fa-image" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="text"
              onChange={this.handleTwitterChange}
              value={this.state.twitter}
              placeholder="twitter handle" 
            />
            <span className="icon is-small is-left">
              <i className="fa fa-twitter" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button
              className="button is-success"
              onClick={this.handleSubmit}
            >
              {t('login')}
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default translate()(Login);
