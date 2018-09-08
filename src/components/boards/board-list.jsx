import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchBoards } from 'actions/boards/get';

/*
  Board List Component

  Displays list of boards.
*/
@connect(
  state => ({
    boards: state.boards.boards
  }),
  fetchBoards
)
export default class BoardList extends Component {
  static get propTypes() {
    return {
      boards: PropTypes.arrayOf(PropTypes.object).isRequired,
      // dispatch: PropTypes.func
    };
  }

  render() {
    const boards = this.props.boards;

    const mappedBoards = boards.map(board =>
      <div
        className="row"
        key={board.id}
      >
        <Link
          to={{ pathname: '/boards/' + board.tag }}
        >
            /{board.tag}/ - {board.name}
        </Link>
      </div>);

    return (
      <ul>
        {mappedBoards}
      </ul>
    );
  }
}
