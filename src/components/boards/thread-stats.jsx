import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

/**
 * Thread Stats
 *
 * ToDo: Add stats for thread
 */
class ThreadStats extends Component {
  createListImages() {
    return this.props.posts.map((post) => {
      return (
        <div className='min-image' key={ post.id }>

        </div>
      );
    });
  }


  render(){
    return (
      <div id='thread-sidebar' className='four columns'>

      <h4>Stats:</h4>
        <p>replies: { this.props.thread.replyCount }</p>
        <p>images: { this.props.thread.imageCount }</p>
        <p>views: { this.props.thread.views }</p>

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

export default connect(mapStateToProps)(ThreadStats);
