import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { fetchBoards } from 'actions/boards/get-boards';

@connect(
  state => ({
    boards: state.boards.boards
  }),
  fetchBoards
)
class BoardList extends Component {
  static get propTypes() {
    return {
      boards: PropTypes.arrayOf(PropTypes.object).isRequired,
      // dispatch: PropTypes.func
    };
  }

  createListItems() {
    return this.props.boards.map(board => (
      <span
        className="row"
        key={board.id}
      >
        <Link
          to={{ pathname: '/boards/' + board.tag }}
          activeClassName="active"
        >
            /{board.tag}/ - {board.name}
        </Link>
      </span>
    ));
  }

  render() {
    return (
      <ul>
        { this.createListItems() }
      </ul>
    );
  }
}

export default (BoardList);
