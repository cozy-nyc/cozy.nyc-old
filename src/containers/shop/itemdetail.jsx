import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getItem } from 'actions/items/get';

/**
 * Individual Item page
 *
 */


@connect(state => ({
  item: state.items.activeitem,
}))
export default class Item extends Component {
  static get propTypes() {
    return {
      item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
      match: PropTypes.shape({
        params: PropTypes.shape({
          itemid: PropTypes.string.isRequired
        })
      }),
      dispatch: PropTypes.func.isRequired
    };
  }

  componentWillMount() {
    this.props.dispatch(getItem(this.props.match.params.itemid));
  }

  render() {
    const { item } = this.props;

    return (
      <div id="itemdetail-container">
        <div id="itemdetail-display" className="six columns">
          <img src={item.image} alt="item preview" />
        </div>

        <div id="itemdetail-info" className="six columns">
          <h3>{item.name}</h3>
          <h3>${item.price}</h3>
          <h3>Designer</h3>
          <h3>{item.description}</h3>
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    );
  }
}
