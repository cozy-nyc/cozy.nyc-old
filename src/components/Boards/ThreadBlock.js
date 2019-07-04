import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*
  Thread Component
  Bubble/Text box for Threads.
*/
class ThreadBlock extends Component {
  static propTypes = {
    // Define the proptyes being used here.
  };

  render() {
    const { /* props needed */ } = this.prop;

    return (
      <div>
        {/*
          Needs to display Thread image(If it exist), user/profile of poster, blurb,
          and post date.
        */}
      </div>
    );
  }
}

export default ThreadBlock;
