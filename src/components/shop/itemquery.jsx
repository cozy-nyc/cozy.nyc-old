import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchItems } from '../../actions/items/get';

import ItemBox from './itembox';

@connect(
  state => ({
      items: store.items.items,
      itemsFetched: store.items.fetched,
   }),
   fetchItems
)
export default class ItemQuery extends Component {
  static get propTypes() {
    return {
      item: PropTypes.any.arrayOf(PropTypes.object).isRequired,
      // dispatch: PropTypes.func
    };
  }

  render(){
    const items = this.props;
    fetchItems(items)

    const mappedItems = items.map(item =>
      <div className="three columns"
         key={ item.id }>
         <ItemBox
         id={ item.id }
         image={ item.image }
         name={ item.name }
         price={ item.price }
      /></div>)

    return (
      <div className="row">
        {mappedItems}
      </div>
    );
   }
}
