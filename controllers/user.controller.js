// this is a placeholder controller
const { default: mongoose } = require('mongoose');
const request = require('request');
const users = require('../models/user.model');
const nonSakec = require('../models/user.model')
const url = require('url');

// no validation and sanitation
// Check the below link to learn about these topics 
// https://medium.com/@abderrahman.hamila/what-sanitize-mean-and-why-sanitize-in-code-data-5c68c9f76164

// this is an API with necessary CRUD operations.

exports.test = function(req, res) {
    res.send('Hello, this is a test controller!');
};


// insert a document in the database, it takes input not through some function, so maybe we can try and work around with and onclick.
exports.user_create = function(req, res, next) {
    // take input from document here
    const ch = new users({
        name: req.body.uname,
        email: req.body.umail, //pk
        phone: req.body.phone,
        year: req.body.year,
        class: req.body.classPicker,
        branch: req.body.branch,
        regno: req.body.regno
    });

    ch.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('You have successfully registered for the event! You can go back now.');
    })
};

exports.non_sakec_create = function(req, res, next) {
    // take input from document here
    const ns = new nonSakec({
        name: req.body.uname,
        email: req.body.umail, //pk
        phone: req.body.phone,
        college: req.body.college,
        field: req.body.year,
        year: req.body.year
    });

    ns.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('You have successfully registered for the event! You can go back now.');
    })
};


exports.read_user = function(req, res, next) {
    users.findById(mongoose.Types.ObjectId(req.params.id), function(err, ch) {
        if (err) return next(err);
        res.send(ch);
    })
};

exports.update_user = function(req, res, next) {
    users.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {$set: {name: "Vansh"}},
    function(err){
        if (err) return next(err);
        res.send('user updated.');
    });
};

exports.delete_user = function(req, res, next) {
    users.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id), function(err){
        if (err) return next(err);
        res.send('user deleted.');
    });
};
