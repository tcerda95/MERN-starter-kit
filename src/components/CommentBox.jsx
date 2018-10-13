import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import Login from './Login';

import 'bulma/css/bulma.css';

export default class CommentBox extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    pollInterval: PropTypes.number.isRequired
  }

  state = {
    data: localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [],
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {}
  }

  loadCommentsFromServer = () => {
    axios.get(this.props.url)
      .then(res => {
        localStorage.setItem('comments', JSON.stringify(res.data));
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleCommentSubmit = comment => {
    comment.imageURL = this.state.userInfo.imageURL;
    comment.twitter = this.state.userInfo.twitter;
    comment.author = this.state.userInfo.author;

    const comments = this.state.data;
    const newComments = comments.concat([comment]);
    this.setState({ data: newComments });

    axios.post(this.props.url, comment)
      .catch(err => {
        console.error(err);
      });
  }

  handleLogin = loginInfo => {
    const userInfo = {
      author: loginInfo.author, 
      imageURL: loginInfo.imageURL,
      twitter: loginInfo.twitter
    };

    this.setState({ userInfo });
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  handleLogout = e => {
    axios.post(`${this.props.url}/logout`)
      .then(res => {
        localStorage.removeItem('userInfo');
        this.setState({ userInfo: {} });
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleCommentDelete = id => {
    const comments = this.state.data;
    const newComments = comments.filter(t => t._id !== id);

    this.setState({ data: newComments });

    axios.delete(`${this.props.url}/${id}`)
      .catch(err => {
        console.error(err);
      });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <CommentList 
            data={this.state.data}
            onCommentDelete={this.handleCommentDelete}
          />
          <hr />
          <CommentForm 
            imageURL={this.state.userInfo.imageURL}
            onCommentSubmit={this.handleCommentSubmit}
            onLogout={this.handleLogout}
          />
          <br />
          <Login 
            onLogin={this.handleLogin}
          />
        </div>
      </section>
    );
  }
}
