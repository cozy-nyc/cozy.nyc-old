import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ThreadBlock from 'components/Boards/ThreadBlock';
import ThreadCreateForum from 'components/Boards/ThreadCreateForum';
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
    currentBoard: state.boards.currentBoard
  }),
  /* actions to check if board is available and list of boards */
  { ...BoardsActions }
)
class Board extends Component {
  static propTypes = {
    // Define the proptypes being used here.
    currentBoard: PropTypes.shape({
      tag: PropTypes.string,
      name: PropTypes.string,
      threads: PropTypes.array
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        boardTag: PropTypes.string.isRequired
      })
    }),
    getBoard: PropTypes.func.isRequired
  };

  static defaultProps = {
    // Define any defaults like Board tag
    currentBoard: null,
    match: null
  };

  constructor(props) {
    super(props);
    this.state = { showPopupForum: false };
  }

  componentDidMount() {
    // Call board actions and gets data based on URL/Location
    const { match, getBoard } = this.props;
    getBoard(match.params.boardTag);
  }

  componentDidUpdate(prevProps) {
    const { match, getBoard, currentBoard } = this.props;
    if ((currentBoard && !(match.params.boardTag === currentBoard.tag)) || !prevProps.currentBoard) {
      getBoard(match.params.boardTag);
    }
  }

  toggleThreadForum() {
    // console.log(this.state.showPopupForum);
    const { showPopupForum } = this.state;
    this.setState({
      showPopupForum: !showPopupForum
    });
  }

  render() {
    const { currentBoard, match } = this.props;
    const { showPopupForum } = this.state;
    const popup = (showPopupForum ? <ThreadCreateForum /> : null);

    /*
      Creates a list of threads.
    */
    const mappedThreads = currentBoard.threads.map(thread => (
      <ThreadBlock
        key={thread.id}
        threadID={thread.id}
        boardTag={match.params.boardTag}
        image={thread.image}
        title={thread.title}
        blurb={thread.blurb}
        user={thread.poster}
        date={thread.created}
      />
    ));

    return (
      <div>
        {/*
        Conditional statement is needed to prevent the page from loading if
        there's no board based on the ID.
       */}
        {currentBoard !== null && (
          <div>
            <Helmet title={`boards - /${currentBoard.tag}/`} />
            {mappedThreads}
            <span>
              {popup}
              <button onClick={() => this.toggleThreadForum()}>noot</button>
            </span>
          </div>
        )}
        {currentBoard == null && (
          <div>
            <NotAvailable />
          </div>
        )}
      </div>
    );
  }
}

export default Board;
