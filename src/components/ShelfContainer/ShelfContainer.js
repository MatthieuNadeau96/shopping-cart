import React, { Component } from 'react';

import ShelfItems from './ShelfItems/ShelfItems';

class ShelfContainer extends Component {

  render() {
    return (
      <div className="shelfContainer">
        <div className="shelfHeaderContainer">Shelf Header</div>
        <div className="shelfItemsContainer">
          <ShelfItems
            title="Placeholder Title"
            price="$10.00"
            />
          <ShelfItems
            title="Placeholder Title"
            price="$23.00"
            />
          <ShelfItems
            title="Placeholder Title"
            price="$13.00"
            />
          <ShelfItems
            title="Placeholder Title"
            price="$7.00"
            />
          <ShelfItems
            title="Placeholder Title"
            price="$15.00"
            />
          <ShelfItems
            title="Placeholder Title"
            price="$14.00"
            />
          <ShelfItems
            title="Placeholder Title"
            price="$29.00"
            />
          <ShelfItems
            title="Placeholder Title"
            price="$10.50"
            />
        </div>
      </div>
    );
  }
}

export default ShelfContainer;
