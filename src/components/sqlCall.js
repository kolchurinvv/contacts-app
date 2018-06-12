var mysql = require('mysql');
var res = {};

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cgjkt[kbdjcnm4367",
  database: "contacts"
});

con.connect(function(err) {
  if (err) throw err;
  res = con.query("SELECT * FROM `contact-list`", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  return res
  });
});