const functions = require('firebase-functions');
var express = require('express');
var path = require('path');
var app = express();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.engine('pug', require('pug').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/timestamp',(request,response) => {
    response.send(`${Date.now()}`);
});

app.get('/userx',(request,response) => {
    response.render('userx', { title: 'Express' });
});

exports.app = functions.https.onRequest(app);
// });

