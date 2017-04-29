let React = require('react');

let Nav = React.createClass({
    render: function () {
        return (
            <div>
                <h2>React Weather</h2>
                <h2>Get Weather</h2>
                <h2>About</h2>
                <h2>Examples</h2>
                <h2>Stepan Nikiforov</h2>
            </div>
        );
    }
});

module.exports = Nav;
