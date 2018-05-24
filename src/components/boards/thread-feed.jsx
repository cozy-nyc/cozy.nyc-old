import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Post from './post';
import ReplyForum from './reply-forum';

@connect(state => ({
  post: state.activeThread.posts,
  threads: state.activeThread
}))
class ThreadFeed extends Component {
  static get propTypes() {
    return {
      posts: PropTypes.arrayOf(PropTypes.object).isRequired,
      thread: PropTypes.arrayOf(PropTypes.object).isRequired,
      // dispatch: PropTypes.func
    };
  }

  createListItems() {
    return this.props.posts.map(post => (
      <div className="thread-post" key={post.id}>
        <Post
          id={post.id}
          user={post.poster}
          image={post.image}
          message={post.message}
          date={post.date}
        />
        <div className="u-cf" />
      </div>
    ));
  }

  render() {
    return (
      <div id="thread-content" className="eight columns">
        <h1> {this.props.thread.title} </h1>
        {this.createListItems()}
        <ReplyForum />
      </div>
    );
  }
}

export default ThreadFeed;
