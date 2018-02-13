import React, { Component } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';

export class CommentForm extends Component {
  static propTypes = {
    onCommentSubmit: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    imageURL: PropTypes.string
  }

  state = { text: '' }

  handleTextChange = e => {
    this.setState({ text: e.target.value });
  }

  handleKeyPress = e => {
    if (e.key === 'Enter')
      this.handleSubmit(e);
  }

  handleSubmit = e => {
    e.preventDefault();
    const text = this.state.text.trim();
    
    if (!text)
      return;

    this.props.onCommentSubmit({ text });
    this.setState({ text: '' });
  }

  handleLogout = e => {
    e.preventDefault();
    this.props.onLogout();
  }

  render() {
    const { t } = this.props;
    
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img alt="Avatar" src={this.props.imageURL} />
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea"
                placeholder={t('addComment')}
                value={this.state.text}
                onChange={this.handleTextChange}
                onKeyPress={this.handleKeyPress}
              />
            </p>
          </div>

          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <a
                  className="button is-info"
                  type="submit"
                  value={t('post')}
                  onClick={this.handleSubmit}
                >
                  {t('post')}
                </a>
              </div>
            </div>

            <div className="level-right">
              <div className="level-item">
                <a
                  className="button is-info"
                  type="submit"
                  value={t('logout')}
                  onClick={this.handleLogout}
                >
                  {t('logout')}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </article>
    );
  }
}

export default translate()(CommentForm);
