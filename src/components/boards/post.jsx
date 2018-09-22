import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return (
      <div className="message-wrapper">
        <div className="message-poster">
          <img className="profile-image" src={this.props.user.avatarUrl} alt={this.props.user.username} />
          <p>{this.props.user.username}</p>
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
