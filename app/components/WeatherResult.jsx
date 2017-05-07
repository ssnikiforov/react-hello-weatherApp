let React = require('react');

let WeatherResult = React.createClass({
    render: function () {
        let {city, temperature} = this.props;

        return (
            <div>
                <p>It's {temperature} in {city}</p>
            </div>
        );
    }
});

module.exports = WeatherResult;
