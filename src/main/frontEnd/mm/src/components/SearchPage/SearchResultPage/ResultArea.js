import React, { Component } from 'react';
import OneCard from './OneCard';

class ResultPage extends Component {
  render() {
    return (
      <div className="row row-cols-2 row-cols-md-5 py-4 bg-dark">
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
        <div className="col mb-4"><OneCard /></div>
        <div className="col"><OneCard /></div>
      </div>
    );
  }
}

export default ResultPage;