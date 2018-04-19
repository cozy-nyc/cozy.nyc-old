import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router';


class Post extends Component {
  render() {
    if ( this.props.image == null ){
      return (
        <div className='message-wrapper'>
          <div className='message-poster'>
            <img className='profile-image' src={ this.props.user.avatarUrl } />
            <p>{ this.props.user.username }</p>
          </div>
          <div className='message-bubble'>
            { this.props.message }
          </div>
          <span>
            { this.props.date }
          </span>
        </div>
      )
    }else{
      return (
        <div className='message-wrapper'>
          <div className='message-poster'>
            <img className='profile-image' src={ this.props.user.avatarUrl } />
            <p>{ this.props.user.username }</p>
          </div>
          <div className='message-bubble'>
            <img className='message-image' src={ this.props.image } />
            <span className='message-text'>
              { this.props.message }
            </span>
          </div>
          <span>
            { this.props.date }
          </span>
        </div>
      )
    }
  }
}

export default (Post);
