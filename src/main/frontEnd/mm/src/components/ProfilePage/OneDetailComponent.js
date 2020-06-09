import React, { Component } from 'react';

class OneDetail extends Component {

  render() {
    return (
      <div className="row light-orange pt-1">
        <div className="col-6">
          <h5>{this.props.item}</h5>
        </div>
        <div className="col-5">
          <h5>{this.props.value}</h5>
        </div>
      </div>
    );
  }
}

export default OneDetail;