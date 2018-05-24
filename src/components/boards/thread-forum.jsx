import React, { Component } from 'react';

const PopupForum = () => (
  <div id="thread-forum-popup">
    <div className="popup_inner">
      <input name="subject" type="text" placeholder="subject." />
      <input name="image" type="file" /> <button>enter</button>
      <textarea name="message" placeholder=">sample text" />
    </div>
  </div>
);

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
    const popup = (this.state.showPopupForum ? <PopupForum /> : null);
    return (
      <div id="thread-forum">
        {popup}
        <button id="thread-forum-button" onClick={() => this.togglePopup()}> reply </button>
      </div>
    );
  }
}

export default (ThreadForum);
