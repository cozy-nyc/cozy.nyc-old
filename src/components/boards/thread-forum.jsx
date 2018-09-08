import React, { Component } from 'react';

/*
  PopUp Forum Component

  Forum for creating a thread on a board.
*/
const PopupForum = () => (
  <div id="thread-forum-popup">
    <div className="popup_inner">
      <input name="subject" type="text" placeholder="subject." />
      <input name="image" type="file" /> <button>enter</button>
      <textarea name="message" placeholder=">sample text" />
    </div>
  </div>
);

/*
  Relpy Forum Component

  Handles popup for the forum.
*/
class ThreadForum extends Component {
  constructor() {
    super();
    this.state = {
      showPopupForum: false
    };
  }

  togglePopup() {
    this.setState({
      showPopupForum: !this.state.showPopupForum
    });
  }

  render() {
    const pencil = require('assets/img/pencil.svg');
    const popup = (this.state.showPopupForum ? <PopupForum /> : null);
    return (
      <div id="thread-forum">
        {popup}
        <a id="thread-forum-button" onClick={() => this.togglePopup()}>
          <img src={pencil} alt="create post" />
        </a>
      </div>
    );
  }
}

export default (ThreadForum);
