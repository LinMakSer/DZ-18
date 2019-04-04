var express = require('express');
// var courses = require('./data/courses.json');
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get('/', function(req, res) {
    res.render('index', {title: 'Home'});
});

app.get('/about', function(req, res) {
    res.render('about', {title: 'about'});
});

app.get('/contact', function(req, res) {
    res.render('contact', {title: 'contact'});
});

app.post('/contact', function(req, res) {
    var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'linmakser@gmail.com',
        pass: 'qwerty250807'
    }
});
    
    var mailOptions = {
        from: 'linmakser@gmail.com',
        to: '',
        subject: 'Hello World!',
        text: 'hello world!'
    }
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
    res.redirect('/contact');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});