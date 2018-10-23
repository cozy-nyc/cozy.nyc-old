import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ThreadForum from 'components/boards/thread-forum';
import ThreadList from 'components/boards/thread-list';
import { fetchBoard } from 'actions/boards/get';



/*
  Board Page

  List active threads in current board
*/
@connect(
  state => ({
    threads: state.activeBoard.threads
}))
export default class Board extends Component {
  static propTypes = {
    tag: PropTypes.string.isRequired,
    threads: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        boardtag: PropTypes.string.isRequired
      })
    }),
  };

  componentWillMount() {
    this.props.dispatch(fetchBoard(this.props.match.params.boardtag));
  }

  render(){
    return(
      <div id="board-container">
        <ThreadList />
        <ThreadForum />
      </div>
    )
  }
};
