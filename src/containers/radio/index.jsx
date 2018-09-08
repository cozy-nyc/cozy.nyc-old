import React from 'react';

import ChannelList from 'components/radio/channel-list';


/*
  Radio Home Page
  List current streams featured by cozy.nyc

  TODO:
    div id 'radio-featured' should display image or preview of stream.
*/
const RadioHome = () => (
  <div id="radio-content">
    <div id="radio-featured" className="eight columns">
      <h1>[Album Art Here]</h1>
    </div>

    <div id="radio-sidebar" className="four columns">
      <ChannelList />
    </div>
  </div>
);

export default RadioHome;
