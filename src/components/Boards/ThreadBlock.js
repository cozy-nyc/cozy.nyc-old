import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*
  Thread Component
  Bubble/Text box for Threads.
*/
class ThreadBlock extends Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    blurb: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string,
      profileImg: PropTypes.string
    }).isRequired,
    date: PropTypes.number.isRequired
  };

  static defaultProps = {
    image: null,
    title: null
  };

  render() {
    const {
      image,
      title,
      blurb,
      user,
      date
    } = this.props;

    const profileURL = `/u/${user.username}`;

    return (
      /*
        Needs to display Thread image(If it exist), user/profile of poster, blurb,
        and post date.
      */
      <div className="thread-wrapper">
        <div className="threadthread-poster">
          <Link to={{ pathname: profileURL }}>
            <img className="profile-image" src={user.profileImg} alt={user.username} />
            <p>{user.username}</p>
          </Link>
        </div>
        <div className="thread-bubble">
          {image !== null
            && <img className="thread-image" src={image} alt={user.username} />
          }
          {title !== null
            && title}
          {blurb}
          {date}
        </div>
      </div>
    );
  }
}

export default ThreadBlock;
