/**
 * Created by snikiforov on 07/05/2017.
 */

let axios = require('axios');
let appId = require('../../credentials');

let openWeatherMapHeadOfUrl = 'http://api.openweathermap.org/data/2.5/weather?';
let openWeatherMapOptions = [
    'appid=' + appId(),
    '&units=metric'
];
let openWeatherMapOptionsString = openWeatherMapOptions.join('');


module.exports = {
    getTemperature: function (city) {
        let encodedCity = encodeURIComponent(city); // prevent of changing special symbols to their encoded alts
        let requestUrl = `${openWeatherMapHeadOfUrl}${openWeatherMapOptionsString}&q=${encodedCity}`;
        console.log(requestUrl);

        return axios.get(requestUrl).then(function (response) { // success
            if (response.data.cod && response.data.message) { // but also checking for errors
                throw new Error (response.data.message);
            }

            return response.data.main.temp;
        }).catch(function (response) { // error
            console.log(response);
            throw new Error(response);
        })
    }
};
