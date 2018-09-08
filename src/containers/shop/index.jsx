import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { fetchItems } from 'actions/items/get';
import ItemBox from 'components/shop/itembox';


/*
  Shop Home Page

  Main/home page for cozy.nyc shop

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
    const { items } = this.props;

    const mappedItems = items.map(item =>
      (<div
        className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
        key={item.id}
      >
        <ItemBox
          id={item.id}
          image={item.images[0].image}
          name={item.name}
          seller_name={item.seller_name}
          price={item.price}
        />
      </div>));

    return (
      <div id="shop-container" className="row center-xs">
        <Helmet title="shop" />
        {mappedItems}
      </div>
    );
  }
}
