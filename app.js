var express = require('express');
// var courses = require('./data/courses.json');
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var app = express();

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'linmakser@gmail.com',
        pass: 'qwerty250807'
    }
});

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
    var user = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    };
    user.push(user);
    var mailOptions = {
        from: 'linmakser@gmail.com',
        to: '',
        subject: 'Hello World!',
        text: 'hello world!'
    }
    transporter.sendMail(option, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
});


// app.get('/courses/add', function(req, res) {
//     res.render('add');
// });

// app.post('/courses/add', function(req, res) {
//     var course = {
//         name: req.body.name,
//         id: Date.now()
//     };
//     courses.push(course);
//     res.redirect('/courses');
// });

// app.get('/courses/edit/:id', function(req,res) {
//     var course = courses.find(function(course) {
//         return course.id === parseInt(req.params.id);
//     });
//     if (!course) {
//         res.sendStatus(404);
//     }
//     res.render('edit', {course: course});
// });

// app.post('/courses/edit/:id', function(req, res) {
//     var course = courses.find(function(course) {
//         return course.id === parseInt(req.params.id);
//     });
//     if(!course) {
//         res.sendStatus(404);
//         return;
//     }
//     course.name = req.body.name;
//     res.redirect('/courses');
// });

// app.get('/courses/delete/:id', function(req, res) {
//     courses = courses.filter(function(course) {
//         return course.id !== parseInt(req.params.id);
//     });
//     res.redirect('/courses');
// });

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});