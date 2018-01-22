import React, { Component } from 'react';
//boiler plate for container components to connect to redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//action creator
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({
      term: e.target.value
    });
  }

  onFormSubmit(e){
    e.preventDefault();
    //call action creator : fetch weather data
    // Now that its connected we have fetchWeather function as props
    this.props.fetchWeather(this.state.term); //holds city;
    this.setState({
      term: '' //set state to empty string.
    });
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

//first
function mapDispatchToProps(dispatch){
  //fetchWeather causes action creator to return an actions
  //flows to applyMiddleware and reducers.
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
