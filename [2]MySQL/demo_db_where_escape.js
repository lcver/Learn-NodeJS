var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Lucver1092",
    database:"learning_nodejs"
});

conn.connect(function(err) {
    if (err) throw err;

    var adr = 'Mountain 21';

    conn.query("select * from customers where address="+ mysql.escape(adr), function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    })
})