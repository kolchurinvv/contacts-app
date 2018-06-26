var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cgjkt[kbdjcnm4367",
  database: "contacts"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO Contacts (`First name`, Surname, Phone, Email, Notes) VALUES ?";
  var values = [
    ['Salvatore', 'Formisano', '+393933583721‬', 'salvatore@cometa.group', 'I thought it would be a good idea to include you, so you can check the emailing feature.'],
    ['Serge', 'Kyatkenen', 'N/A', 'example@forinstance.com', 'Co-worker'],
    ['Bradford', 'Martinez', '+380258564510', 'Marti@lio.com', 'This guy could be helpful'],
    ['Shari', 'Lowe', '+17182656580', 'sharilowe@chin.se', 'She is just pretty'],
    ['Monica', 'Reeves', '+17185265123', 'mully_82@gmail.com', 'I like her'],
    ['Willie', 'Harmon', '+46725216203', 'willme17now@mail.ru', 'He is very funny'],
    ['Hannah', 'Elberg', '+375297887580', 'moneyhaver_han@virgo.net', 'Good informator'],
    ['Alik', 'Dordgiev', '+12055143720', 'buddhan@mail.ia', 'Our connection adviser'],
    ['Volodya', 'Loktev', '+12048202570', 'zanuda56@mail.ru', 'Freelancer'],
    ['Ivan', 'Kirichenko', '+3945362174', 'N/A', 'Contractor'],
    ['Ahmad', 'Stein', '+46758956520', 'nameamid50_done@gmail.com', 'He is mostly busy'],
    ['Frank', 'Ferguson', '+553156987514', 'indika@dream.org', 'Administrator'],
    ['Max', 'Smith', '+13475265238', 'maxibase@gmail.com', 'Helper'],
    ['Marcella', 'Mcbride', '+523856482212', 'N/A', 'Newspaper vendor'],
    ['Cecilia', 'Cook', '+17872569592', 'smilethan_ceccy@list.net', 'Hair stylist'],
    ['Marcus', 'Stephen', '+48568852222', 'irgene@tut.by', 'Delivery guy'],
    ['Lillian', 'Bradley', '+63258595556', 'N/A', 'Model'],
    ['Marcel', 'Daugh', '+19298585660', 'marcello_ny@gmail.com', 'We should call him as soon as possible'],
    ['Valentine', 'Swane', '+823366985214', 'polishernice@yahoo.com', 'Connection officer'],
    ['Felicia', 'Morris', '+823695522213', 'fellli@gmail.com', 'Manager'],
    ['Angela', 'White', '+552236988520', 'brazewhite_28@list.che', 'Supervisor'],
    ['Sam', 'Trininberg', '+79265236690', 'samoscaw@rambler.ru', 'Carpenter'],
    ['Emmanuel', 'Globe', '+380256969220', 'emglobe@mail.br', 'Tile guy'],
    ['Grace', 'Franklin', '+375336262630', '12gradegrace@yahoo.com', 'HR'],
    ['Marcia', 'Parsons', '+46785023600', 'mercyme_1991@gmail.com', 'Do not call her'],
    ['Ana', 'Brown', '+82369485233', 'N/A', 'Marine officer'],
    ['Ida', 'Higgins', '+526699985244', 'higgida_90@yahoo.com', 'Developer'],
    ['Justin', 'Anderson', '+13475698523', 'justanrew@yahoo.com', 'Real Estate'],
    ['Connie', 'Norman', '+3675205698580', 'hotspray_norman@gmail.com', 'Company adviser'],
    ['Sandy', 'Strickman', '+79175623650', 'rusrus_sand@mail.ru', 'Better call him later'],
    ['Delbert', 'Peters', '+19295636360', 'delb_pet@yahoo.com', 'Handy man'],
    ['Mona', 'Garza', '+556331447750', 'N/A', 'Regular local'],
    ['Nick', 'Walless', '+34518565223', 'uptowall1290@list.ua', 'Do not fprget him'],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
