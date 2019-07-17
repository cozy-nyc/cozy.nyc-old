import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import PostBlock from 'components/Boards/PostBlock';
import NotAvailable from 'components/NotAvailable/NotAvailable';
import * as BoardsActions from 'redux/modules/boards';
/*
  Thread Page

  Displays a thread which is an OP post followed by replies.
*/
@connect(
  state => ({
    // Needs to check if there
    // ie. Board ID/Tag, Thread Title, Thread ID, Posts, Stats(Number of replies and images)
    currentThread: state.boards.currentThread
  }),
  /* needs action to call data from API to see if the thread exist and the thread info */
  { ...BoardsActions }
)
class Thread extends Component {
  static propTypes = {
    // Define the proptyes being used here.
    currentThread: PropTypes.shape({
      id: PropTypes.number,
      posts: PropTypes.array,
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        threadId: PropTypes.string.isRequired
      })
    }),
    getThread: PropTypes.func.isRequired
  };

  static defaultProps = {
    // Define any defaults like Thread ID
    currentThread: null,
    match: null,
  };

  componentWillMount() {
    // Call Thread action and gets data based on URL/Location ie. ThreadID
    const { match, getThread } = this.props;
    getThread(match.params.threadId);
  }

  render() {
    const { currentThread } = this.props;

    /*
      Creates a list of posts.
      IMPORTANT: OP's post should be visually different!!!!
    */
    const mappedPosts = currentThread.posts.map(post => (
      <PostBlock
        key={post.id}
        image={post.image}
        message={post.message}
        user={post.poster}
        date={post.created}
      />
    ));

    return (
      <div>
        {/*
          Should display OP's Post followed by replies.

          Conditional statement is needed to prevent the page from loading if
          there's no thread based on the ID.
        */}
        {currentThread !== null && (
          <div>
            <Helmet title={currentThread.board} />
            <div className="op">
              {mappedPosts[0]}
            </div>
            <div className="replies">
              <ul>{mappedPosts.slice(1)}</ul>
            </div>
          </div>
        )}
        {currentThread == null && (
          <div>
            <NotAvailable />
          </div>
        )}
      </div>
    );
  }
}

export default Thread;
