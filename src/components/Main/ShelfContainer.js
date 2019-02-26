import React, { Component } from 'react';


class ShelfContainer extends Component {

  render() {
    let items = [];
    for(var i = 0; i < 16; i++) {
      items.push(
        <div className="shelf-item">
          Item{[i]}
        </div>
      )
    }
    return (
      <div className="shelfContainer">
        <div className="shelfHeaderContainer">Shelf Header</div>
        <div className="shelfItemsContainer">
          {items}
        </div>
      </div>
    );
  }

}

export default ShelfContainer;
