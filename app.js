const express = require('express');
const app = express();
const app1 = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
// const request = require('request');
// import route
const user = require('./routes/user.route');

// initialize app
app.use(bodyParser.json());
app._router.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs")
app.engine('ejs', require('ejs').__express);
app.use('/user', user);

// set up mongoose connection
let db_url = ''; //Connection string
let mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// port
let port  = 2345;
app.listen(port, () => {
    console.log("Server is running on port " + port);
});
