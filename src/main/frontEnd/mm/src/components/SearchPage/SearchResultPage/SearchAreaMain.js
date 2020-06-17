import React, { Component } from 'react';
import ResultArea from './ResultArea';
import SearchArea from './SearchAreaComponent';
import { getSearchResult } from '../../../HTTPRequest';
import BottomNav from '../../BottomNavComponent';
import { Redirect } from 'react-router-dom';

class SearchAreaMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      minDist: 100,
      isSearch: false,
      results: "",
      isMounted: false
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ?
      target.checked : target.value;
    const name = target.name;
    console.log("Previous value: " + value);
    this.setState({
      [name]: value
    });
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  onSubmitSearch(event) {
    event.preventDefault();
    console.log("getting results of the search...");
    getSearchResult(this.props.username, this.state.minDist, this.state.selectedOption)
      .then(response => {
        this.setState({
          results: response
        });
      });
  }

  render() {
    if (!this.props.isLoggedIn) {
      return (
        <Redirect to="/login" />
      );
    }
    return (
      <div className="container-fluid">

        <SearchArea
          isLoggedIn={this.props.isLoggedIn}
          onValueChange={this.onValueChange}
          handleInputChange={this.handleInputChange}
          minDist={this.state.minDist}
          gender={this.state.selectedOption}
          onSubmitSearch={this.onSubmitSearch} />

        <ResultArea
          results={this.state.results}
          minDist={this.state.minDist}
          gender={this.state.selectedOption} />

        <div className="row fixed-bottom">
          <div className="col-12 m-0">
            <BottomNav />
          </div>
        </div>

      </div>
    );
  }
}

export default SearchAreaMain;