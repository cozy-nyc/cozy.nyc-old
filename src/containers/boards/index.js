import React, { Component } from 'react';

import BoardList from 'components/boards/board-list';

/*
  Boards Home Page

  List active boards on the site
*/
export default class BoardsHome extends Component {
  render() {
    return (
      <div id="board-container">
        <BoardList />
      </div>
    );
  }
}
