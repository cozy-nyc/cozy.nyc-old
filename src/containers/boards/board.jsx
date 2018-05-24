import React from 'react';

import ThreadList from 'components/boards/thread-list';

/**
 * Board Page
 * List active threads in current board
 */
const Board = () => (
  <div id="feed">
    <ThreadList />
  </div>
);

export default Board;
