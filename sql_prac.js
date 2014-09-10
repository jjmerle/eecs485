var mysql = require ('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '&tClfunx43()'
});

// No asynchronous callbacks --> Everything happens in order!
connection.connect(function(err) {
	if (err) {
		console.log('error connecting: ' + err.stack);
	return;
	}
	console.log("Great success!");
});

// connection.query('USE SCHEMA bookstore', function(err, rows, fields) {
// if (err) { console.log("Bad!"); }
// });

connection.query('SELECT * FROM javabook.employees', function(err, rows, fields) {
	if (err) { console.log("Bad!"); }

	console.log('The solution is: ', rows[0]);
});

connection.query('SELECT 1 FROM javabook.employees', function(err, rows) {
  console.log(rows);
});

connection.end();

console.log("Here now");