import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import ThreadFeed from 'components/boards/thread-feed';
import ThreadStats from 'components/boards/thread-stats';
import { fetchPosts } from 'actions/boards/get-posts';

/**
 * Thread Page
 *
 * ToDo: Add stats for thread
 */
class Thread extends Component {
  componentWillMount() {
    console.log(this.props)
    this.props.dispatch(fetchPosts(this.props.params.threadid))
  }

  render(){
    return (
      <div id='thread-wrapper'>
        <ThreadFeed />
        <ThreadStats />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    thread: state.activeThread,
    posts: state.activeThread.posts,
  };
}

export default connect(mapStateToProps)(Thread);
