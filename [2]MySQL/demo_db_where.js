var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Lucver1092",
    database:"learning_nodejs"
});

conn.connect(function(err) {
    if (err) throw err;
    conn.query("select * from customers where address='Park Lane 38'", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    })
})