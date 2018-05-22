import React, { Component } from 'react';

import ThreadFeed from 'components/boards/thread-feed';
import ThreadStats from 'components/boards/thread-stats';

/**
 * Thread Page
 *
 * ToDo: Add stats for thread
 */
class Thread extends Component {
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
