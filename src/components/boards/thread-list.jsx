import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import ThreadForum from './thread-forum';
import { fetchBoard } from '../../actions/boards/get-threads';

class ThreadList extends Component {
  componentWillMount() {
     this.props.dispatch(fetchBoard())
  }

  createListItems() {
    return this.props.threads.map((thread) => {
      return (
        <div className='three columns thread-box' key={ thread.id }>
          <Link className='thread-box-content' to={{
            pathname: '/boards/' + this.props.board.tag + '/' + thread.id
          }} activeClassName="active">
            <div>
                <img className='thread-opimage' src={ thread.image } />
                <div className='thread-oppost'>
                  <h4>{ thread.title }</h4>
                  <p>{ thread.blurb }</p>
                  <br />
                  v: { thread.views } r: { thread.replyCount } i: { thread.imageCount }
                </div>
            </div>
          </Link>
        </div>
      );
    });
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

function mapStateToProps(state) {
  return {
    board: state.activeBoard,
    threads: state.activeBoard.threads
  };
}

export default connect(mapStateToProps)(ThreadList);
