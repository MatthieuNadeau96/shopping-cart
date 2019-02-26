import React, { Component } from 'react';

import ShelfItems from './ShelfItems/ShelfItems';

class ShelfContainer extends Component {

  render() {

    return (
      <div className="shelfContainer">
        <div className="shelfHeaderContainer">Shelf Header</div>
        <div className="shelfItemsContainer">
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
          <ShelfItems title="Placeholder Title" price="$13.00"/>
        </div>
      </div>
    );
  }
}

export default ShelfContainer;
