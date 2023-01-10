const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name : {type: String, required: true},
    email: {type: String},
    phone: {type: String},
    year: {type: String},
    class: {type: String},
    roll: {type: String}
});

let nonSakec = new Schema({
    name : {type: String, required: true},
    email: {type: String},
    phone: {type: String},
    year: {type: String},
    class: {type: String},
    roll: {type: String}
});

module.exports = mongoose.model('nonSakec', nonSakec );
module.exports = mongoose.model('users', userSchema);