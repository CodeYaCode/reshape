// app.js
var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');

var routes = require('./routes/index');

const DEFAULT_PORT = 80;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname , 'views')));

// routes
app.use('/', routes);

// session
app.use(session({
	secret : 'secret',
	cookie : {
		maxAge: 1000 * 60 * 30
	}
}));

app.use(function(req, res, next){ 
    res.locals.user = req.session.user;   // 从session 获取 user对象
    var err = req.session.error;   //获取错误信息
    delete req.session.error;
    res.locals.message = "";   // 展示的信息 message
    if(err){ 
        res.locals.message = '<div class="alert alert-danger" style="margin-bottom:20px;color:red;">'+err+'</div>';
    }
    next();  //中间件传递
});

// catch 404
// app.use(function(req, res, next) {
// 	var err = new Error('Not Found');
// 	err.status = 404;
// 	// next(err);
// });

// app.get('/', function(req, res) {
// 	res.sendFile('index.html');
// });

app.listen(DEFAULT_PORT, function() {
	console.log('Server start...');
});