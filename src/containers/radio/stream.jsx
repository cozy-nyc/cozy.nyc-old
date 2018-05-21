import React, { Component } from 'react';

/**
 * Stream Page
 * Displays video/media feed and chat feed
 *
 */
class Stream extends Component {
  render() {
    return (
      <div id="stream">
        <div id="stream-feed" className="eight columns">
          video goes here
        </div>

        <div id="stream-chat" className="four columns">
          chat goes here
        </div>
      </div>
    );
  }
}

export default Stream;
