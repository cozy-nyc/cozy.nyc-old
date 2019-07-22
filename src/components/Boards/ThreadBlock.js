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
    date: PropTypes.string.isRequired,
    boardTag: PropTypes.string.isRequired,
    threadID: PropTypes.number.isRequired
  };

  static defaultProps = {
    image: null,
    title: null
  };

  render() {
    const {
      threadID, boardTag, image, title, blurb, user, date
    } = this.props;
    const styles = require('./Thread.scss');
    const profileURL = `/u/${user.username}`;
    const threadURL = `/boards/${boardTag}/thread/${threadID}`;

    return (
      /*
        Needs to display Thread image(If it exist), user/profile of poster, blurb,
        and post date.
      */
      <div className={styles.threadWrapper}>
        <Link to={{ pathname: threadURL }}>
          {image !== null && <img className={styles.threadImage} src={image} alt={user.username} />}
          <div className={styles.threadText}>
            {title !== null && <p className={styles.threadTitle}>{title}</p>}
            <p className={styles.threadBlurb}>{blurb}</p>
            <p className={styles.threadDate}>{date}</p>
          </div>
        </Link>
        <div className={styles.threadPoster}>
          <Link to={{ pathname: profileURL }}>
            <img className="profile-image" src={user.profileImg} alt={user.username} />
            <p>{user.username}</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default ThreadBlock;
