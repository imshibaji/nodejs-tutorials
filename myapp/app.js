// API (Application Programmable Interface)
var express = require('express');
var bodyParser = require('body-parser');
var app = express();




// Routing Options
// GET, POST

app.get('/', function(req, res, next){

    res.send('<h1>Hello All</h1>');
});


app.get('/api/get', function(req, res){
var dataSample = [
    {
        name: 'Joy',
        job: 'Website Designer',
        loc: 'Kolkata'
    },
    {
        name: 'Bijoy',
        job: 'Website Developer',
        loc: 'Kolkata'
    },
];

res.json(dataSample);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/post', function(req, res){
var ureq = req.body;
ureq.message = 'Message from Server';
res.json(ureq);
});


app.get('*', function(req, res){
    res.send('<h1>Page Not Found</h1');
});

app.listen('3000', function(){
    console.log('Server is Live');
})