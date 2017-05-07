let React = require('react');
let openWeatherMap = require('openWeatherMap');
let WeatherForm = require('WeatherForm');
let WeatherResult = require('WeatherResult');

let Weather = React.createClass({
    getDefaultProps: function () {
      return {
        city: 'Innopolis',
        temperature: 'Windy'
      };
    },
    getInitialState: function () {
        return {
            city: this.props.city,
            temperature: this.props.temperature
        };
    },
    handleSearch: function (updates) {
        let _that = this;

        openWeatherMap.getTemperature(updates.city).then(function (temperature) {
            _that.setState({
                city: updates.city,
                temperature: temperature
            });
        }).catch(function (errorMessage) {
            alert(errorMessage);
        });
    },
    render: function () {
        let {city, temperature} = this.state;

        return (
          <div>
              <h3>Weather Component</h3>
              <WeatherForm onSearch={this.handleSearch} />
              <WeatherResult city={city} temperature={temperature}/>
          </div>
        );
    }
});

module.exports = Weather;
