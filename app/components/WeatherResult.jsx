let React = require('react');

let WeatherResult = React.createClass({
    render: function () {
        let city = this.props.city;
        let temperature = this.props.temperature;

        return (
            <div>
                <p>It's {temperature} in {city}</p>
            </div>
        );
    }
});

module.exports = WeatherResult;