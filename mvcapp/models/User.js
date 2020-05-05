var mongoose = require('./dbconn');

var User = mongoose.model('user', {
    user: String,
    pass: String,
    email: String
});


module.exports = User;