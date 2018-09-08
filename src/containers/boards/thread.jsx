import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from 'actions/boards/get';
import Post from 'components/boards/post';
import ReplyForum from 'components/boards/reply-forum';

import ThreadStats from 'components/boards/thread-stats';


/*
  Thread Page

  TODO:
    Add stats for thread
*/
@connect(state => ({
  posts: state.activeThread.posts,
  thread: state.activeThread
}))
export default class Thread extends Component {
  static get propTypes() {
    return {
      posts: PropTypes.arrayOf(PropTypes.object).isRequired,
      thread: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
      match: PropTypes.shape({
        params: PropTypes.shape({
          threadid: PropTypes.string.isRequired
        })
      }),
      dispatch: PropTypes.func.isRequired
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchPosts(this.props.match.params.threadid));
  }

  render() {
    const mappedPost = this.props.posts.map(post =>
      <div className="thread-post" key={post.id}>
        <Post
          id={post.id}
          user={post.poster}
          image={post.image}
          message={post.message}
          date={post.date}
        />
        <div className="u-cf" />
      </div>)

    return (
      <div id="thread-wrapper">
      <div id="thread-content" className="eight columns">
        {mappedPost}
        <ReplyForum />
      </div>
      <ThreadStats />
      </div>
    );
  }
}
