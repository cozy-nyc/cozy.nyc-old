import React, { Component } from 'react';

/*
  PopUp Forum Component

  Forum for creating a post on a thread.
*/
const PopupForum = () => (
  <div id="reply-forum-popup">
    <div className="popup_inner">
      <input name="image" type="file" /> <button>enter</button>
      <textarea name="message" placeholder=">sample text." />
    </div>
  </div>
);


{/*
  Relpy Forum Component

  Handles popup for the forum.
*/}
class ReplyForum extends Component {
  constructor() {
    super();
    this.state = {
      showPopupForum: false
    };
  }

  togglePopup() {
    console.log('noot');
    this.setState({
      showPopupForum: !this.state.showPopupForum
    });
    console.log(this.state);
  }

  render() {
    const pencil = require('assets/img/pencil.svg');
    const popup = (this.state.showPopupForum ? <PopupForum /> : null);
    return (
      <div id="reply-forum">
        {popup}
        <a id="reply-button" onClick={() => this.togglePopup()}>
          <img src={pencil} alt="create post" />
        </a>
      </div>
    );
  }
}

export default (ReplyForum);
