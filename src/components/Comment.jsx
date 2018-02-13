import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bulma/css/bulma.css';

export default class Comment extends Component {
  static propTypes = {
    uniqueID: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    twitter: PropTypes.string,
    onCommentDelete: PropTypes.func.isRequired,
    imageURL: PropTypes.string,
    children: PropTypes.node    
  }

  deleteComment = e => {
    e.preventDefault();
    const id = this.props.uniqueID;
    this.props.onCommentDelete(id);
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img alt="Avatar" src={this.props.imageURL} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <strong>{this.props.author}</strong> <small>@{this.props.twitter}</small> <small>31m</small>
              <br />
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-reply"></i></span>
                </a>
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                </a>
                <a className="level-item">
                  <span className="icon is-small"><i className="fa fa-heart"></i></span>
                </a>
              </div>
            </nav>
          </div>
          <div>
            <button
              onClick={this.deleteComment} 
              className="delete"
            >
            </button>
          </div>
        </article>
      </div>
    );
  }
}
