import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*
  Post Component
  Bubble/Text box for posts.
*/
class PostBlock extends Component {
  static propTypes = {
    image: PropTypes.string,
    message: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string,
      profileImg: PropTypes.string
    }).isRequired,
    date: PropTypes.number.isRequired
  };

  static defaultProps = {
    image: null
  };

  render() {
    const {
      image,
      message,
      user,
      date
    } = this.props;

    const profileURL = `/u/${user.username}/`;

    return (
      <div className="post-wrapper">
        <div className="post-poster">
          <Link to={{ pathname: profileURL }}>
            <img className="profile-image" src={user.profileImg} alt={user.username} />
            <p>{user.username}</p>
          </Link>
        </div>
        <div className="post-bubble">
          {image !== null
            && <img className="post-image" src={image} alt={user.username} />
          }
          {message}
          {date}
        </div>
      </div>
    );
  }
}

export default PostBlock;
