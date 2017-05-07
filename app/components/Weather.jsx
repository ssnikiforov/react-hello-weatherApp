let React = require('react');
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
    handleUpdates: function (updates) {
        this.setState(updates);
    },
    render: function () {
        let city = this.state.city;
        let temperature = this.state.temperature;

        return (
          <div>
              <h3>Weather Component</h3>
              <WeatherForm onUpdates={this.handleUpdates} />
              <WeatherResult city={city} temperature={temperature}/>
          </div>
        );
    }
});

module.exports = Weather;
