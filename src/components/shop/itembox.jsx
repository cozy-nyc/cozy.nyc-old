import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class ItemBox extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
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
          <img src={this.props.imageurl} alt={this.props.name} />
          <h3>{this.props.name}</h3>
          <h3>Designer</h3>
          <h3>${this.props.price}</h3>
        </Link>
      </div>

    );
  }
}

export default ItemBox;
