let React = require('react');

let WeatherResult = React.createClass({
    render: function () {
        // let city = this.props.city;
        // let temperature = this.props.temperature;
        let {city, temperature} = this.props;

        return (
            <div>
                <p>It's {temperature} in {city}</p>
            </div>
        );
    }
});

module.exports = WeatherResult;
