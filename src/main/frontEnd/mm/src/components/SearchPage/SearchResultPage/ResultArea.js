import React, { Component } from 'react';
import OneCard from './OneCard';
// import image from '/images/GenericProfilePic.png';

class ResultPage extends Component {
  render() {
    return (
      <div className="row row-cols-2 row-cols-md-5 py-4 bg-dark">
        {/* <div className="col mb-4"><OneCard img={"/images/GenericProfilePic.png"} name={"He Lin"} age={20}/></div> */}
        {/* <div className="col mb-4"><OneCard img={image} name={"He Lin"} age={20}/></div> */}
        <div className="col"><OneCard /></div>
        <div className="col mb-4"><OneCard /></div>
        <div className="col"><OneCard /></div>
        <div className="col mb-4"><OneCard /></div>
        <div className="col"><OneCard /></div>
        <div className="col mb-4"><OneCard /></div>
        <div className="col"><OneCard /></div>
        <div className="col mb-4"><OneCard /></div>
        <div className="col"><OneCard /></div>
        <div className="col mb-4"><OneCard /></div>
        <div className="col"><OneCard /></div>
      </div>
    );
  }
}

export default ResultPage;