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

// app1.use(bodyParser.json());
// app1._router.use(bodyParser.urlencoded({extended: false}));
// app1.use('/user', user);
// let port1 = 6789;
// app1.listen(port1, () => {
//     console.log("Client is running on port " + port1);
// });

// app1.get('/user', function (req, res) {
//     res.sendFile(__dirname+"/form.html");
// });  