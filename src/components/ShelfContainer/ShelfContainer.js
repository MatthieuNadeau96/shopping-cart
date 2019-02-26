import React, { Component } from 'react';

import ShelfItems from './ShelfItems/ShelfItems';

class ShelfContainer extends Component {

  render() {

    return (
      <div className="shelfContainer">
        <div className="shelfHeaderContainer">Shelf Header</div>
        <ShelfItems/>
      </div>
    );
  }
}

export default ShelfContainer;
