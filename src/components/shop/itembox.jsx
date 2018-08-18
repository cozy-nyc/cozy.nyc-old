import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ItemBox extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    seller_name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  };

  render() {
    const id = parseInt(this.props.id, 10);
    const url = '/shop/' + id;

    return (
      <div className="itembox visible">
        <Link
          to={{ pathname: url }}
          className="active"
        >
          <img src={this.props.image} alt={this.props.name} />
          <h3>{this.props.name}</h3>
          <h4>@{this.props.seller_name}</h4>
          <h4>${this.props.price}</h4>
        </Link>
      </div>
    );
  }
}
