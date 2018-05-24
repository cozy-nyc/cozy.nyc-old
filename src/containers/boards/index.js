import React from 'react';

import BoardList from 'components/boards/board-list';

/**
 * Boards Home Page
 * List active boards on the site
 */
const BoardsHome = () => (
  <div id="home-content">
    <div id="home-featured">
      <BoardList />
    </div>
  </div>
);

export default BoardsHome;
