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
    date: PropTypes.string.isRequired
  };

  static defaultProps = {
    image: null
  };

  render() {
    const {
      image, message, user, date
    } = this.props;
    const styles = require('./Post.scss');
    const profileURL = `/u/${user.username}/`;

    return (
      <div className={`${styles.postWrapper} row`}>
        <div className={`${styles.postPoster} col-xs-2`}>
          <Link to={{ pathname: profileURL }}>
            <img className={styles.profileImage} src={user.profileImg} alt={user.username} />
            <p className={styles.profileUsername}>{user.username}</p>
          </Link>
        </div>
        <div className={`${styles.postBubble} col-xs-10`}>
          {image !== null && <img className="post-image" src={image} alt={user.username} />}
          <span className="">{message}</span>
        </div>
        <p className={styles.postDate}>{date}</p>
      </div>
    );
  }
}

export default PostBlock;
