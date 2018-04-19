import React from 'react';
import {Link} from 'react-router'

const ItemBox = (props) => {

  var id = parseInt(props.id);
  var url = '/shop/' + id;

  return (

    <div className="item-block visible">
      <Link to={{
        pathname: url
      }} activeClassName="active">
        <img src={props.image}/>
        <h3>{props.name}</h3>
        <h3>Designer</h3>
        <h3>${props.price}</h3>
      </Link>
    </div>

  );
};

export default ItemBox;
