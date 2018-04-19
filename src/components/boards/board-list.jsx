import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import { fetchBoards } from 'actions/boards/get-boards';

class BoardList extends Component {
  componentWillMount() {
     this.props.dispatch(fetchBoards())
  }

  createListItems() {
    return this.props.boards.map((board) => {
      return (
        <span className='row' key={ board.id }><Link to={{
          pathname: '/boards/' + board.tag
        }} activeClassName="active">
          /{board.tag}/ - {board.name}
        </Link></span>
      );
    });
  }

  render() {
    return (
      <ul>
        { this.createListItems() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    boards: state.boards.boards
  };
}

export default connect(mapStateToProps)(BoardList);
