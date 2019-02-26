import React, { Component } from 'react';

import ShelfItem from './ShelfItem';

class ShelfContainer extends Component {

  render() {
    return (
      <div className="shelfContainer">
        <h2>Shelf Container</h2>
        <ShelfItem/>
      </div>
    );
  }

}

export default ShelfContainer;
