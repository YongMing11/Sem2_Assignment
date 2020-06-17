import React, { Component } from 'react';
import OneCard from './OneCard';
import BottomNav from '../../BottomNavComponent';
import { Link } from 'react-router-dom';

class ResultPage extends Component {

  render() {
    console.log("In result page");
    console.log(this.props);
    if (this.props.results) {
      const cards = this.props.results.map((result) => {
        return <Link to={`/chat/${result.username}`} key={result.username}>
          <div className="col mb-4" key={result.username}>
            <OneCard name={result.username} distance={result.distance} match={result.match} />
          </div>;
        </Link>
      });
      return (
        <>
          <div className="row row-cols-2 row-cols-md-5 py-4 bg-dark">
            {cards}
          </div>
          {/* <div className="row fixed-bottom-height bg-dark"></div> */}
        </>
      );
    } else {
      console.log("No result");
      return (
        <>
          <div className="row row-cols-2 row-cols-md-5 py-4 bg-dark">
            {/* <div className="light-orange">No result</div> */}
          </div>
        </>
      );
    }
  }
}

export default ResultPage;