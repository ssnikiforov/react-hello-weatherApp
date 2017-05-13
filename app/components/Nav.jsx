let React = require('react');

let {Link, IndexLink} = require('react-router'); // Link = react-router.Link

let Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        alert('Not yet wired up');
    },
    render: function () {
        return (
            // see http://foundation.zurb.com/sites/docs/top-bar.html
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather App
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                                Get Weather
                            </IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                                Examples
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    {/*here - not from foundation's example, but our custom realization*/}
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;

/*
 * <div>
 *  <h2>Nav Component</h2>
 *  {/!*т.к. мы используем IndexRoute и родительские Route компоненты,
 *  то здесь мы должны использовать IndexLink*!/}
 *  <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
 *  <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
 *  <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
 *
 *  {/!*мы не используем стандартные анкоры потому, что они не дают работать с activeClassName и activeStyle*!/}
 *  {/!*<a href="/about">About</a> *!/}
 * </div>;
 */
