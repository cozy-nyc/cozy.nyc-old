import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ThreadBlock from 'components/Boards/ThreadBlock';
import NotAvailable from 'components/NotAvailable/NotAvailable';
import * as BoardsActions from 'redux/modules/boards';

/*
  Board Page

  Displays a list of Threads on the current board in order of recent activity, trending,
  or newest.
*/
@connect(
  state => ({
    // Needs to get all the threads on the active board
  }),
  { /* actions to check if board is available and list of boards */}
)
class Board extends Component {
  static propTypes = {
    // Define the proptyes being used here.
  };

  static defaultProps = {
    // Define any defaults like Board tag
  };

  componentWillMount() {
    // Call board actions and gets data based on URL/Location
  }

  render() {
    const { /* props needed */ } = this.prop;

    /*
      Creates a list of threads.
    */
    const mappedThreads = threads.map(thread => (
      <ThreadBlock
        key={post.id}
        image={post.image}
        blurb={post.blurb}
        user={post.poster}
        date={post.date}
      />
    ));

    return (
      <div>
        {/*
          Conditional statement is needed to prevent the page from loading if
          there's no thread based on the ID.
        */}
        {mappedThreads}
      </div>
    );
  }
}

export default Board;
