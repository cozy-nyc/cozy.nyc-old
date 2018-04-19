import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getItem } from 'actions/items/get';

/**
 * Individual Item page
 *
 */
@connect(
  state => ({
    item: state.items.activeitem,
  }),
  getItem
)
export default class Item extends Component {
  static get propTypes() {
    return {
      item: PropTypes.any.arrayOf(PropTypes.object).isRequired,
      // dispatch: PropTypes.func
    };
  }

  render() {
    const { item } = this.props;

    if (!item) {
      return getItem(item);
    }
    return (
      <div>
        <div className="six columns">
          <img src={item.image} alt="item preview" />
        </div>

        <div id="content" className="six columns">
          <h3>{item.name}</h3>
          <h3>${item.price}</h3>
          <h3>Designer</h3>
          <h3>{item.location}</h3>
          <h3>{item.description}</h3>
          <h3>{item.materal}</h3>
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    );
  }
}
