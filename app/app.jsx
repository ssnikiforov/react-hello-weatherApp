let React = require('react');
let ReactDOM = require('react-dom');

/**
 At the line below you can see example of "object destructuring" from ES6

 It is the same as:
 let Route = require('react-router).Route;
 let Router = require('react-router).Router;
 ... etc.ß

 And one more example:
 let obj = {name: 'MyName'};
 let {name} = obj; // name.obj = obj.name
 **/
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let About = require('About');
let Examples = require('Examples');
let Main = require('Main');
let Weather = require('Weather');

// let city = 'Innopolis';
// let temperature = 'Windy';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/> {/*render children components*/}
        </Route>
    </Router>,
    document.getElementById('app')
);
