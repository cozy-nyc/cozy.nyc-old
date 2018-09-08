import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { getItem } from 'actions/items/get';


/*
  Individual Item page

  Displays information of an item and allows user to purchase item if available.
*/
@connect(state => ({
  item: state.items.activeitem,
}))
export default class Item extends Component {
  static get propTypes() {
    return {
      item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        images: PropTypes.array.isRequired,
        price: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        seller_name: PropTypes.string.isRequired,
      })
    };
  }

  componentWillMount() {
    this.props.dispatch(getItem(this.props.match.params.itemid));
  }

  render() {
    const { item } = this.props;
    const title = 'shop - ' + item.name.toLowerCase();

    const mappedImages = item.images.map(image =>
      <img src={image.image} alt={image.item_name} key={image.id} />);

    return (
      <div id="itemdetail-container">
        <Helmet title={title} />
        <div id="itemdetail-display" className="col-xs-6 ">
          {mappedImages}
        </div>

        <div id="itemdetail-info" className="col-xs-6 ">
          <h2>{item.name}</h2>
          <h3>${item.price}</h3>
          <h4>@{item.seller_name}</h4>
          <p>{item.description}</p>
          <button>Buy Now</button>
        </div>
      </div>
    );
  }
}
