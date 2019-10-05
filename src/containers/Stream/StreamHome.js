import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
// import StreamBlock from 'components/Stream/StreamBlock';
import NotAvailable from 'components/NotAvailable/NotAvailable';
import * as StreamActions from 'redux/modules/stream';

@connect(
  state => ({
    streamsList: state.stream.streamsList
  }),
  { ...StreamActions }
)
class Stream extends Component {
  // static propTypes = {
  //   streamsList: PropTypes.arrayOf(PropTypes.object),
  //   getStreams: PropTypes.func.isRequired
  // };

  // static defaultProps = {
  //   streamList: null
  // };

  // componentWillMount() {
  //   const { getStreams, streamsList } = this.props;
  //   if (!streamsList) {
  //     getStreams();
  //   }
  // }

  render() {
    // const { streamsList } = this.props;

    // const mappedStreams = streamsList.map(stream => (
    //   <StreamBlock
    //     key={stream.id}
    //     user={stream.username}
    //     preview={stream.previewImg}
    //     title={stream.title}
    //     viewers={stream.viewCount}
    //   />
    // ));

    return (
      <div>
        <Helmet title="stream" />
        <div>
          <NotAvailable />
        </div>
      </div>
    );
  }
}
export default Stream;
