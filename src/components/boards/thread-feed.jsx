import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import Post from './post';
import ReplyForum from './reply-forum';

class ThreadFeed extends Component {
  createListItems() {
    return this.props.posts.map((post) => {
      return (
        <div className='thread-post' key={ post.id }>
          <Post
            id={ post.id }
            user={ post.poster }
            image={ post.image }
            message={ post.message }
            date={ post.date } />
          <div className='u-cf'></div>
        </div>
      );
    });
  }

  render() {
    return (
      <div id='thread-content' className='eight columns'>
        <h1> { this.props.thread.title } </h1>
        {this.createListItems()}
        <ReplyForum />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    thread: state.activeThread,
    posts: state.activeThread.posts,
  };
}

export default connect(mapStateToProps)(ThreadFeed);
