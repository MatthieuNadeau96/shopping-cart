import React, { Component } from 'react';

class AddToCartButton extends Component {

  render() {
    return (
      <div className={this.props.hover ? "add-to-cart-button-active" : "add-to-cart-button"}>
        Add to Cart
      </div>
    );
  }

}

export default AddToCartButton;
