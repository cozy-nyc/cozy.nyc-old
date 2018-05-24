import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import ThreadForum from './thread-forum';
import { fetchBoard } from '../../actions/boards/get-threads';

@connect(
  state => ({
    board: state.activeBoard,
    threads: state.activeBoard.threads
  }),
  fetchBoard
)
class ThreadList extends Component {
  static get propTypes() {
    return {
      board: PropTypes.string.isRequired,
      threads: PropTypes.any.arrayOf(PropTypes.object).isRequired,
    };
  }

  createListItems() {
    return this.props.threads.map(thread =>
      (
        <div className="three columns thread-box" key={thread.id}>
          <Link
            className="thread-box-content"
            to={{ pathname: '/boards/' + this.props.board.tag + '/' + thread.id }}
            activeClassName="active"
          >
            <div>
              <img className="thread-opimage" src={thread.image} alt={thread.title} />
              <div className="thread-oppost">
                <h4>{thread.title}</h4>
                <p>{thread.blurb}</p>
                <br />
                  views: {thread.views} replies: {thread.replyCount} images: {thread.imageCount}
              </div>
            </div>
          </Link>
        </div>
      ));
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
        <ThreadForum />
      </ul>
    );
  }
}

export default ThreadList;
