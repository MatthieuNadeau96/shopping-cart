import React, { Component } from 'react';

import Filters from './Filters/Filters';
import ShelfContainer from './ShelfContainer/ShelfContainer';

class Main extends Component {

  render() {
    return (
      <div>
        <ShelfContainer/>
        <Filters/>
      </div>
    );
  }

}

export default Main;
