import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ThreadFeed from 'components/boards/thread-feed';
import ThreadStats from 'components/boards/thread-stats';
import { fetchPosts } from 'actions/boards/get-posts';

/**
 * Thread Page
 *
 * ToDo: Add stats for thread
 */
@connect(state => ({
  thread: state.activeThread,
  posts: state.activeThread.posts,
}))
class Thread extends Component {
  static propTypes = {
    thread: PropTypes.isRequired,
    posts: PropTypes.isRequired
  };

  render() {
    return (
      <div id="thread-wrapper">
        <ThreadFeed />
        <ThreadStats />
      </div>
    );
  }
}


export default Thread;
