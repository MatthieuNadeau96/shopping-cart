import React, { Component } from 'react';

class ShelfItem extends Component {

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
      <div>
        {items}
      </div>
    );
  }

}

export default ShelfItem;
