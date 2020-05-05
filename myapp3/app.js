const express = require('express');
const {User, Page} = require('./dbmodels');


const app = express();



app.get('/', function(req, res){
    res.send('<h1>Server is live.</h1>');
});

app.get('/api/users', function(req, res){
    User.find().then(function(datas){
        res.json(datas);
    });
});

app.get('/api/user/input', function(req, res){
   const u = new User();
   u.user = req.query.user;
   u.pass = req.query.pass;
   u.email = req.query.email;
   u.save();

   res.json(u);
});

app.get('/api/pages', function(req, res){
    Page.find().then(function(datas){
        res.json(datas);
    });
});

app.get('/api/page/input', function(req, res){
   const p = new Page();
   p.title = req.query.title;
   p.desc = req.query.desc;
   p.status = req.query.stat;
   p.save();

   res.json(p);
});



app.listen(3000, function(){
    console.log('Server is live');
});