import React, { Component } from 'react';

import Sizes from './Sizes';

class Filters extends Component {



  render() {
    return (
      <div className="filtersContainer">
        <h3>Sizes</h3>
        <Sizes clicked={this.props.clicked} size="XS"/>
        <Sizes clicked={this.props.clicked} size="S"/>
        <Sizes clicked={this.props.clicked} size="M"/>
        <Sizes clicked={this.props.clicked} size="L"/>
        <Sizes clicked={this.props.clicked} size="XL"/>
        <Sizes clicked={this.props.clicked} size="XXL"/>
      </div>
    );
  }

}

export default Filters;
