// db.js

var DB = {}

DB['ONLINE'] = {
	host     : '43.248.96.156',
	user     : 'root',
	password : '123456',
	port     : '3306',
	database : 'reshape',
	// charset  : '',
}

DB['TEST'] = {
	host     : '127.0.0.1',
	user     : 'root',
	password : '123456',
	port     : '3306',
	database : 'reshape',
}

module.exports = DB