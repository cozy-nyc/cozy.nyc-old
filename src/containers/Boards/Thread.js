import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import PostBlock from 'components/Boards/PostBlock';
import NotAvailable from 'components/NotAvailable/NotAvailable';
import * as ThreadActions from 'redux/modules/thread';
/*
  Thread Page

  Displays a thread which is an OP post followed by replies.
*/
/* queryset: Query that holds all Threads in the order based off their
latestReplyTime
serializer_class: The ThreadListSerializer is used
permission_classes: anyone is allowed to call ThreadList even those
who are not authenticated users
search_fields: Allow searched to be based off the following fields
title,
poster,
board
example: http://example.com/thread/title?search=Treyway
ordering_fields: Allow search query to be ordered in reverse latestReplyTime

*/
@connect(
  state => ({
    // Needs to check if there
    // ie. Board ID/Tag, Thread Title, Thread ID, Posts, Stats(Number of replies and images)
  }),
  {
    /* needs action to call data from API to see if the thread exist and the thread info */
  }
)
class Thread extends Component {
  static propTypes = {
    // Define the proptyes being used here.
  };

  static defaultProps = {
    // Define any defaults like Thread ID
    id: null
  };

  componentWillMount() {
    // Call Thread action and gets data based on URL/Location ie. ThreadID
  }

  render() {
    const {
      /* props needed */
    } = this.prop;

    /*
      Creates a list of posts.
      IMPORTANT: OP's post should be visually different!!!!
    */
    const mappedPosts = thread.map(post => (
      <PostBlock key={post.id} image={post.image} message={post.message} user={post.poster} date={post.date} />
    ));

    return (
      <div>
        {/*
          Should display OP's Post followed by replies.

          Conditional statement is needed to prevent the page from loading if
          there's no thread based on the ID.
        */}
        {thread && (
          <div>
            <div className="op">
              <ul>{mappedPosts[0]}</ul>
            </div>
            e
            <div className="replies">
              <ul>{mappedPosts.slice(1)}</ul>
            </div>
          </div>
        )}
        {!thread && (
          <div>
            <NotAvailable />
          </div>
        )}
      </div>
    );
  }
}

export default Thread;
