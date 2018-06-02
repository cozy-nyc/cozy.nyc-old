import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ItemBox extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  };

  render() {
    const id = parseInt(this.props.id, 10);
    const url = '/shop/' + id;

    return (
      <div className="item-block visible">
        <Link
          to={{ pathname: url }}
          className="active"
        >
          <img src={this.props.image} alt={this.props.name} />
          <h3>{this.props.name}</h3>
          <h3>Designer</h3>
          <h3>${this.props.price}</h3>
        </Link>
      </div>
    );
  }
}

export default ItemBox;
