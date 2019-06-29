import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/*
  Board List Component

  Displays list of boards.
*/
@connect(state => ({
  boards: state.boards.categories
}))
class BoardsList extends Component {
  static get propTypes() {
    return {
      boards: PropTypes.arrayOf(PropTypes.object).isRequired
    };
  }

  render() {
    const { boards } = this.props;

    const mappedBoards = boards.map(board => (
      <div className="row" key={board.id}>
        <Link to={{ pathname: `/boards/${board.tag}` }}>
          /{board.tag}/ - {board.name}
        </Link>
      </div>
    ));
    return <ul>{mappedBoards}</ul>;
  }
}
export default BoardsList;
