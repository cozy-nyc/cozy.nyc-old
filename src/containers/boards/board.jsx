import React from 'react';

import ThreadForum from 'components/boards/thread-forum';
import ThreadList from 'components/boards/thread-list';

/**
 * Board Page
 * List active threads in current board
 */
const Board = () => (
  <div id="board-container">
    <ThreadList />
    <ThreadForum />
  </div>
);

export default Board;
