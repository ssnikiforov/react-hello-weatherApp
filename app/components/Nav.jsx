let React = require('react');

let {Link, IndexLink} = require('react-router'); // Link = react-router.Link

let Nav = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Nav Component</h2>
                {/*т.к. мы используем IndexRoute, то здесь мы должны использовать IndexLink*/}
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>

                {/*мы не используем стандартные анкоры потому,
                что они не дают работать с activeClassName и activeStyle*/}
                {/*<a href="/about">About</a> */}
            </div>
        );
    }
});

module.exports = Nav;
