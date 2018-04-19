import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { Provider, connect } from 'react-redux';

import ChannelList from '../../components/radio/channel-list';

/**
 * Radio Home Page
 * List current streams featured by cozy.nyc
 *
 * ToDo: div id 'radio-featured' should display image or preview of stream.
 */
class RadioHome extends Component {
  render(){
    return (
      <div id="radio-content">
        <div id="radio-featured" className='eight columns'>
          <h1>[Album Art Here]</h1>
        </div>

        <div id='radio-sidebar' className='four columns'>
          <ChannelList />
        </div>
      </div>
    )
  }
}



export default RadioHome;
