import React, { Component } from 'react';
//boiler plate for container components to connect to redux
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';

class WeatherList extends Component {

  renderWeather(cityData, i){

    const temps = cityData.list.map((weather)=>{return weather.main.temp;});
    const pressures = cityData.list.map((weather)=>{return weather.main.pressure;});
    const humidities = cityData.list.map((weather)=>{return weather.main.humidity;});
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    console.log(temps);

    return(
      <tr key={i}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units='K' /></td>
        <td><Chart data={pressures} color="purple" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps(state){
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
