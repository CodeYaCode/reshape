// sql.js
var SQL = {}

SQL['USER'] = {
	"register" : "INSERT INTO user (username, password, wechat) VALUES (?, ?, ?)",
	"login" : "SELECT * FROM user WHERE username = ? AND password = ?", 
}

module.exports = SQL;