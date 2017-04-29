let React = require('react');
let Nav = require('Nav');

let Main = React.createClass({
    render: function () {
        return (
            <div>
                <Nav/>
                <h2>Main component</h2>
            </div>
        );
    }
});

module.exports = Main;
