var mongoose = require('mongoose');

module.exports = mongoose.model('Login', mongoose.Schema({
    username: String,
    password: String,
    email: String
}));
