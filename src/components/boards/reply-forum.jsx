import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';

class PopupForum extends Component {
  render() {
    return (
      <div id='reply-forum-popup'>
        <div className='popup_inner'>
          <input name="image" type="file" /> <button>enter</button>
          <textarea name="message" placeholder=">sample text." />
        </div>
      </div>
    );
  }
}

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
      showPopupForum:!this.state.showPopupForum
    });
    console.log(this.state);
  }

  render() {
    const popup = (this.state.showPopupForum ? <PopupForum /> : null);
    return (
      <div id='reply-forum'>
        { popup }
        <button id="reply-button" onClick={() => this.togglePopup() }> reply </button>
      </div>
    )

  }
}

export default (ReplyForum);
