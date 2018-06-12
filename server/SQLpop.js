// ничего трогать не надо...
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cgjkt[kbdjcnm4367",
  database: "contacts"
});
// ... аж до сих пор.
// ------------------------------------------------------------
// Задание находится внутри этой функии
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
