import React, { Component } from 'react';

import AddToCartButton from './AddToCartButton';

class ShelfItems extends Component {


  render() {
    return (
      <div className="shelf-item">
        <p className="shelf-item-title">{this.props.title}</p>
        <h3 className="shelf-item-price">{this.props.price}</h3>
        <AddToCartButton hover={this.props.hover}/>
      </div>
    );
  }

}

export default ShelfItems;
