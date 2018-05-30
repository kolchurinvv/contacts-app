var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "liminor",
  password: "100%Full_pr0of",
  database: "contacts"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE `contact-list` (id INT AUTO_INCREMENT PRIMARY KEY, `Fisrt name` VARCHAR(20), Surname VARCHAR(20), Phone INT(11), Email VARCHAR(30), Notes VARCHAR(200))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});