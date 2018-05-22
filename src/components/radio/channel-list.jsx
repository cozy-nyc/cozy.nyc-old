import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';


class ChannelList extends Component {
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
          ClassName="active"
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

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

export default connect(mapStateToProps)(ChannelList);
