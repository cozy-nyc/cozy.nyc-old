import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/*
  Post Component

  Bubble/Text box for posts.
*/
export default class Post extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    image: PropTypes.string,
    message: PropTypes.string.isRequired
  };

  render() {
    const profileURL = '/u/' + this.props.user.username;

    return (
      <div className="message-wrapper">
        <div className="message-poster">
        <Link to={{pathname: profileURL}}>
          <img className="profile-image" src={this.props.user.profileImg} alt={this.props.user.username} />
          <p>{this.props.user.username}</p>
        </Link>
        </div>
        <div className="message-bubble">
          {this.props.image != null &&
            <img className="message-image" src={this.props.image} alt={this.props.user.username} />
          }
          {this.props.message}
          {this.props.date}
        </div>
      </div>
    );
  }
}
