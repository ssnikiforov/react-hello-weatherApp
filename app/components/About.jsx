let React = require('react');

// let About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

/*
 Если компонент не мэйнтэйнит стэйты, а используется только для рендиринга, то см. ниже
 */

// let About = function (props) { // stateless functional component
//     return (
//         <h3>About Component</h3>
//     );
// };

let About = () => { // stateless functional component with arrow functions
    return (
        <h3>About Component</h3>
    );
};

module.exports = About;
