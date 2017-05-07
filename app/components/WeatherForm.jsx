let React = require('react');

let WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        let city = this.refs.city.value;
        let temperature = "58";
        let updates = [];

        if (typeof city === "string" && city.length > 0) {
            this.refs.city.value = '';
            updates.city = city;
        }

        if (typeof temperature === "number") {
            updates.temperature = temperature;
        }

        this.props.onSearch(updates);
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="city" placeholder="Enter the city name"/>
                    </div>
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
