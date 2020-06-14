import React, { Component } from 'react';
// import image from '../../../images/GenericProfilePic.png';
import ResultArea from './ResultArea';

class ResultPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* <div className="row flex-row-reverse">
        <Button onClick={this.props.handleSearch} className="bg-info">Sort</Button>
        </div> */}
          <ResultArea minDist={this.props.minDist}/>
      </div>
    );
  }
}

export default ResultPage;