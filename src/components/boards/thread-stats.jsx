import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/**
 * Thread Stats
 *
 * ToDo: Add stats for thread
 */
@connect(state => ({
  posts: state.activeThread.posts,
  thread: state.activeThread
}))
class ThreadStats extends Component {
  static get propTypes() {
    return {
      posts: PropTypes.arrayOf(PropTypes.object).isRequired,
      thread: PropTypes.arrayOf(PropTypes.object).isRequired,
      // dispatch: PropTypes.func
    };
  }

  createListImages() {
    return this.props.posts.map(post =>
      (
        <div className="min-image" key={post.id} />
      ));
  }


  render() {
    return (
      <div id="thread-sidebar" className="four columns">

        <h4>Stats:</h4>
        <p>replies: {this.props.thread.replyCount}</p>
        <p>images: {this.props.thread.imageCount}</p>
        <p>views: {this.props.thread.views}</p>

      </div>
    );
  }
}


export default ThreadStats;
