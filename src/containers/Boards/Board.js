import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ThreadBlock from 'components/Boards/ThreadBlock';
import ThreadForm from 'components/Boards/Forms/ThreadForm';
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
    currentBoard: state.boards.currentBoard,
    auth: state.auth
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
    auth: PropTypes.objectOf(PropTypes.any).isRequired,
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
    this.state = { showPopupForm: false };
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

  createThread = async data => {
    const { createThread } = this.props;
    const result = await createThread(data);

    return result;
  }

  toggleThreadForm() {
    // console.log(this.state.showPopupForm);
    const { showPopupForm } = this.state;
    this.setState({
      showPopupForm: !showPopupForm
    });
  }


  render() {
    const styles = require('./Boards.scss');
    const { currentBoard, match, auth } = this.props;
    const { showPopupForm } = this.state;
    const popup = (showPopupForm ? (
      <div className={`${styles.popupForm}`}>
        <ThreadForm
          onSubmit={this.createThread}
          board={currentBoard.tag}
          poster={auth.user.id}
        />
      </div>) : null);

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
            {/*
            Conditional statement is needed to prevent nonauthenticated users
            from filling out a thread create form.
           */}
            {auth.user !== null && (
              <div className={`${styles.popupWrapper}`}>
                {popup}
                <button type="button" className={`${styles.popupButton}`} onClick={() => this.toggleThreadForm()}>noot</button>
              </div>
            )}
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
