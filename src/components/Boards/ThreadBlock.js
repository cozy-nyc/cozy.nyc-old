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
    blurb: PropTypes.string,
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
    title: null,
    blurb: '',
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
      <div className={`${styles.threadWrapper} card col-md-3 col-xs-6`}>
        <Link to={{ pathname: threadURL }}>
          <div className={`${styles.threadContent}`}>
            {image !== null && <img className={styles.threadImage} src={image} alt={user.username} />}
            <div className={`${styles.threadText} card-text`}>
              {title !== null && <p className={`${styles.threadTitle} card-title`}>{title}</p>}
              <p className={styles.threadBlurb}>{blurb}</p>
              <p className={styles.threadDate}>{date}</p>
            </div>
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
