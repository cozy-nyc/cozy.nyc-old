import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ThreadList from 'components/boards/thread-list';

/**
 * Board Page
 * List active threads in current board
 */
class Board extends Component {
  render() {
    return (
      <div id="feed">
        <ThreadList />
      </div>
    )
  }
}

export default Board;
