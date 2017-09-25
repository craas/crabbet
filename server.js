var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Team = require('./api/models/teamModel'), //created model loading here
    bodyParser = require('body-parser')
    dotenv = require('dotenv').config();




// mongoose instance connection url connection
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/Tododb');



/* 
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for 
 * plenty of time in most operating environments.
 */
var options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};
var mongodbUri = process.env.mongodbUri;

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function () {
    // Wait for the database connection to establish, then start the app.                         
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




var routes = require('./api/routes/teamRoutes'); //importing route
routes(app); //register the route

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});


app.listen(port);


console.log('CRAB Bet RESTful API server started on: ' + port);