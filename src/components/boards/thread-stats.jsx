import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


/*
  Thread Stats Component

  Displays infomation about the current thread.
*/
@connect(state => ({
  thread: state.activeThread
}))
export default class ThreadStats extends Component {
  static get propTypes() {
    return {
      thread: PropTypes.shape({
        imageCount: PropTypes.number.isRequired,
        replyCount: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
      }),
      // dispatch: PropTypes.func
    };
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
