import React, { Component } from 'react';

class Sizes extends Component {

  render() {
    return (
      <div onClick={this.props.clicked} className="size-button">
        {this.props.size}
      </div>
    );
  }

}

export default Sizes;
