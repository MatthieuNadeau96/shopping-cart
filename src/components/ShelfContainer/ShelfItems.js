import React, { Component } from 'react';

import AddToCartButton from './AddToCartButton';

class ShelfItems extends Component {

  render() {
    let items = [];
    for(var i = 0; i < 16; i++) {
      items.push(
        <div className="shelf-item">
          Item{[i]}
          <AddToCartButton/>
        </div>
      )
    }
    return (
      <div className="shelfItemsContainer">
       {items}
      </div>
    );
  }

}

export default ShelfItems;
