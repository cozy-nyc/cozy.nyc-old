import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchItems } from 'actions/items/get';
import ItemBox from 'components/shop/itembox';


/**
 * Main/home page for cozy.nyc shop
 *
 */
@connect(
  state => ({
    items: state.items.items,
    itemsFetched: state.items.fetched,
  }),
  fetchItems
)
export default class Shop extends Component {
  static get propTypes() {
    return {
      items: PropTypes.arrayOf(PropTypes.object).isRequired,
      // dispatch: PropTypes.func
    };
  }

  render() {
    fetchItems();
    const { items } = this.props;

    const mappedItems = items.map(item =>
      (<div
        className="three columns"
        key={item.id}
      >
        <ItemBox
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      </div>));

    return (
      <div id="shop-container" className="row">
        {mappedItems}
      </div>
    );
  }
}
