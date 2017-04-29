let React = require('react');

let {Link} = require('react-router'); // Link = react-router.Link

let Nav = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Nav Component</h2>
                <Link to="/">Get Weather</Link>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
                {/*<h2>React Weather</h2>*/}
                {/*<h2>Get Weather</h2>*/}
                {/*<h2>About</h2>*/}
                {/*<h2>Examples</h2>*/}
                {/*<h2>Stepan Nikiforov</h2>*/}
            </div>
        );
    }
});

module.exports = Nav;
