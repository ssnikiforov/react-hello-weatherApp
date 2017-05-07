let React = require('react');

let WeatherResult = React.createClass({
    render: function () {
        let {city, temperature} = this.props;

        return (
            <div>
                <p>It's {temperature} &#8451; in {city}.</p>
            </div>
        );
    }
});

module.exports = WeatherResult;
