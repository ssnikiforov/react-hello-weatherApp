let React = require('react');

// let WeatherResult = (props) => {
//     let {city, temperature} = props;
//
//     return (
//         <div>
//             <p>It's {temperature} &#8451; in {city}.</p>
//         </div>
//     );
// };

/*
    Very arcane shorthand implementation - below
*/
let WeatherResult = ({city, temperature}) => { // city = props.city, temperature = props.temperature
    return (
        <div>
            <p>It's {temperature} &#8451; in {city}.</p>
        </div>
    );
};

module.exports = WeatherResult;
