const db = require('./dbconn');

const userSchema = new db.Schema({
    user: String,
    pass: String,
    email: String,
});
const User = db.model('user', userSchema);

// Pages Model
const Page = db.model('page', {
    title: String,
    desc: String,
    status: Boolean,
});



module.exports = {
    User,
    Page
};