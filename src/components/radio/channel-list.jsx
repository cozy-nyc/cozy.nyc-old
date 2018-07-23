import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

@connect(state => ({
  channels: state.channels,
}))
export default class ChannelList extends Component {
  static propTypes = {
    channels: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  createListItems() {
    return this.props.channels.map(channel =>
      (<li key={channel.id}>
        <Link
          to={{
            pathname: '/radio/' + channel.slug
          }}
          className="active"
        >
          {channel.name}
        </Link>
      </li>));
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}
