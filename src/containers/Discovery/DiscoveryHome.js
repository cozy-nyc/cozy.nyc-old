import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import NotAvailable from 'components/NotAvailable/NotAvailable';
// import * as DiscoveryActions from 'redux/modules/discovery';

@connect()
// state => ({
//   status: state.discovery.info
//   discoveries: state.discovery.discoveries
// })
// { ...DiscoveryActions }
class DiscoveryHome extends Component {
  // static propTypes = {
  //   status: PropTypes.string.isRequired
  //   discoveries: PropTypes.arrayOf(PropTypes.object),
  //   getDiscoveries: PropTypes.func.isRequired
  // };

  // static defaultProps = {
  //   discoveries: null
  // };

  // componentWillMount() {
  //   const { getDiscoveries, status } = this.props;
  //   if (status === 'online' || status == null) {
  //     getDiscoveries();
  //   }
  // }

  render() {
    return (
      <div>
        <Helmet title="Discovery" />
        <NotAvailable />
      </div>
    );
  }
}

export default DiscoveryHome;
