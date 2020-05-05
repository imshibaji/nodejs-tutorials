var User = require('../models/User');

class FrontController{
    index(req, res, next){
        res.render('index', {title: 'Home Page'});
    }

    about(req, res){
        res.render('index', {title: 'About Page'})
    }

    contact(req, res){
        res.render('index', {title: 'Conatact Page'})
    }

    async users(req, res){
        const users = await User.find();
        res.render('users',{title: 'Users Page', users: users});
    }
}

module.exports = new FrontController();