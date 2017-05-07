let express = require('express');

let app = express();
const PORT = process.env.PORT || 3000; // 3000 for localhost

// for heroku
// express middleware, for redirect traffic from openWeatherMap`s http to https middleware service
app.use(function (request, response, next) {
  if (request.headers['x-forwarded-proto'] === 'https') {
      response.redirect('http://' + request.hostname + request.url);
  } else {
      next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Server is started on port ' + PORT);
});
