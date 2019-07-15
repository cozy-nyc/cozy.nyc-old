import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*
  Post Component
  Bubble/Text box for posts.
*/
class PostBlock extends Component {
  static propTypes = {
    key: post.id}
    image: PropTypes.
    message: PropTypes.string,
    user: PropTypes.string,
    date: PropTypes.date
  };

  render() {
    const { /* props needed */ } = this.prop;

    return (
      <div>
        {/*
          Needs to display Post image(If it exist), user/profile of poster, message,
          and post date.
        */}
      </div>
    );
  }
}

export default PostBlock;
