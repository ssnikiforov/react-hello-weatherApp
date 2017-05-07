let React = require('react');
let openWeatherMap = require('openWeatherMap');
let WeatherForm = require('WeatherForm');
let WeatherResult = require('WeatherResult');

let Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        };
    },
    handleSearch: function (updates) {
        let _that = this;

        this.setState({isLoading: true});

        openWeatherMap.getTemperature(updates.city).then(function (temperature) {
            _that.setState({
                city: updates.city,
                temperature: temperature,
                isLoading: false
            });
        }).catch(function (errorMessage) {
            _that.setState({
                isLoading: false,
                city: null,
                temperature: null
            });
            alert(errorMessage);
        });
    },
    render: function () {
        let {isLoading, city, temperature} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (city && temperature) {
                return <WeatherResult city={city} temperature={temperature}/>
            }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
