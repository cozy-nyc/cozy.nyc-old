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
    // Needs to check if thr
    // ie. Board ID/Tag, Thread Title, Thread ID, Posts, Stats(Number of replies and images)
  }),
  { /* needs action to call data from API to see if the thread exist and the thread info */}
)
class Thread extends Component {
  static propTypes = {
    // Define the proptyes being used here.
  };

  static defaultProps = {
    // Define any defaults like Thread ID
  };

  componentWillMount() {
    // Call Thread action and gets data based on URL/Location ie. ThreadID
  }

  render() {
    const { /* props needed */ } = this.prop;

    /*
      Creates a list of posts.
      IMPORTANT: OP's post should be visually different!!!!
    */
    const mappedPosts = thread.map(post => (
      <PostBlock
        key={post.id}
        user={post.poster}
        image={post.image}
        message={post.message}
        date={post.date}
      />
    ));

    return (
      <div>
        {/*
          Should display OP's Post followed by replies.

          Conditional statement is needed to prevent the page from loading if
          there's no thread based on the ID.
        */}
        {mappedPosts}
      </div>
    );
  }
}

export default Thread;
