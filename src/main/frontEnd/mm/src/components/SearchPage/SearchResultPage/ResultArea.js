import React, { Component } from 'react';
import OneCard from './OneCard';
import { getSearchResult } from '../../../HTTPRequest';
import BottomNav from '../../BottomNavComponent';

class ResultPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: ""
    }
  }

  componentDidMount() {
    getSearchResult(this.props.minDist, "Both").then(response => {
      this.setState({
        results: response
      });
    });
  }

  render() {
    console.log(this.state.results);
    if (this.state.results) {
      const cards = this.state.results.map((result) => {
        return <div className="col mb-4" key={result.username}><OneCard name={result.username} distance={result.distance} match={result.match} /></div>;
      });
      return (
        <>
          <div className="row row-cols-2 row-cols-md-5 py-4 bg-dark">
            {cards}
          </div>
          <div className="row fixed-bottom-height bg-dark"></div>
          <div className={"row fixed-bottom"}>
            <div className="col-12 m-0">
              <BottomNav />
            </div>
          </div>
        </>
      );
    } else {

      return (
        <>
          <div className="row row-cols-2 row-cols-md-5 py-4 bg-dark">
            {/* <div className="light-orange">No result</div> */}
          </div>
          <div className="row fixed-bottom-height bg-dark"></div>
          <div className={"row fixed-bottom"}>
            <div className="col-12 m-0">
              <BottomNav />
            </div>
          </div>
        </>
      );
    }
  }
}

export default ResultPage;